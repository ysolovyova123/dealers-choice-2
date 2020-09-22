import axios from 'axios'

const SET_GUESTS = 'SET_GUESTS'

export const setGuests = (guests) => {
  return {
    type: SET_GUESTS,
    guests
  }
}

export const fetchGuests = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/guests')
      dispatch(setGuests(data))
    } catch(err) {
      console.log(err)
    }
  }
}

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_GUESTS:
      return action.guests
    default:
      return state
  }
}
