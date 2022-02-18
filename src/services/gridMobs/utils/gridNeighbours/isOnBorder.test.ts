import {
    BOTTOM_BORDER_INDEXES,
    GRID_DEMENSION,
    LEFT_BORDER_INDEXES,
    RIGHT_BORDER_INDEXES,
    TOP_BORDER_INDEXES,
} from 'services/gridMobs/testing/constants'
import { testGridMock } from 'services/gridMobs/testing/mocks'
import {
    isElementOnTopBorder,
    isElementOnRightBorder,
    isElementOnBottomBorder,
    isElementOnLeftBorder,
} from './isOnBorder'

describe('is element on border', () => {
    test('is element on top border', () => {
        for (let index = 0; index < testGridMock.length; index += 1) {
            if (TOP_BORDER_INDEXES.includes(index)) {
                expect(isElementOnTopBorder(index, GRID_DEMENSION)).toBe(true)
            } else {
                expect(isElementOnTopBorder(index, GRID_DEMENSION)).toBe(false)
            }
        }
    })

    test('is element on right border', () => {
        for (let index = 0; index < testGridMock.length; index += 1) {
            if (RIGHT_BORDER_INDEXES.includes(index)) {
                expect(isElementOnRightBorder(index, GRID_DEMENSION)).toBe(true)
            } else {
                expect(isElementOnRightBorder(index, GRID_DEMENSION)).toBe(
                    false
                )
            }
        }
    })

    test('is element on bottom border', () => {
        for (let index = 0; index < testGridMock.length; index += 1) {
            if (BOTTOM_BORDER_INDEXES.includes(index)) {
                expect(isElementOnBottomBorder(index, GRID_DEMENSION)).toBe(
                    true
                )
            } else {
                expect(isElementOnBottomBorder(index, GRID_DEMENSION)).toBe(
                    false
                )
            }
        }
    })

    test('is element on left border', () => {
        for (let index = 0; index < testGridMock.length; index += 1) {
            if (LEFT_BORDER_INDEXES.includes(index)) {
                expect(isElementOnLeftBorder(index, GRID_DEMENSION)).toBe(true)
            } else {
                expect(isElementOnLeftBorder(index, GRID_DEMENSION)).toBe(false)
            }
        }
    })
})
