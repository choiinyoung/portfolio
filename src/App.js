import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Available from "./component/Available";
import Header from "./component/Header";
import Home from "./component/Home";
import Profile from "./component/Profile";
function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <Header />

    //     {/* <Home />
    //   <Profile />
    //   <Available /> */}
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/profile" element={<Profile />} />
    //       <Route path="/available" element={<Available />} />
    //     </Routes>
    //   </Router>
    // </div>
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/available" element={<Available />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
