import "./Styles/App.scss";
import BarNavigation from "./components/BarNavigation";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="App">
      <BarNavigation />
      <MainContent />
    </div>
  );
};

export default App;
