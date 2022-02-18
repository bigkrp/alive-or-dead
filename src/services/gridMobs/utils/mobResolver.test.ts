import {
    GRID_DEMENSION,
    MOB_ALIVE_NEIGHBOUR_BY_MOB_INDEX,
    MOB_DEAD,
    MOB_DEAD_TO_ALIVE_INDEX,
} from '../testing/constants'
import { testGridMock } from '../testing/mocks'
import createMobByIndex from './createMobByIndex'
import mobResolver from './mobResolver'

test('mobResolver', () => {
    const mob = createMobByIndex(
        MOB_DEAD_TO_ALIVE_INDEX,
        GRID_DEMENSION,
        MOB_DEAD
    )
    const mobs = testGridMock.map((_, index) => {
        const isAlive = MOB_ALIVE_NEIGHBOUR_BY_MOB_INDEX.includes(index)
        return createMobByIndex(index, GRID_DEMENSION, isAlive)
    })

    expect(mobResolver(mob, mobs).isAlive).toBe(true)
})
