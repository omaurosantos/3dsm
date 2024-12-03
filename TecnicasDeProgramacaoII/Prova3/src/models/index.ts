import mongoose from "mongoose";
const { Schema } = mongoose;

const ddds = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42,
    43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82,
    83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99];

const CargoSchema = new Schema({
    cbo: {
        type: String,
        maxlength: [7, "O CBO pode ter no máximo 7 caracteres"],
        required: [true, "O campo CBO é obrigatório"],
        validate: {
            validator: function (value: string) {
                const regex = /^[0-9\-]{7}$/;
                return regex.test(value);
            },
            message: (props: any) => `${props.value} não é um CBO válido`
        }
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
        required: [true, "A idade é obrigatória"],
        validate: {
            validator: function (value: number) {
                return !isNaN(value) && value >= 14;
            },
            message: "A idade deve ser um número maior ou igual a 14",
        },
    },
    email: {
        type: String,
        maxlength: [100, "O email pode ter no máximo 100 caracteres"],
        unique: true,
        required: [true, "O email é obrigatório"],
        validate: [
            {
                validator: function (value: string) {
                    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return regex.test(value);
                },
                message: (props: any) => `${props.value} não é um email válido`
            },
            {
                validator: function (value: string) {
                    const regex = /^[^\s@]+@(adm|fiscal|dev)\.xpto\.tec\.br$/;
                    return regex.test(value);
                },
                message: (props: any) => `${props.value} não pertence à XPTO TEC LTDA.`
            },
        ]

    },
    fone: {
        type: String,
        maxlength: [11, "O telefone pode ter no máximo 11 caracteres"],
        required: [true, "O telefone é obrigatório"],
        validate: [
            {
                validator: function (value: string) {
                    const regex = /^[0-9]{10,11}$/;
                    return regex.test(value);
                },
                message: "O telefone deve conter entre 10 e 11 dígitos"
            },
            {
                validator: function (value: string) {
                    const ddd = parseInt(value.slice(0, 2), 10);
                    return ddds.includes(ddd);
                },
                message: "O DDD informado não é válido"
            }
        ]
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
        },
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

const Cargo = mongoose.model("Cargo", CargoSchema);
const Funcionario = mongoose.model("Funcionario", FuncionarioSchema);
const Mensalista = mongoose.model("Mensalista", MensalistaSchema);

export { Cargo, Funcionario, Mensalista };
