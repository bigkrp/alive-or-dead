import { GridMobsInterface } from '../interfaces/GridMobsInterface'
import { MobInterface } from '../interfaces/MobInterface'
import mobResolver from '../utils/mobResolver'

export default class GridMobs implements GridMobsInterface {
    private mobs: MobInterface[]

    private length: number

    id

    constructor(mobs: MobInterface[], length: number, id: string | number) {
        this.mobs = mobs
        this.length = length
        this.id = id
    }

    getMobs = () => this.mobs

    next = (id: string | number) => {
        const newMobs = this.liveDieReproduction()

        return new GridMobs(newMobs, this.getLength(), id)
    }

    getLength = () => this.length

    liveDieReproduction = () => {
        const oldMobs = this.mobs

        const newMobs = oldMobs.map((mob) => mobResolver(mob, oldMobs))

        return newMobs
    }
}
