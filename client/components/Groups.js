import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {setGroup} from '../store/groupSelection'
//import {fetchTables} from '../store/tables'

class AllGroups extends React.Component {

  render () {
    const {groups, setGroupSelection} = this.props
    //this.props.setGroupSelection(groups)
    return (
    <section>
    <h3>Groups (Select One)</h3>
      <ul id='groupList'>
          {groups.map( group => {
            return (
              <li key={ group.id }>
              <Link to={`/groups/${group.name}`}><h3>{group.name}</h3></Link>
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
    groups: state.groups
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //setGroupSelection: (groupName) => dispatch(setGroup(groupName)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AllGroups)
