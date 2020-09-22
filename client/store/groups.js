import axios from 'axios'

const SET_GROUPS = 'SET_GROUPS'

export const setGroups = (groups) => {
  return {
    type: SET_GROUPS,
    groups
  }
}

export const fetchGroups = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/groups')
      dispatch(setGroups(data))
    } catch(err) {
      console.log(err)
    }
  }
}

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_GROUPS:
      return action.groups
    default:
      return state
  }
}
