import React, { useEffect, useMemo, useState } from 'react'

import getInitialGrid from 'services/getInitialGrid'
import TickContext, { TickContextInterface } from 'services/TickContext'
import Grid from 'components/Grid/Grid'
import { GridMobsInterface } from 'services/gridMobs'

import './styles/App.css'
import tickLogic from 'services/tickLogic'

const init = getInitialGrid()

function App() {
    const [gridState, setGridState] = useState<GridMobsInterface>(init)

    const tickContext: TickContextInterface = useMemo(
        () => ({ gridState, setGridState }),
        [gridState.id]
    )
    return (
        <TickContext.Provider value={tickContext}>
            <div className="App">
                <Grid />
                {/* <button type="button" onClick={onClick}>
                    NEXT
                </button> */}
            </div>
        </TickContext.Provider>
    )
}

export default App
