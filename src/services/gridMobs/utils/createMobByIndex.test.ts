import { GRID_DEMENSION, MOB_ALIVE, MOB_INDEX } from '../testing/constants'
import createMobByIndex from './createMobByIndex'
import getNeighboursByIndex from './getNeighboursByIndex'

const mobMock = {
    isAlive: MOB_ALIVE,
    ownIndex: MOB_INDEX,
    neighbours: getNeighboursByIndex(MOB_INDEX, GRID_DEMENSION),
    getNeighboursIndex: expect.any(Function),
}

test('createMobByIndex shallow test', () => {
    expect(
        createMobByIndex(MOB_INDEX, GRID_DEMENSION, MOB_ALIVE)
    ).toMatchObject(mobMock)
})
