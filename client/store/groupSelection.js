import axios from 'axios'

const SET_GROUP_SELECTION = 'SET_GROUP_SELECTION'

export const setGroup = (groupID) => {
  return {
    type: SET_GROUP_SELECTION,
    groupID
  }
}

const initialState = 0

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_GROUP_SELECTION:
      return action.groupID
    default:
      return state
  }
}
