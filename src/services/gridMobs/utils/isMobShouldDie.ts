import { MobInterface } from '..'
import isMobAlive from './isMobAlive'

export const UNDERPOPULATION_VALUE = 2
export const OVERCROWDING_VALUE = 3

const isMobShouldDie = (mobNeighbours: MobInterface[]): boolean => {
    const isCanBeOvercrowding = mobNeighbours.length > OVERCROWDING_VALUE

    const isUnderpopulation =
        mobNeighbours.filter(isMobAlive).length < UNDERPOPULATION_VALUE

    if (isUnderpopulation) {
        return true
    }

    if (isCanBeOvercrowding) {
        return mobNeighbours.filter(isMobAlive).length > OVERCROWDING_VALUE
    }

    return false
}

export default isMobShouldDie
