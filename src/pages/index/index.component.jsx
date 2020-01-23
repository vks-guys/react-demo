import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.styles.scss'
import { Button, Success } from '../../components/common/button';
import { getDashboardList, getDashboardById } from '../../redux/dashboard/dashboard.actions';

class Index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    };
  };

  componentDidMount(){
    this.props.getDashboardList();
  }
  
  render() {
    return (
      <>
      <h1 className="d">Dashboard</h1>
      <div className="div">Home</div>
      <Button>Index</Button>
      <Success>Index Success</Success>
      <select onChange={this.onChangeHandler}>
          <option>--- Select One---</option>
          {this.props.dashboardList && this.props.dashboardList.map(item => {
            return <option key={item.id} value={item.id}>{item.title}</option>
          })}
        </select>
      </>
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

export default connect(mapStateToProps, { getDashboardList, getDashboardById })(Index);