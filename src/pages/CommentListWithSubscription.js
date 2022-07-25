import CommentList from "./CommentList";
import data from "../utils/data";
import modelClass from "../utils/Model";
import SuperCommentList  from "../utils/SuperCommentList";

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
  const value = { color: selectedData[0].color };
  console.log("SelectedData:", selectedData);

  console.log("SelectedColor:", value.color);
  // ...and returns another component...
  return <SuperCommentList selectedData={selectedData} component={WrappedComponent} color={value.color}/>
} // Function
export default CommentListWithSubscription;
