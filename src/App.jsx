import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold textunderline">
        Hello world!
        </h1>
        <h2 className="text-green-500 bg-red-400">
          Were getting there
        </h2>
      <div>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
