import { MobInterface } from '..'
import isMobNeighbourExsist from './isMobNeighbourExsist'

const getMobNeighbours = (mob: MobInterface, mobArray: MobInterface[]) => {
    return mob
        .getNeighboursIndex()
        .filter(isMobNeighbourExsist)
        .map((neighbourIndex) => mobArray[neighbourIndex])
}

export default getMobNeighbours
