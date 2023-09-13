import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const instrumentationKey = process.env.REACT_APP_INSTRUMENTATION_KEY;

const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: instrumentationKey
    }
});
appInsights.loadAppInsights();
appInsights.trackPageView();

ReactDOM.render(<App />, document.getElementById("root"));
