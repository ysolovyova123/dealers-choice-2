import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchGuests} from '../store/guests'

class Guests extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.tableId)
    let tableId = this.props.match.params.tableId
    this.props.fetchGuests(tableId)
  }
  render () {
    //console.log(this.props.guests)
    //this.props.fetchTables(this.props.match.params.id)
    const {guests} = this.props
    return (
      <section>
          <h3>Guests At The Table</h3>
            <ul id='guestList'>
              {
                guests.map(guest => {
                  return (
                  <li key = {guest.id} className = {guest.id }>
                    {guest.name}
                  </li>
                  )
                })
              }
            </ul>
          </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    guests: state.guests
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGuests: (tableId) => dispatch(fetchGuests(tableId)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Guests)


