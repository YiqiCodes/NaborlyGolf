import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Auth
import { Auth0Provider } from "@auth0/auth0-react";

// Components
import App from "./App";

// Recoil
import { RecoilRoot } from "recoil";

// Styles
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Auth0Provider
          domain="dev-xlq9lv5t.us.auth0.com"
          clientId="EqXkuTbNocKaxX66Ngi0vYhV3E5cnhfE"
          redirectUri={process.env.REACT_APP_CLIENT_URL}
        >
          <App />
        </Auth0Provider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
