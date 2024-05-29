import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Chatpage from "./Pages/Chatpage";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </div>
    </div>
  );
}

export default App;
