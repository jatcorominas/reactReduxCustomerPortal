import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import CustomerList from "./containers/CustomerList";
import CustomerAdd from "./containers/CustomerAdd";
import CustomerInfo from "./containers/CustomerInfo";
import CustomerEdit from "./containers/CustomerEdit";
import AppliedRoute from "./components/AppliedRoute";


export default ({childProps}) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <Route exact path="/customers" component={CustomerList} />
    <Route exact path="/customers/new" component={CustomerAdd} />
    <Route exact path="/customers/:id" component={CustomerInfo} />
    <Route exact path="/customers/:id/edit" component={CustomerEdit} />
    { /* Finally, catch all unmatched routes */ }
	<Route component={NotFound} />
  </Switch>;
