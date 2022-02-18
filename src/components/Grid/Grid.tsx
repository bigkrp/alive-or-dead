import React, { useContext } from 'react'

import GridItem from 'components/GridItem/GridItem'
import useGrid from 'services/useGrid'

import './Grid.css'

export default function Grid() {
    const [gridCells, length] = useGrid()

    const coutGridColumns = (n: number) => `repeat(${n}, 1fr)`

    return (
        <div
            className="Grid"
            style={{
                background: 'black',
                gridTemplateColumns: coutGridColumns(length),
            }}
        >
            {gridCells.map((mob) => (
                <GridItem key={`${mob.ownIndex}`} isAlive={mob.isAlive} />
            ))}
        </div>
    )
}
