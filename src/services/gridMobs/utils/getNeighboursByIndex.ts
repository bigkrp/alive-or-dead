import { neighboursType } from '..'
import {
    bottomIndexIfExsist,
    bottomLeftIndexIfExist,
    bottomRightIndexIfExsist,
    leftIndexIfExist,
    rightIndexIfExsist,
    topIndexIfExist,
    topLeftIndexIfExist,
    topRightIndexIfExist,
} from './gridNeighbours/indexIfExist'

export default function getNeighboursByIndex(
    index: number,
    gridDemension: number
): neighboursType {
    const topLeftMobNeighbourIndex = topLeftIndexIfExist(index, gridDemension)
    const topMobNeighbourIndex = topIndexIfExist(index, gridDemension)
    const topRightMobNeighbourIndex = topRightIndexIfExist(index, gridDemension)

    const rightMobNeighbourIndex = rightIndexIfExsist(index, gridDemension)

    const bottomRightMobNeighbourIndex = bottomRightIndexIfExsist(
        index,
        gridDemension
    )
    const bottomMobNeighbourIndex = bottomIndexIfExsist(index, gridDemension)
    const bottomLeftMobNeighbourIndex = bottomLeftIndexIfExist(
        index,
        gridDemension
    )

    const leftMobNeighbourIndex = leftIndexIfExist(index, gridDemension)

    return [
        topLeftMobNeighbourIndex,
        topMobNeighbourIndex,
        topRightMobNeighbourIndex,

        rightMobNeighbourIndex,

        bottomRightMobNeighbourIndex,
        bottomMobNeighbourIndex,
        bottomLeftMobNeighbourIndex,

        leftMobNeighbourIndex,
    ]
}
