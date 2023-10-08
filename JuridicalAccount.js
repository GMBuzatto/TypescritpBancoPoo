"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuridicalAccount = void 0;
const BankAccount_1 = require("./BankAccount");
class JuridicalAccount extends BankAccount_1.BankAccount {
    constructor(name, accountNumber, doc, cep, address) {
        super(name, accountNumber, doc, cep, address);
    }
    deposit(value) {
        this.money += value - 0.60;
    }
    withdraw(value) {
        this.money -= value + 0.60;
    }
}
exports.JuridicalAccount = JuridicalAccount;
