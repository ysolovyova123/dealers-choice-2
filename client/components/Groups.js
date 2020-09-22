{/* <section>
          <h3>Groups (Select One)</h3>
            <ul id='groupList'>
                {groups.map( group => {
                  return (
                    <li key={ group.id } className={ groupSelection === group.id ? 'selected': ''}>
                      <a href={ `#${group.name}`}>
                      { group.name }
                      </a>
                    </li>
                  );
                })}
            </ul>
          </section> */}

import React from 'react'
import {connect} from 'react-redux'
import StoriesList from './StoriesList'
import {Link} from 'react-router-dom'

const AllGroups = (props) => {
  const {groups} = props
  return (
    <section>
    <h3>Groups (Select One)</h3>
      <ul id='groupList'>
          {groups.map( group => {
            return (
              <li key={ group.id } className={ groupSelection === group.id ? 'selected': ''}>
              <Link to={`/groups/${group.id}`}><h3>{group.name}</h3></Link>
                <a href={ `#${group.name}`}>
                { group.name }
                </a>
              </li>
            );
          })}
      </ul>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups
  }
}

export default connect(mapStateToProps)(AllGroups)
