import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDashboardList, getDashboardById } from '../../redux/dashboard/dashboard.actions';
import { loadingShow, loadingHide } from '../../redux/common/common.actions';
import "./dashboard.styles.scss"
import { Button, Success, Input } from '../../components/common/button';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {

    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  };

  componentDidMount() {
    this.props.getDashboardList();
  }

  onChangeHandler(event){
    this.props.getDashboardById(event.target.value);
  }

  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
          <h1 className="d">Dashboard</h1>
        <div className="divDashboard"> Dashboard New </div>
        <Button color="red">Dashboard</Button>
        <Success color="green">Dashboard Success</Success>
        <Input defaultValue="@probablyup" type="text" />
        <Input defaultValue="@geelen" type="text" inputColor="green" />
        <select onChange={this.onChangeHandler}>
          <option>--- Select One---</option>
          {this.props.dashboardList && this.props.dashboardList.map(item => {
            return <option key={item.id} value={item.id}>{item.title}</option>
          })}
        </select>
        {this.props.dashboardById &&
          <div>
            <h4> Id : {this.props.dashboardById.id}</h4>
            <p> Title: {this.props.dashboardById.title}</p>
            <p> Body : {this.props.dashboardById.body}</p>
          </div>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { dashboardList, dashboardById } = { ...state.dashboard }
  const { isLoader } = { ...state.common }
  return {
    dashboardList, dashboardById, isLoader
  }
}

export default connect(mapStateToProps, { getDashboardList, getDashboardById, loadingShow, loadingHide })(Dashboard);