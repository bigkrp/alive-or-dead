import { useContext, useEffect } from 'react'
import { MobInterface } from './gridMobs'
import TickContext from './TickContext'
import tickLogic from './tickLogic'

export default function useGrid(): [MobInterface[], number] {
    const tickContext = useContext(TickContext)

    useEffect(() => {
        const timer = tickLogic(tickContext.gridState, tickContext.setGridState)
        return () => clearTimeout(timer)
    }, [])

    return [tickContext.gridState.getMobs(), tickContext.gridState.getLength()]
}
