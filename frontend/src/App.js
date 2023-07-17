import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { AllRoutes } from "./Routes/allRoutes";

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
