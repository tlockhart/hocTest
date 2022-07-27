import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import CommentList from "./pages/CommentList";
import CommentListWithSubscription from "./hocs/CommentListWithSubscription";
import Form from "./components/Form";
import Model from "./utils/Model";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Home/>} /> */}
          <Route exact path="/" element={<CommentList/>} />
          <Route exact path="/withSubscription" element={<CommentListWithSubscription/>} />
          <Route exact path="/form" element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
