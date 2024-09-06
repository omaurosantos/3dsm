"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(parseFloat(answer));
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const prova1 = yield askQuestion('Digite a nota da Prova 1 (10%): ');
            const prova2 = yield askQuestion('Digite a nota da Prova 2 (10%): ');
            const prova3 = yield askQuestion('Digite a nota da Prova 3 (30%): ');
            const atividades = yield askQuestion('Digite a nota das Atividades (20%): ');
            const api = yield askQuestion('Digite a nota da API (30%): ');
            const notaFinal = (prova1 * 0.1 +
                prova2 * 0.1 +
                prova3 * 0.3 +
                atividades * 0.2 +
                api * 0.3).toFixed(2);
            console.log(`A nota final do aluno é: ${notaFinal}`);
        }
        catch (error) {
            console.error('Ocorreu um erro: ', error);
        }
        finally {
            rl.close();
        }
    });
}
main();
