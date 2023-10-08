export class Utils {

    public static generateValidDateCard(): string {
        let date: Date = new Date

        let dateDay: number = date.getDate()
        let dateYear: number = date.getFullYear()

        let dateNow: string = `${dateDay}/${dateYear = + 10}`

        return dateNow
    }

    public static generateNumberCard(): string {

        function numberGenerate(): number {
            // Gera um número aleatório entre 0 e 1
            const numeroAleatorio = Math.random()

            // Calcula o número aleatório dentro do intervalo desejado (1000 a 9999)
            const min = 1000
            const max = 9999
            const numeroGerado = Math.floor(numeroAleatorio * (max - min + 1) + min)
            return numeroGerado
        }

        return `${numberGenerate()} ${numberGenerate()} ${numberGenerate()} ${numberGenerate()}`
    }


    public static generateCvc(): number {

        // Gera um número aleatório entre 0 e 1
        const numeroAleatorio = Math.random();

        // Calcula o número aleatório dentro do intervalo desejado (100 a 999)
        const minimo = 100;
        const maximo = 999;
        const numeroGerado = Math.floor(numeroAleatorio * (maximo - minimo + 1)) + minimo;

        return numeroGerado;
    }

}
