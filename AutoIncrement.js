"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoIncrement = void 0;
class AutoIncrement {
    constructor() {
        this.index = 0;
    }
    autoIncrement() {
        this.index++;
        return this.index;
    }
}
exports.AutoIncrement = AutoIncrement;
