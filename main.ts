import { BankAccount } from "./BankAccount"
import { JuridicalAccount } from "./JuridicalAccount"
import { PhysicalAccount } from "./PhysicalAccount"
import prompt from "prompt-sync"

let option = 0


let list: BankAccount[] = []

let teclado = prompt()
let accountNumber: number
let account: BankAccount | undefined

while (option != 9) {
    console.log("$------$------$------$------$-----$")
    console.log("| 1 - Listar Contas               |")
    console.log("| 2 - Criar Conta                 |")
    console.log("| 3 - Deposito                    |")
    console.log("| 4 - Saque                       |")
    console.log("| 5 - Transferencia               |")
    console.log("| 6 - Deletar Conta               |")
    console.log("|                                 |")
    console.log("| 9 - Sair                        |")
    console.log("$------$------$------$------$-----$")
    option = + teclado("Escolha uma opção: ")

    switch (option) {
        case 1:

            list.forEach(p => console.log(p.showAccounts()))

            break;
        case 2:
            console.clear()
            console.log("Escolha o tipo de conta a criar")
            console.log(" 1 - Físicia")
            console.log(" 2 - Jurídica")
            let typeAccount = + teclado("Escolha uma opção: ")

            if (typeAccount == 1) {
                let name: string = teclado("Digite o nome da conta: ")
                let accountNumber: number = + teclado("Digite o número da conta: ")
                account = list.find(p => p.getAccountNumber() == accountNumber)
                while (accountNumber == account?.getAccountNumber()) {
                    console.log("Número de conta já existente!")
                    accountNumber = + teclado("Insira o número da conta: ")
                }
                let doc: number = + teclado("Digite seu cpf: ")
                let cep: number = + teclado("Digite seu cep: ")
                let address: string = teclado("Digite seu endereço: ")
                let cnpj: BankAccount = new PhysicalAccount(name, accountNumber, doc, cep, address)
                list.push(cnpj)
            } if (typeAccount == 2) {
                console.clear()

                let name: string = teclado("Digite o nome da conta: ")
                let accountNumber: number = + teclado("Digite o número da conta: ")
                account = list.find(p => p.getAccountNumber() == accountNumber)
                while (accountNumber == account?.getAccountNumber()) {
                    console.log("Número de conta já existente!")
                    accountNumber = + teclado("Insira o número da conta: ")
                }
                let doc: number = + teclado("Digite seu cnpj: ")
                let cep: number = + teclado("Digite seu cep: ")
                let address: string = teclado("Digite seu endereço: ")
                let cpf: BankAccount = new JuridicalAccount(name, accountNumber, doc, cep, address)
                list.push(cpf)
            } else {
                console.log("Não existe este tipo de conta!")
            }
            break;
        case 3:
            console.clear()
            accountNumber = + teclado("Insira o número da conta: ")
            account = list.find(p => p.getAccountNumber() == accountNumber)
            let valueDeposit = + teclado("Qual valor deseja depositar: ")
            account?.deposit(valueDeposit)
            break;
        case 4:
            console.clear()
            accountNumber = + teclado("Insira o número da conta: ")
            account = list.find(p => p.getAccountNumber() == accountNumber)
            let accountBalance = account?.getBalance()
            console.log(`Saldo disponível: ${accountBalance}`)
            let valueWithdraw = + teclado("Qual valor deseja sacar: ")
            if (accountBalance && accountBalance > 0) {
                while (valueWithdraw > accountBalance) {
                    console.clear()
                    console.log("Valor de saque inferior ao limite disponível!")
                    console.log(`Saldo disponível: ${accountBalance}`)
                    valueWithdraw = + teclado("Insira o valor que deseja sacar: ")
                }
                account?.withdraw(valueWithdraw)
            }
            else console.log("Você está sem saldo")
            break;
        case 5:
            console.clear()
            accountNumber = + teclado("Insira o número da sua conta: ")
            account = list.find(p => p.getAccountNumber() == accountNumber)
            let accountBalance2 = account?.getBalance()
            console.log(`Saldo disponível: ${accountBalance2}`)
            let valueTransfer = + teclado("Qual valor deseja transferir: ")
            if (accountBalance2 && accountBalance2 > 0) {
                while (valueTransfer > accountBalance2) {
                    console.clear()
                    console.log("Valor de saque inferior ao limite disponível!")
                    console.log(`Saldo disponível: ${accountBalance2}`)
                    valueTransfer = + teclado("Insira o valor que deseja transferir: ")
                }
                let accountNumberTransfer = + teclado("Insira o número da conta que deseja transferir: ")
                let account2 = list.find(p => p.getAccountNumber() == accountNumberTransfer)

                account?.withdraw(valueTransfer)
                account2?.deposit(valueTransfer)
            }
            else console.log("Você está sem saldo")
            break;
        case 6:
            console.clear()
            accountNumber = + teclado("Insira o número da conta que deseja deletar: ")
            account = list.find(p => p.getAccountNumber() == accountNumber)
            let accountIndex = list.findIndex(p => p.getAccountNumber() == accountNumber)
            if (account) {
                let accountBalance = account.getBalance()
                if (accountBalance < 0) {
                    console.log("Por favor pague toda sua divida primeiro!")
                    console.log(`Você está com saldo negativo de ${accountBalance}`)
                } if (accountBalance > 0) {
                    console.log("Por favor saque todo seu saldo primeiro!")
                    console.log(`Você está com saldo de ${accountBalance}`)
                } else {
                    list.splice(accountIndex, 1)
                    console.log("Conta deletada!")
                }
            } else {
                console.log("Conta não encontrada!")
            }
            break;
    }
}