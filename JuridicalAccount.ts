import { BankAccount } from "./BankAccount"

export class JuridicalAccount extends BankAccount {


    constructor(name: string, accountNumber: number, doc: number, cep: number, address: string) {
        super(name, accountNumber, doc, cep, address)
    }

    public deposit(value: number): void {
        this.money += value - 0.60
    }

    public withdraw(value: number): void {
        this.money -= value + 0.60
    }

}