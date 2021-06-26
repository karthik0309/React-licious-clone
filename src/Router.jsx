import React ,{lazy,Suspense} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App=lazy(()=>import("./App"))
const Search=lazy(()=>import("./Pages/Search"))
const AboutUs=lazy(()=>import("./Pages/AboutUs"))


const Routes = () => {
    return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Search" exact component={Search} />
        <Route path="/AboutUs"  component={AboutUs} />
      </Switch>
    </Router>
    </Suspense>
    )
}

export default Routes
