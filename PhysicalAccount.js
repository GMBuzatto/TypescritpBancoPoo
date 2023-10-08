"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalAccount = void 0;
const BankAccount_1 = require("./BankAccount");
class PhysicalAccount extends BankAccount_1.BankAccount {
    constructor(name, accountNumber, doc, cep, address) {
        super(name, accountNumber, doc, cep, address);
    }
    deposit(value) {
        this.money += value - 0.40;
    }
    withdraw(value) {
        this.money -= value + 0.40;
    }
}
exports.PhysicalAccount = PhysicalAccount;
