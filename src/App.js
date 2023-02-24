import {Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost/CreatePost";
import Main from "./pages/Main/Main";



function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/post-create" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
