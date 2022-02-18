import { MobInterface, neighboursType } from '../interfaces/MobInterface'

export default class Mob implements MobInterface {
    private isAliveValue

    ownIndex

    neighbours

    constructor({
        isAlive,
        ownIndex,
        neighbours,
    }: {
        isAlive: boolean
        ownIndex: number
        neighbours: neighboursType
    }) {
        this.isAliveValue = isAlive
        this.ownIndex = ownIndex
        this.neighbours = neighbours
    }

    get isAlive() {
        return this.isAliveValue
    }

    set isAlive(isAlive: boolean) {
        this.isAliveValue = isAlive
    }

    getNeighboursIndex = () => {
        return this.neighbours
    }
}
