import React, {Component} from "react";

class SuperCommentList extends Component {
    constructor(props) {
      super(props);
      console.log("WithSubscription props:", props);
      this.handleChange = this.handleChange.bind(this);
      this.WrappedComponent = this.props.component;
      this.state = {
        data: this.props.selectedData,
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      this.handleChange();
    }

    componentWillUnmount() {
    }

    handleChange() {
      this.setState({
        data: this.props.selectedData,
      });
    }

    render() {
      console.log("WithSubscription State Data:", this.state.data);
    //   console.log("WithSubscription Props:", this.props);
      // The new WrappedComponent is called here and  renders it with the fresh data!
      // Notice that we pass the original props from CommentList with {..this.props}
      // and add a new prop called data, which has the datasource on it
      return <this.props.component data={this.state.data} {...this.props}/>;
    }
  }

  export default SuperCommentList;