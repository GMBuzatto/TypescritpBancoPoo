import { Utils } from "./Utils"

export abstract class BankAccount {

    private name: string
    private doc: number
    private cep: number
    private address: string
    private _accountNumber: number

    protected money: number

    private _numberCard: string
    private _validAccount: string
    private _cvc: number

    constructor(name: string, accountNumber: number, doc: number, cep: number, address: string) {
        this.name = name
        this.doc = doc
        this.cep = cep
        this.address = address
        this.money = 0
        this._accountNumber = accountNumber
        this._numberCard = Utils.generateNumberCard()
        this._validAccount = Utils.generateValidDateCard()
        this._cvc = Utils.generateCvc()
    }

    public abstract deposit(value: number): void

    public abstract withdraw(value: number): void

    public getAccountNumber(): number {
        return this._accountNumber
    }

    public getBalance(): number {
        return this.money
    }


    public showAccounts(): string {
        return "" +
            `\n Nome do títular: ${this.name}` +
            `\n Doc: ${this.doc}` +
            `\n Endereço: ${this.address}` +
            `\n Cep: ${this.cep}` +
            `\n Número da conta: ${this._accountNumber}` +
            `\n Saldo: ${this.money}` +
            `\n` +
            `\n Dados do Cartão` +
            `\n ${this._numberCard}` +
            `\n cvc   validade` +
            `\n ${this._cvc}    ${this._validAccount}`
    }


}
