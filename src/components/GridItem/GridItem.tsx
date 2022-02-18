import React from 'react'

import './GridItem.css'

export default function GridItem({ isAlive }: { isAlive: boolean }) {
    return <div className={`GridItem ${isAlive ? 'GridItem--alive' : ''}`} />
}
