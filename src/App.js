import React,{Suspense, lazy} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Portofolio = lazy(() => import('./pages/Portofolio'));
const Byu = lazy(() => import('./pages/Byu'));
const Contact = lazy(() => import('./pages/Contact'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Google = lazy(() => import('./pages/Google/Google'));
const Landing = lazy(() => import('./pages/Landing'));
const Landing2 = lazy(() => import('./pages/Landing2'));
const Cashier = lazy(() => import('./pages/Cashier'));
const Restaurant = lazy(() => import('./pages/Restaurant'));
const BoxManager = lazy(() => import('./pages/BoxManager'));

export default function App() {
  return (
    <Router>
    <Suspense fallback={<div className="text-gray-500">Loading..</div>}>
      <Switch>
        <Route exact path="/" component={Portofolio}/>
        <Route path="/byu" component={Byu}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/google" component={Google}/>
        <Route path="/landing" component={Landing}/>
        <Route path="/landing2" component={Landing2}/>
        <Route path="/cashier" component={Cashier}/>
        <Route path="/restaurant" component={Restaurant}/>
        <Route path="/boxmanager" component={BoxManager}/>
      </Switch>
    </Suspense>
  </Router>
  )
}
