import { MailTrapMailProvider } from "../../providers/Implementations/MailTrapMailProvider";
import { PostresUserRepository } from "../../repositories/Implementations/PostgresUserRepository";
import { CreateUseController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const postresUserRepository = new PostresUserRepository();
const mailTrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
    postresUserRepository,
    mailTrapMailProvider
);

const createUseController = new CreateUseController(createUserUseCase)

export { createUserUseCase, createUseController }
