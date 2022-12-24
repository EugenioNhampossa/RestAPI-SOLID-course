import { IMailProvider, IMessage } from "../IMailProvides";
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "0c8a78d6be43ef",
                pass: "cace9a5f4cdb02",
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.mail,
            },
            from: {
                name: message.from.name,
                address: message.from.mail,
            },
            subject: message.subject,
            html: message.body,
        })
    }

}