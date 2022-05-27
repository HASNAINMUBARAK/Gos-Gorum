import Routers from "./Routers";
import "./App.css";
import Collection from "./Components/Collection";
import ApiData from "./Components/apiData";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Routers />
      <Collection />
      <ApiData />
      <Footer />
    </div>
  );
}

export default App;
