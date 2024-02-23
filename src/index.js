import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin.js";
import LandingLayout from "layouts/Landing.js";
import AuthLayout from "layouts/Auth.js";
import RTLLayout from "layouts/RTL.js";

import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  trustWallet,
  zerionWallet,
  bloctoWallet,
  frameWallet,
  rainbowWallet,
  phantomWallet,
  Web3Button,
  useWallet,
  useAddress,
  useConnectionStatus
} from "@thirdweb-dev/react";

ReactDOM.render(
  <ThirdwebProvider
    autoConnect={true}
    activeChain="ethereum"
    clientId="834e3770247ff57d8c02e2f27ae04545"
    supportedWallets={[
      metamaskWallet({ recommended: true }),
      coinbaseWallet(),
      walletConnect(),
      safeWallet({
        personalWallets: [
          metamaskWallet({ recommended: true }),
          coinbaseWallet(),
          walletConnect(),
          trustWallet(),
          zerionWallet(),
          bloctoWallet(),
          frameWallet(),
          rainbowWallet(),
          phantomWallet(),
        ],
      }),
      trustWallet(),
      zerionWallet(),
      bloctoWallet(),
      frameWallet(),
      rainbowWallet(),
      phantomWallet(),
    ]}
  >
    <HashRouter>
      <Switch>
        <Route path={`/caw`} component={AdminLayout} />
        <Route path={`/landing`} component={LandingLayout} />
        <Redirect from={`/dashboard`} to="/caw" />
        <Redirect from={`/`} to="/landing" />
      </Switch>
    </HashRouter>
  </ThirdwebProvider>
  ,
  document.getElementById("root")
);
