import { User } from "../../entities/user";
import { IMailProvider } from "../../providers/IMailProvides";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

//A classe de faz uso de um repositorio, mas em vez de importá-lo, usamos como um atributo e passamo-lo como parâmentro do construtor
export class CreateUserUseCase {
    private usersRepository: IUserRepository;
    private mailProvider: IMailProvider;

    constructor(usersRepository: IUserRepository, mailProvider: IMailProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
    }

    async execute(data: ICreateUserRequestDTO) {
        //Para a execuçõ do useCase são necessários dados, e esses dados serão especificados pelo DTO
        const userAlredyExists = this.usersRepository.findByEmail(data.email);
        console.log(userAlredyExists);


        if (!userAlredyExists) {
            throw new Error("User Already Exists");
        }

        const user = new User(data);
        console.log(user);


        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                mail: data.email,
            },
            from: {
                name: "Equipe do app",
                mail: "equipe@meuapp.com",
            },
            subject: "Bem vindo à nossa plataforma",
            body: "Agora você pode fazer login na nosso plataforma"
        })
        
    }
}