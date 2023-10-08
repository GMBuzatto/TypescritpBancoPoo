"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static generateValidDateCard() {
        let date = new Date;
        let dateDay = date.getDate();
        let dateYear = date.getFullYear();
        let dateNow = `${dateDay}/${dateYear = +10}`;
        return dateNow;
    }
    static generateNumberCard() {
        function numberGenerate() {
            // Gera um número aleatório entre 0 e 1
            const numeroAleatorio = Math.random();
            // Calcula o número aleatório dentro do intervalo desejado (1000 a 9999)
            const min = 1000;
            const max = 9999;
            const numeroGerado = Math.floor(numeroAleatorio * (max - min + 1) + min);
            return numeroGerado;
        }
        return `${numberGenerate()} ${numberGenerate()} ${numberGenerate()} ${numberGenerate()}`;
    }
    static generateCvc() {
        // Gera um número aleatório entre 0 e 1
        const numeroAleatorio = Math.random();
        // Calcula o número aleatório dentro do intervalo desejado (100 a 999)
        const minimo = 100;
        const maximo = 999;
        const numeroGerado = Math.floor(numeroAleatorio * (maximo - minimo + 1)) + minimo;
        return numeroGerado;
    }
}
exports.Utils = Utils;
