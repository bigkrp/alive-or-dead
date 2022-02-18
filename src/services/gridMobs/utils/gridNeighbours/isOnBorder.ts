export const isElementOnLeftBorder = (
    elementIndex: number,
    gridDemension: number
): boolean => elementIndex % gridDemension === 0

export const isElementOnTopBorder = (
    elementIndex: number,
    gridDemension: number
): boolean => elementIndex - gridDemension < 0

export const isElementOnRightBorder = (
    elementIndex: number,
    gridDemension: number
): boolean => (elementIndex + 1) % gridDemension === 0

export const isElementOnBottomBorder = (
    elementIndex: number,
    gridDemension: number
): boolean => elementIndex + gridDemension > gridDemension * gridDemension - 1
