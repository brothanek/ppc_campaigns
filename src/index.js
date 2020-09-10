import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { IntlProvider } from "react-intl"



ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale="en-US">
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
