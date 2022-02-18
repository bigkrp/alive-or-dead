import createMobByIndex from './createMobByIndex'
import { MOB_ALIVE, MOB_DEAD } from '../testing/constants'

const GRID_LENGTH = 5
const MOB_INDEX = 3

test('isMobAlive test - alive', () => {
    const mobToTest = createMobByIndex(MOB_INDEX, GRID_LENGTH, MOB_ALIVE)

    expect(mobToTest.isAlive).toBe(MOB_ALIVE)
})

test('isMobAlive test - dead', () => {
    const mobToTest = createMobByIndex(MOB_INDEX, GRID_LENGTH, MOB_DEAD)

    expect(mobToTest.isAlive).toBe(MOB_DEAD)
})
