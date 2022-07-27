import CommentList from "../pages/CommentList";
import data from "../utils/data";
import modelClass from "../utils/Model";
import SuperCommentList from "../utils/SuperCommentList";

const model = new modelClass(data);

// Create a CommentList component with a withSubscription function
// First parameter is the class of the wrapped component,  the second is the actual data model
const CommentListWithSubscription = withSubscription(CommentList, model.data);


// This function Is the Blueprint of our ComponentListWithSubscription:
//It takes a component Class "ComponentList" as an argument and the data
// to store in state as the second parameter
// It returns a new "ComponentListWithSubscription" component
// that has a data state variable, which contains the data
function withSubscription(WrappedComponent, selectedData) {
    let color = {
        0: "blue",
        1: "red",
        2:  "hotpink"
};
//   const value = { color: selectedData[0].color };
  console.log("SelectedData:", selectedData);

  console.log("SelectedColor:", color[0]);
  // ...and returns a new function that returns a component
  return function ComponentWithSubscription() {
    // HOC must return a component, not a rendered DOM node
    return (
      <SuperCommentList
        selectedData={selectedData}
        component={WrappedComponent}
        color={color}
      />
    );
  }; //ComponentWithSubscription
} // Function
export default CommentListWithSubscription;
