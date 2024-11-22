import mongoose from "mongoose";
const { Schema } = mongoose;

const CargoSchema = new Schema({
    cbo: {
        type: String,
        maxlength: [7, "O CBO pode ter no máximo 7 caracteres"],
        required: [true, "O campo CBO é obrigatório"]
    },
    descricao: {
        type: String,
        maxlength: [45, "A descrição pode ter no máximo 45 caracteres"],
        required: [true, "A descrição é obrigatória"]
    }
});

const FuncionarioSchema = new Schema({
    nome: {
        type: String,
        maxlength: [50, "O nome pode ter no máximo 50 caracteres"],
        required: [true, "O nome é obrigatório"]
    },
    idade: {
        type: Number,
        min: [14, "A idade mínima é 14 anos"],
        required: [true, "A idade é obrigatória"]
    },
    email: {
        type: String,
        maxlength: [100, "O email pode ter no máximo 100 caracteres"],
        unique: true,
        required: [true, "O email é obrigatório"],
        validate: {
            validator: function (value: string) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(value);
            },
            message: (props: any) => `${props.value} não é um email válido`
        }
    },
    fone: {
        type: String,
        maxlength: [11, "O telefone pode ter no máximo 11 caracteres"],
        required: [true, "O telefone é obrigatório"]
    },
    cargo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cargo",
        validate: {
            validator: async function (id: string) {
                const cargo = await Cargo.findById(id); // Verifica se o Cargo existe
                return !!cargo;
            },
            message: "O Cargo fornecido não existe!"
        }
    }
});

const MensalistaSchema = new Schema({
    matricula: {
        type: String,
        maxlength: [10, "A matrícula pode ter no máximo 10 caracteres"],
        unique: true,
        required: [true, "A matrícula é obrigatória"]
    },
    salario: {
        type: Number,
        min: [0.01, "O salário deve ser maior que 0"],
        required: [true, "O salário é obrigatório"]
    },
    funcionario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Funcionario",
        required: [true, "O funcionário é obrigatório"],
        unique: true,
        validate: {
            validator: async function (id: string) {
                const funcionario = await Funcionario.findById(id);
                return !!funcionario;
            },
            message: "O Funcionário fornecido não existe!"
        }
    }
});

const Cargo = mongoose.model("Cargo", CargoSchema, "cargos");
const Funcionario = mongoose.model("Funcionario", FuncionarioSchema, "funcionarios");
const Mensalista = mongoose.model("Mensalista", MensalistaSchema, "mensalistas");

export { Cargo, Funcionario, Mensalista };
