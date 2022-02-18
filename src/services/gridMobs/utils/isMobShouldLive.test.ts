import {
    GRID_DEMENSION,
    MOB_INDEX,
    MOB_NEIGHBOUR_BY_MOB_INDEX,
} from '../testing/constants'
import createMobByIndex from './createMobByIndex'
import * as isMobShouldDie from './isMobShouldDie'
import isMobShouldLive from './isMobShouldLive'

test('isMobShouldLive', () => {
    const mob = createMobByIndex(MOB_INDEX, GRID_DEMENSION, false)
    let minUnderpolulationCount = 1
    const neighbours = MOB_NEIGHBOUR_BY_MOB_INDEX.map((index) => {
        const isAlive =
            minUnderpolulationCount <= isMobShouldDie.OVERCROWDING_VALUE
        minUnderpolulationCount += 1

        return createMobByIndex(index, GRID_DEMENSION, isAlive)
    })

    // console.log(
    //     'neighbours',
    //     neighbours.map((neighbourMob) => neighbourMob.isAlive)
    // )
    // console.log('mob', mob)

    expect(isMobShouldLive(mob, neighbours)).toBe(true)
})
