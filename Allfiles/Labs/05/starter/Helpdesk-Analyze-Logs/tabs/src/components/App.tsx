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

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { loading, theme, themeString, teamsfx } = useTeamsFx();
  const urlParams = new URLSearchParams(window.location.search);

  let viewCount = urlParams.get('viewcount')

  if (viewCount != null && parseInt(viewCount) < 30) {
    let url = parseInt(viewCount) % 2 === 0 ? `/?viewcount=${parseInt(viewCount) + 1}#/trending` : `/?viewcount=${parseInt(viewCount) + 1}`;
    window.setTimeout(() => {
      window.location.href = url;
    }, 2000);
  }

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
