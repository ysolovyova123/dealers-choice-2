import axios from 'axios'

const SET_TABLES = 'SET_TABLES'

export const setTables = (tables) => {
  return {
    type: SET_TABLES,
    tables
  }
}

export const fetchTables = (groupName) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/tables/${groupName}`)
      dispatch(setTables(data))
    } catch(err) {
      console.log(err)
    }
  }
}

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_TABLES:
      return action.tables
    default:
      return state
  }
}
