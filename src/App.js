import logo from './logo.svg';
import './App.css';
import "./styles.css"
import Sidebar from "./components/Sidebar"
import Reviews from "./components/Reviews"
import Average from "./components/Average"
import Sentiment from "./components/Sentiment"
import Visitors from "./components/Visitors"

function App() {
  return (<>
    <Sidebar/>
    <Reviews/>
    <Average/>
    <Sentiment/>
    <Visitors/>
    </>
  );
}

export default App;
