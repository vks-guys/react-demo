import React from 'react';
import WrapperPage from '../wrapper/wrapperPage';
import { connect } from 'react-redux';
import { getDashboardList, getDashboardById } from '../../redux/dashboard/dashboard.actions';
import { loadingShow, loadingHide } from '../../redux/common/common.actions';
import "./dashboard.styles.scss"
import { Button, Success, Input } from '../../components/common/button';
import { Spinner } from '../../components/loader/loader.jsx';

class Dashboard extends WrapperPage {
  constructor(props) {
    super(props)

    this.state = {
      isLoader: false,
      isLoader1: false
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  };

  componentDidMount() {
    this.setState((state, props) => {
      return {
        isLoader: !state.isLoader
      }
    })
    setTimeout(() => {
      this.props.getDashboardList();
      this.setState((state, props) => {
        return {
          isLoader: !state.isLoader
        }
      })
    }, 2000);
  }

  onChangeHandler(event) {
    this.isAuth();
    this.props.getDashboardById(event.target.value);
    this.setState((state, props) => {
      return {
        isLoader1: !state.isLoader1
      }
    })
    setTimeout(() => {
      //this.props.getDashboardById(event.target.value);
      this.setState((state, props) => {
        return {
          isLoader1: !state.isLoader1
        }
      })
    }, 2000);
  }

  render() {
    console.log("dashboard jsx", this.state.isLoader1, this.state.isLoader);
    return (
      <React.Fragment>
        <h1 className="d">Dashboard</h1>
        <div className="divDashboard"> Dashboard New </div>
        <div>
          <Button color="red">Dashboard</Button>
          <Success color="green">Dashboard Success</Success>
          <Input defaultValue="@probablyup" type="text" />
          <Input defaultValue="@geelen" type="text" inputColor="green" />
        </div>

        <div>
          {this.state.isLoader ? <Spinner /> : <select onChange={this.onChangeHandler}>
            <option>--- Select One---</option>
            {this.props.dashboardList && this.props.dashboardList.map(item => {
              return <option key={item.id} value={item.id}>{item.title}</option>
            })}
          </select>}
        </div>

        <div>
          {this.state.isLoader1 ? <Spinner /> : this.props.dashboardById &&
            <div>
              <h4> Id : {this.props.dashboardById.id}</h4>
              <p> Title: {this.props.dashboardById.title}</p>
              <p> Body : {this.props.dashboardById.body}</p>
            </div>
          }
        </div>
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