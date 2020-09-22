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
		this.props.loadTables(),
		this.props.loadGuests()
  }

  render() {
    console.log(store.getState())
    return (
      <Router>
        <div id="main">
						<Route path="/" component={Groups}></Route>
						<Route path="/groups/:id" component={Tables}></Route>
						<Route path="/guests/:id" component={Guests}></Route>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadGroups: () => dispatch(fetchGroups()),
		loadTables: () => dispatch(fetchTables()),
    loadGuests: () => dispatch(fetchGuests()),
  };
};

export default connect(null, mapDispatchToProps)(App);
