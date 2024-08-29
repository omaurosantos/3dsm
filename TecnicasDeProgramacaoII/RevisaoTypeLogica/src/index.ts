class DataUtil {
    static isBissexto(ano:number){
        if(ano % 400 == 0){
            return true;
        } else if (ano % 4 == 0 && ano % 100 != 0){
            return true;
        }
        return false
    }

}

class Pessoa {
    nome:string;
    email:string;
    nasc:string;

    constructor(nome:string, email:string, nasc:string){
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }

    imprimir():void{
        console.log("Nome: " + this.nome);
        console.log("E-mail: " + this.email);
        console.log("Data Nasc.: " + this.nasc);
        console.log("Idade: " + this.idade(this.nasc) + " anos");
        console.log("Anos Bissextos: "+ this.numBissexto())
;    }

    public idade(nasc: any): number{
        const hoje= new Date();
        const ano: number = parseInt(nasc.substring(6,10));
        const mes: number = parseInt(nasc.substring(3,5)) - 1;
        const dia: number = parseInt(nasc.substring(0,2));
        const datan = new Date(ano, mes, dia);
        let idade: number = hoje.getFullYear() - datan.getFullYear();
        const m:number = hoje.getMonth() - datan.getMonth();

        if (m < 0 || (m === 0 && hoje.getDate() < datan.getDate())){
            idade--; /*Verifica se ja fez aniversario (completou o ano)*/
        }

        return idade;
        
    }

    public numBissexto(){
        const ano: number = parseInt(this.nasc.substring(6,10));
        const hoje = new Date();
        const anoatual = hoje.getFullYear();
        let quant:number = 0;

        for (let x=ano; x<=anoatual;x++){
            if (DataUtil.isBissexto(x)){
                console.log(x);
                quant++
            }
        }

        return quant;
    }
}

const cliente = new Pessoa("Mauro Santos","maurodopradosantos@gmail.com","05/04/2005");

cliente.imprimir();



