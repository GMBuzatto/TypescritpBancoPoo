"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
const Utils_1 = require("./Utils");
class BankAccount {
    constructor(name, accountNumber, doc, cep, address) {
        this.name = name;
        this.doc = doc;
        this.cep = cep;
        this.address = address;
        this.money = 0;
        this._accountNumber = accountNumber;
        this._numberCard = Utils_1.Utils.generateNumberCard();
        this._validAccount = Utils_1.Utils.generateValidDateCard();
        this._cvc = Utils_1.Utils.generateCvc();
    }
    getAccountNumber() {
        return this._accountNumber;
    }
    getBalance() {
        return this.money;
    }
    showAccounts() {
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
            `\n ${this._cvc}    ${this._validAccount}`;
    }
}
exports.BankAccount = BankAccount;
