import {
    GRID_DEMENSION,
    LEFT_BORDER_INDEXES,
    TOP_BORDER_INDEXES,
} from 'services/gridMobs/testing/constants'
import { testGridMock } from 'services/gridMobs/testing/mocks'
import {
    topLeftIndexIfExist,
    MOB_NEIGHBOUR_NOT_EXIST_INDEX,
} from './indexIfExist'

describe('index if exist', () => {
    const topAndLeftBorderIndexes = [
        ...TOP_BORDER_INDEXES,
        ...LEFT_BORDER_INDEXES,
    ]

    test('top left index not exist on left and top border', () => {
        for (
            let index = 0;
            index < topAndLeftBorderIndexes.length;
            index += 1
        ) {
            const elementIndex = topAndLeftBorderIndexes[index]

            expect(topLeftIndexIfExist(elementIndex, GRID_DEMENSION)).toBe(
                MOB_NEIGHBOUR_NOT_EXIST_INDEX
            )
        }
    })
    test('top left index exist on non left and top border', () => {
        for (let index = 0; index < testGridMock.length; index += 1) {
            if (!topAndLeftBorderIndexes.includes(index)) {
                expect(topLeftIndexIfExist(index, GRID_DEMENSION)).not.toBe(
                    MOB_NEIGHBOUR_NOT_EXIST_INDEX
                )
            }
        }
    })
    // TODO tests for other functions according to the border
})
