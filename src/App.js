import { Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";

// Pages
import MainMap from "./pages/MainMap";

// Styles
import "./App.css";
import * as S from "./App.styles";

function App() {
  return (
    <S.AppContainer>
      <Route exact path="/" name="Map">
        <Navbar />
        <MainMap />
      </Route>
    </S.AppContainer>
  );
}

export default App;
