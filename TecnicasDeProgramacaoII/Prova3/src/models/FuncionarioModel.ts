class FuncionarioModel {
    id: string = ""
    nome: string;
    idade: number;
    email: string;
    fone: string;


    constructor(nome: string, email: string, fone: string, idade: number){
        this.nome = nome;
        this.email = email;
        this.fone = fone;
        this.idade = idade;
    }
}

export default FuncionarioModel;