import {
    GRID_DEMENSION,
    MOB_ALIVE,
    MOB_INDEX,
    MOB_NEIGHBOUR_BY_MOB_INDEX,
} from '../testing/constants'
import { testGridMock } from '../testing/mocks'
import createMobByIndex from './createMobByIndex'
import getMobNeighbours from './getMobNeighbours'

test('getMobNeighbours 3 of 8 exist', () => {
    const mob = createMobByIndex(MOB_INDEX, GRID_DEMENSION, MOB_ALIVE)
    const mobArray = testGridMock.map((_, index) =>
        createMobByIndex(index, GRID_DEMENSION, MOB_ALIVE)
    )
    const mobNeighboursByMobIndex = MOB_NEIGHBOUR_BY_MOB_INDEX.map((index) => {
        return expect.objectContaining({ ownIndex: index })
    })

    expect(getMobNeighbours(mob, mobArray)).toEqual(
        expect.arrayContaining(mobNeighboursByMobIndex)
    )
})
