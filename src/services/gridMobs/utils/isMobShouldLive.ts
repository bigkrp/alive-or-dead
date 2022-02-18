import { MobInterface } from '..'
import isMobAlive from './isMobAlive'
import isMobShouldDie from './isMobShouldDie'

const isMobShouldLive = (
    mob: MobInterface,
    mobNeighbours: MobInterface[]
): boolean => {
    if (mob.isAlive) {
        return !isMobShouldDie(mobNeighbours)
    }

    return mobNeighbours.filter(isMobAlive).length === 3
}

export default isMobShouldLive
