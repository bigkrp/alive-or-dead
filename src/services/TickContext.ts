import { createContext, Dispatch, SetStateAction } from 'react'
import getInitialGrid from './getInitialGrid'
import { GridMobsInterface } from './gridMobs'

export interface TickContextInterface {
    gridState: GridMobsInterface
    setGridState: Dispatch<SetStateAction<GridMobsInterface>> | any
}

const TickContext = createContext<TickContextInterface>({
    gridState: getInitialGrid(),
    setGridState() {
        return null
    },
})

export default TickContext
