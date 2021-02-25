import { Redirect, Route, Switch } from "react-router-dom"
import AppPage from "./pages/AppPage/AppPage"
import { ThemeProvider } from "@material-ui/core/styles"
import useSessionTheme from "./libs/hooks/useSessionTheme"
import { connect } from "react-redux"
import HowToUsePage from "./pages/HowToUsePage/HowToUsePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ProgressPage from "./pages/ProgressPage/ProgressPage"
import AppShell from "./hoc/AppShell/AppShell"

function App({ session }) {
  const theme = useSessionTheme(session)

  return (
    <ThemeProvider theme={theme}>
      <AppShell>
        <Switch>
          <Route path="/app" component={AppPage} />
          <Route path="/progress" component={ProgressPage} />
          <Route path="/how-to-use" component={HowToUsePage} />
          <Route path="/about" component={AboutPage} />
          <Redirect exact from="/" to="/app" />
          <Route component={NotFoundPage} />
        </Switch>
      </AppShell>
    </ThemeProvider>
  )
}

const mapStateToProps = state => ({
  session: state.sessions.order[state.sessions.current],
})

export default connect(mapStateToProps)(App)
