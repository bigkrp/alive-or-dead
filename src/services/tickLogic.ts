import { Dispatch, SetStateAction } from 'react'
import { GridMobsInterface } from './gridMobs'

const TICK_INTERVAL = 400

export default function tickLogic(
    currentGridState: GridMobsInterface,
    setGridState: Dispatch<SetStateAction<GridMobsInterface>>
) {
    let timer: NodeJS.Timeout

    const tick = () => {
        setGridState((prevGridState) =>
            prevGridState.next(new Date().getTime())
        )
    }

    timer = setTimeout(function run() {
        tick()
        timer = setTimeout(run, TICK_INTERVAL)
    }, TICK_INTERVAL)

    return timer
}
