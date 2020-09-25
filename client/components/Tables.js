import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchTables} from '../store/tables'
import {setGroup} from '../store/groupSelection'

class Tables extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.name)
    this.props.setGroupSelection(this.props.match.params.name) // sets selected Group
    this.props.fetchTables(this.props.match.params.name)
    //console.log(this.props.tables)
		//console.log(this.props.tables)
		//this.props.loadTables(),
		//this.props.loadGuests()
  }
  render () {
    //console.log(this.props.tables)
    //this.props.fetchTables(this.props.match.params.id)
    const {tables, groups, groupName} = this.props
    return (
      <section>
      <h3>Tables (Select One)</h3>
        <ul id='tableList'>
            {tables.map( table => {
              return (
                <li key={ table.id }>
                <Link to={`/groups/${groupName}/guests/${table.table}`}><h3>{table.table}</h3></Link>
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
    tables: state.tables,
    groups: state.groups,
    groupName: state.groupName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTables: (groupId) => dispatch(fetchTables(groupId)),
    setGroupSelection: (groupName) => dispatch(setGroup(groupName)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Tables)


