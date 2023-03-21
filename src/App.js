import Button from "./component/button/button";
import NavbarComponent from "./layout/navbar/navbar";
import Home from "./page/home";
import { GrPlayFill } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      {/* <NavbarComponent/> */}
      {/* <Home /> */}
      <Button title="play" background="white" lefticon={<GrPlayFill />} />
      <Button title="okay" background="grey" />
    </div>
  );
}

export default App;
