import {
    GRID_DEMENSION,
    MOB_FIRST_INDEX,
    MOB_INDEX,
    MOB_NEIGHBOUR_BY_MOB_FIRST_INDEX,
    MOB_NEIGHBOUR_BY_MOB_INDEX,
} from '../testing/constants'
import getNeighboursByIndex from './getNeighboursByIndex'

describe('get neighbours by index', () => {
    test('get neighbours by index, all exist', () => {
        const neighbours = getNeighboursByIndex(MOB_INDEX, GRID_DEMENSION)

        expect(neighbours).toEqual(MOB_NEIGHBOUR_BY_MOB_INDEX)
    })

    test('get neighbours by index, not all exist', () => {
        const neighbours = getNeighboursByIndex(MOB_FIRST_INDEX, GRID_DEMENSION)

        expect(neighbours).toEqual(MOB_NEIGHBOUR_BY_MOB_FIRST_INDEX)
    })
})
