import React from "react"
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from '../store/index'
import { fetchGroups } from '../store/groups.js';
import { fetchTables } from '../store/tables';
import { fetchGuests } from '../store/guests';
import Groups from './Groups'
import Tables from './Tables'
import Guests from './Guests'

class App extends React.Component {
  componentDidMount() {
		this.props.loadGroups(),
		console.log(this.props.groups)
		//this.props.loadTables(),
		//this.props.loadGuests()
		// <Route path="/guests/:id" component={Guests}></Route>
  }

  render() {
    console.log(store.getState())
    return (
      <Router>
        <div id="main">
						<Route path="/" component={Groups}></Route>
						<Route path="/groups/:name" component={Tables}></Route>
						<Route path="/groups/:name/guests/:tableId" component={Guests}></Route>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadGroups: () => dispatch(fetchGroups()),
		//loadTables: () => dispatch(fetchTables()),
    //loadGuests: () => dispatch(fetchGuests()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
