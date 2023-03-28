import LandingPage from "./components/LandingPage";
import MyProvider from "./store/MyProvider";

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
