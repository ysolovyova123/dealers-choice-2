import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchTables} from '../store/tables'

class Tables extends React.Component {

  render () {
    this.props.fetchTables(this.props.match.params.id)
    const {tables} = this.props
    return (
      <section>
      <h3>Tables (Select One)</h3>
        <ul id='tableList'>
            {tables.map( table => {
              return (
                <li key={ table.id }>
                <Link to={`/guests/${table.id}`}><h3>{table.id}</h3></Link>
                </li>
              );
            })}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tables: state.tables
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTables: (groupId) => dispatch(fetchTables(groupId)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Tables)


