
const counterReducer = (state: { boxCount: number } = { boxCount: 0 }, action: any) => {
  switch (action.type) {
    case 'INC':
      return state.boxCount + action.data
    default:
      return state
  }
}

export default counterReducer