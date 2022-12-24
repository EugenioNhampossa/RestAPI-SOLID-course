import { User } from "../../entities/user";
import { IUserRepository } from "../IUsersRepository";

export class PostresUserRepository implements IUserRepository {
    //base de dados fake
    private users: User[] = [];

    async findByEmail(email: string): Promise<User> {
        console.log(this.users);
        const user = this.users.find(user => user.email === email)
        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }


}