const baseBoxColor = "#1d7999";

// Reducer >>> Reduces repsonse from the action and updates the store.
const boxColorReducer = (state: any = baseBoxColor, action: any) => {
  switch (action.type) {
    case 'baseColor':
      return action.data
    default:
      return state
  }
}

export default boxColorReducer