import { v4 } from "uuid";

export class User {
    public readonly id: string

    public name: string
    public email: string
    public password: string

    //Omit: O construtor receberá todos os atributos, menos o id
    // O id será opcional
    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = v4();
        }
    }
}