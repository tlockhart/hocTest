import React, {Component, useEffect, useState} from 'react';
import data from "../utils/data";
import Comment from "../components/Comment";

// const color = data[1].color;
// let colorProps = {color};

class  CommentList extends Component {
    constructor(props) {
      console.log("CommentList Props:", props);
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.state= {
            // Model object containing posts
            // model: data,
            // DataSource" is some global data source
            comments: data,
        }
    }
    componentDidMount() {
        // Subscribe to changes
        // this.handleChange();
    }

    componentWillUnmount() {
    }

    // handleChange() {
    //   console.log("On Mount call handleChange");
    //     // Update component state whenever the data source changes
    //     this.setState({
    //       comments: this.state.model.data,
    //     });
    //   }

    // console.log("Home Props:", props);
    // let model = new Model(data);
    // console.log("Home:", model.data);
    // let list;
    // return (
    //     <div>
    //         Example 1-2: Instead of passign in a post and body for display as an attribute.  Send two blocks to be formatted and dsplayed by the blogpost component
    //         {
    //             list = model.data.map((item) => {
    //                 return <div>{item.author}</div>
    //             })
    //         }
    //     </div>
    // )
    render() {
      console.log("Comments:", data);
        return (
          <div>
            <b>This is Example1: Direct call to Comment display component, from CommentList.</b>
            {this.state.comments.map((comment, index) => (
              <Comment comment={comment} key={comment.id} color={this.props.color[index]}/>
            ))}
          </div>
        );
      }
}
export default CommentList;