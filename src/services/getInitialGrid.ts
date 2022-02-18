import { createMobByIndex, GridMobs, GridMobsInterface } from './gridMobs'

const GRID_DEMENSION = 50

const initGridMobs = (demension: number) => {
    const Mobs = []

    for (let index = 0; index < demension * demension; index += 1) {
        const isAlive = Math.random() < 0.5
        const mob = createMobByIndex(index, demension, isAlive)

        Mobs.push(mob)
    }

    return new GridMobs(Mobs, demension, new Date().getTime())
}

export default function getInitialGrid(): GridMobsInterface {
    return initGridMobs(GRID_DEMENSION)
}
