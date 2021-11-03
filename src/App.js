// Components
import Navbar from "./components/Navbar/Navbar";

// Pages
import MainMap from "./pages/MainMap";
import MainHeatMap from "./pages/MainHeatMap";

import { Route } from "react-router-dom";

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
      <Route exact path="/heatmap" name="HeatMap">
        <Navbar />
        <MainHeatMap />
      </Route>
    </S.AppContainer>
  );
}

export default App;
