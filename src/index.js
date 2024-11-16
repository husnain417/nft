import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.Fragment>
        <BrowserRouter>
        <ScrollToTop />
            <Auth0Provider
                    domain="dev-j70cakn0mswurq8f.us.auth0.com"
                    clientId="TFQUPF2Scz2CUNqIJgxtlpPafSI0yvgy"
                    authorizationParams={{
                    redirect_uri: window.location.origin
                    }}
                >
                    <App />
            </Auth0Provider>
        </BrowserRouter>
    </React.Fragment>
);

