import "./Styles/App.scss";
import BarNavigation from "./components/BarNavigation";
import MainContent from "./components/MainContent";
import BarControl from "./components/BarControl";

const App = () => {
  return (
    <div className="App">
      <BarNavigation />
      <MainContent />
      <BarControl />
    </div>
  );
};

export default App;
