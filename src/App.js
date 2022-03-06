import { Route } from "react-router-dom";

// Components
import Navbar from "./components/NavigationBar/Navbar";

// Pages
import Home from "./pages/Home";
import MainMap from "./pages/MainMap";
import Products from "./pages/Products";
import Videos from "./pages/Videos";
import Yardages from "./pages/Yardages";

// Styles
import "./App.css";
import * as S from "./App.styles";

function App() {
  return (
    <S.AppContainer>
      <Navbar />
      <Route exact path="/" name="Home">
        <Home />
      </Route>
      <Route exact path="/yardages" name="Yardages">
        <Yardages />
      </Route>
      <Route exact path="/map" name="Map">
        <MainMap />
      </Route>
      <Route exact path="/products" name="Products">
        <Products />
      </Route>
      <Route exact path="/videos" name="Video">
        <Videos />
      </Route>
    </S.AppContainer>
  );
}

export default App;
