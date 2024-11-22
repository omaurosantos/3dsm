class AutorLivroModel {
    id:string = ""
    nome:string;
    email: string;
    fone: string;
    idade: string;

    constructor(nome:string, email: string, fone: string, idade: string){
        this.nome = nome;
        this.email = email;
        this.fone = fone;
        this.idade = idade;
    }
}

export default AutorLivroModel;