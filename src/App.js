import "./App.css";
import Available from "./component/Available";
import Header from "./component/Header";
import Home from "./component/Home";
import Profile from "./component/Profile";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Profile />
      <Available />
    </div>
  );
}

export default App;
