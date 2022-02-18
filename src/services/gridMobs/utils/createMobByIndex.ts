import { Mob } from '..'
import getNeighboursByIndex from './getNeighboursByIndex'

export default function createMobByIndex(
    index: number,
    gridDemension: number,
    isAlive = false
) {
    return new Mob({
        isAlive,
        ownIndex: index,
        neighbours: getNeighboursByIndex(index, gridDemension),
    })
}
