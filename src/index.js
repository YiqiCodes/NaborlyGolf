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
          domain={process.env.REACT_APP_AUTH_0_DOMAIN}
          clientId={process.env.REACT_APP_AUTH_0_CLIENT_ID}
          redirectUri={process.env.REACT_APP_CLIENT_URL}
        >
          <App />
        </Auth0Provider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
