import {
    isElementOnBottomBorder,
    isElementOnLeftBorder,
    isElementOnRightBorder,
    isElementOnTopBorder,
} from './isOnBorder'

export const MOB_NEIGHBOUR_NOT_EXIST_INDEX = -1

export const topLeftIndexIfExist = (
    ownIndex: number,
    gridDemension: number
): number => {
    const topLeftIndex = ownIndex - gridDemension - 1
    const isOnTopBorder = isElementOnTopBorder(ownIndex, gridDemension)
    const isOnLeftBorder = isElementOnLeftBorder(ownIndex, gridDemension)

    return isOnTopBorder || isOnLeftBorder
        ? MOB_NEIGHBOUR_NOT_EXIST_INDEX
        : topLeftIndex
}

export const topIndexIfExist = (
    ownIndex: number,
    gridDemension: number
): number => {
    const topIndex = ownIndex - gridDemension
    const isOnTopBorder = isElementOnTopBorder(ownIndex, gridDemension)

    return isOnTopBorder ? MOB_NEIGHBOUR_NOT_EXIST_INDEX : topIndex
}

export const topRightIndexIfExist = (
    ownIndex: number,
    gridDemension: number
): number => {
    const topRightIndex = ownIndex - gridDemension + 1
    const isOnTopBorder = isElementOnTopBorder(ownIndex, gridDemension)
    const isOnRightBorder = isElementOnRightBorder(ownIndex, gridDemension)

    return isOnTopBorder || isOnRightBorder
        ? MOB_NEIGHBOUR_NOT_EXIST_INDEX
        : topRightIndex
}

export const rightIndexIfExsist = (
    ownIndex: number,
    gridDemension: number
): number => {
    const rightIndex = ownIndex + 1
    const isOnRightBorder = isElementOnRightBorder(ownIndex, gridDemension)

    return isOnRightBorder ? MOB_NEIGHBOUR_NOT_EXIST_INDEX : rightIndex
}

export const bottomRightIndexIfExsist = (
    ownIndex: number,
    gridDemension: number
): number => {
    const bottomRightLeftIndex = ownIndex + gridDemension + 1
    const isOnRightBorder = isElementOnRightBorder(ownIndex, gridDemension)
    const isOnBottomBorder = isElementOnBottomBorder(ownIndex, gridDemension)

    return isOnRightBorder || isOnBottomBorder
        ? MOB_NEIGHBOUR_NOT_EXIST_INDEX
        : bottomRightLeftIndex
}

export const bottomIndexIfExsist = (
    ownIndex: number,
    gridDemension: number
): number => {
    const bottomIndex = ownIndex + gridDemension
    const isOnBottomBorder = isElementOnBottomBorder(ownIndex, gridDemension)

    return isOnBottomBorder ? MOB_NEIGHBOUR_NOT_EXIST_INDEX : bottomIndex
}

export const bottomLeftIndexIfExist = (
    ownIndex: number,
    gridDemension: number
): number => {
    const bottomLeftIndex = ownIndex + gridDemension - 1
    const isOnLeftBorder = isElementOnLeftBorder(ownIndex, gridDemension)
    const isOnBottomBorder = isElementOnBottomBorder(ownIndex, gridDemension)

    return isOnLeftBorder || isOnBottomBorder
        ? MOB_NEIGHBOUR_NOT_EXIST_INDEX
        : bottomLeftIndex
}

export const leftIndexIfExist = (
    ownIndex: number,
    gridDemension: number
): number => {
    const leftIndex = ownIndex - 1
    const isOnLeftBorder = isElementOnLeftBorder(ownIndex, gridDemension)

    return isOnLeftBorder ? MOB_NEIGHBOUR_NOT_EXIST_INDEX : leftIndex
}
