import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList, getDataById } from '../redux/dashboard/dashboard.actions';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {

    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    console.log("Dashboard", this.props)
  };

  componentDidMount() {
    this.props.getList();
  }

  onChangeHandler(event){
    //alert(event.target.value)
    this.props.getDataById(event.target.value);
    console.log("onChangeHandler", this.props);
  }

  render() {
    return (
      <React.Fragment>
        {console.log("history", this.props.data ? "true" : "false")}
        <div> Dashboard </div>
        <select onChange={this.onChangeHandler}>
          <option>--- Select One---</option>
          {this.props.data && this.props.data.map(item => {
            return <option key={item.id} value={item.id}>{item.title}</option>
          })}
        </select>
        {this.props.dataById &&
          <div>
            <h4> Id : {this.props.dataById.id}</h4>
            <p> Title: {this.props.dataById.title}</p>
            <p> Body : {this.props.dataById.body}</p>
          </div>
        }

        {/* <ul>
          {this.props.data && this.props.data.map(item => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ul> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps", { ...state.dashboard })
  const { data, dataById } = { ...state.dashboard }
  return {
    data, dataById
  }
}

export default connect(mapStateToProps, { getList, getDataById })(Dashboard);
