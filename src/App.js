import { useContext } from "react";
import LandingPage from "./components/LandingPage";
import MyProvider, { MyContext } from "./store/MyProvider";

function App() {
  return (
    <div>
      <MyProvider>
        <LandingPage />
      </MyProvider>
    </div>
  );
}

export default App;
