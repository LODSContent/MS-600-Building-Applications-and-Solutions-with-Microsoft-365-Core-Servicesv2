// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider, teamsTheme, Loader } from "@fluentui/react-northstar";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import { useTeamsFx } from "@microsoft/teamsfx-react";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import DashboardTab from "./DashboardTab";
import "./App.css";
import TabConfig from "./TabConfig";
import { TeamsFxContext } from "./Context";
import TrendingTab from "./TrendingTab";
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const instrumentationKey = process.env.REACT_APP_INSTRUMENTATION_KEY;
/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { loading, theme, themeString, teamsfx } = useTeamsFx();

  const appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: instrumentationKey
    }
  });
  appInsights.loadAppInsights();
  appInsights.trackPageView();

  return (
    <TeamsFxContext.Provider value={{ theme, themeString, teamsfx }}>
      <Provider theme={theme || teamsTheme} styles={{ backgroundColor: "#eeeeee" }}>
        <Router>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          {loading ? (
            <Loader style={{ margin: 100 }} />
          ) : (
            <>
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/termsofuse" component={TermsOfUse} />
              <Route exact path="/dashboard" component={DashboardTab} />
              <Route exact path="/config" component={TabConfig} />
              <Route exact path="/trending" component={TrendingTab} />
            </>
          )}
        </Router>
      </Provider>
    </TeamsFxContext.Provider>
  );
}
