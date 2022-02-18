export type neighboursType = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
]

export interface MobInterface {
    isAlive: boolean
    ownIndex: number
    neighbours: neighboursType
    getNeighboursIndex: () => neighboursType
}
