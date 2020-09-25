import axios from 'axios'

const SET_GROUP_SELECTION = 'SET_GROUP_SELECTION'

export const setGroup = (groupName) => {
  return {
    type: SET_GROUP_SELECTION,
    groupName
  }
}

const initialState = 0

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_GROUP_SELECTION:
      return action.groupName
    default:
      return state
  }
}
