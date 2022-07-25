import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import CommentList from "./pages/CommentList";
import CommentListWithSubscription from "./pages/CommentListWithSubscription";
import Model from "./utils/Model";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Home/>} /> */}
          <Route exact path="/" element={<CommentList/>} />
          <Route exact path="/withSubscription" element={<CommentListWithSubscription/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
