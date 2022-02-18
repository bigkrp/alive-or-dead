import Mob from 'services/gridMobs/models/Mob'
import { MobInterface } from '..'
import getMobNeighbours from './getMobNeighbours'
import isMobShouldLive from './isMobShouldLive'

export default function mobResolver(
    mob: MobInterface,
    mobsArray: MobInterface[]
) {
    const mobNeighbours = getMobNeighbours(mob, mobsArray)

    const isAlive = isMobShouldLive(mob, mobNeighbours)

    return new Mob({
        ...mob,
        isAlive,
    })
}
