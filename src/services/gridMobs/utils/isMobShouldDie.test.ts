import {
    GRID_DEMENSION,
    MOB_NEIGHBOUR_BY_MOB_INDEX,
} from '../testing/constants'
import createMobByIndex from './createMobByIndex'
import * as isMobShouldDie from './isMobShouldDie'

describe('isMobShouldDie', () => {
    test('underpopulation', () => {
        let minUnderpolulationCount = 1
        const neighbours = MOB_NEIGHBOUR_BY_MOB_INDEX.map((index) => {
            const isAlive =
                minUnderpolulationCount < isMobShouldDie.UNDERPOPULATION_VALUE
            minUnderpolulationCount += 1

            return createMobByIndex(index, GRID_DEMENSION, isAlive)
        })

        expect(isMobShouldDie.default(neighbours)).toBe(true)
    })

    test('overcrowding', () => {
        let minOvercrowdingCount = 1
        const neighbours = MOB_NEIGHBOUR_BY_MOB_INDEX.map((index) => {
            const isAlive =
                minOvercrowdingCount <= isMobShouldDie.OVERCROWDING_VALUE + 1
            minOvercrowdingCount += 1

            return createMobByIndex(index, GRID_DEMENSION, isAlive)
        })

        expect(isMobShouldDie.default(neighbours)).toBe(true)
    })

    test("stayin' alive, 2 live neighbour", () => {
        let minUnderpolulationCount = 1
        const neighbours = MOB_NEIGHBOUR_BY_MOB_INDEX.map((index) => {
            const isAlive =
                minUnderpolulationCount < isMobShouldDie.OVERCROWDING_VALUE
            minUnderpolulationCount += 1

            return createMobByIndex(index, GRID_DEMENSION, isAlive)
        })

        expect(isMobShouldDie.default(neighbours)).toBe(false)
    })

    test("ha-ha-ha-ha stayin' alive, 3 live neighbour", () => {
        let minUnderpolulationCount = 1
        const neighbours = MOB_NEIGHBOUR_BY_MOB_INDEX.map((index) => {
            const isAlive =
                minUnderpolulationCount <= isMobShouldDie.OVERCROWDING_VALUE
            minUnderpolulationCount += 1

            return createMobByIndex(index, GRID_DEMENSION, isAlive)
        })

        expect(isMobShouldDie.default(neighbours)).toBe(false)
    })
})
