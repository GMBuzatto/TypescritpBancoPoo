export class AutoIncrement {

    private index: number

    constructor() {
        this.index = 0
    }

    public autoIncrement(): number {
        this.index++
        return this.index
    }
}