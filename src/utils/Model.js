import React, { Component } from "react";

class Model extends Component {
  constructor(dataList) {
    console.log("Model: Data:", dataList);
    super(dataList);
    this.state = {
      data: dataList,
    }
  }

  get data() {
    return this.state.data;
  }

  set data(newObject) {
    this.setState({data: newObject});
  }

  // render() {
  //   return (<>this is a test!</>);
  // }
}

export default Model;
