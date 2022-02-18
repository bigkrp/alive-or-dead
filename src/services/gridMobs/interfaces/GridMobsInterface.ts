import { MobInterface } from './MobInterface'

export interface GridMobsInterface {
    getMobs: () => MobInterface[]
    next: (id: number | string) => GridMobsInterface
    getLength: () => number
    id: string | number
}
