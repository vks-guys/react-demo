import React, { Component } from 'react';
import './index.styles.scss'
import { Button, Success } from '../../components/common/button';

class Index extends Component {
  render() {
    return (
      <>
      <h1 className="d">Dashboard</h1>
      <div className="div">Home</div>
      <Button>Index</Button>
      <Success>Index Success</Success>
      </>
    );
  }
}

export default Index;