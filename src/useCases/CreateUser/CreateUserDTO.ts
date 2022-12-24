// O DTO(DATA TRANSFER OBJECT) é usado para transferir objectos de uma camada para a outra
//Será especificado o formatos dos dados que serão usado para a execução de um useCase, nesse caso, criação de usuário.

export interface ICreateUserRequestDTO {
    name: string,
    email: string,
    password: string
}