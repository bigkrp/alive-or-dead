import isMobNeighbourExsist from './isMobNeighbourExsist'

test('isMobNeighbourExsist', () => {
    expect(isMobNeighbourExsist(-1)).toBe(false)
    expect(isMobNeighbourExsist(2)).toBe(true)
})
