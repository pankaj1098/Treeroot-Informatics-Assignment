import { useSelector } from "react-redux/es";
import "./App.css";
import DisplayWidthOfWindow from "./components/DisplayWidthOfWindow";
import Form from "./components/Form";
import Header from "./components/Header";
import Posts from "./components/Posts";

function App() {
  const postPage = useSelector((state) => state.data.postPagerender);
  const formPage = useSelector((state) => state.data.formPagerender);
  const windowPage = useSelector((state) => state.data.windowWidthPagerender);

  return (
    <div className="App">
      <Header />
      {postPage && <Posts />}
      {formPage && <Form />}
      {windowPage && <DisplayWidthOfWindow />}
    </div>
  );
}

export default App;
