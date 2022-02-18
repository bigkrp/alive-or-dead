import { MOB_NEIGHBOUR_NOT_EXIST_INDEX } from './gridNeighbours/indexIfExist'

const isMobNeighbourExsist = (neighbourIndex: number) =>
    neighbourIndex !== MOB_NEIGHBOUR_NOT_EXIST_INDEX

export default isMobNeighbourExsist
