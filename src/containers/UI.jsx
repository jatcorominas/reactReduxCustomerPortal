
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Login from "../containers/Login";
import Add from '../containers/Add';
import List from '../containers/List';
import Info from '../containers/Info';
import Edit from '../containers/Edit';
import { Route, Switch} from 'react-router-dom'
import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AppliedRoute from "../components/AppliedRoute";

const UI = ({childProps}) => (
  <div className="container">
    <Navigation childProps={childProps}/>
    <Main childProps={childProps}/>
  </div>
)



const Navigation = ({childProps}) => (

  

  <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Customers</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullLeft>
              {childProps.isAuthenticated 
                ? <Fragment>
                    <LinkContainer to="/customers/new">
                      <NavItem>Add Customer</NavItem>
                    </LinkContainer>
                  </Fragment>
                : <Fragment />
              }
            </Nav>
            <Nav pullRight>
              {childProps.isAuthenticated
                ? <NavItem onClick={(event) => {childProps.userHasAuthenticated(false); childProps.history.push("/login");}}>Logout</NavItem>
                  : <Fragment>
                      <LinkContainer to="/signup">
                        <NavItem>Signup</NavItem>
                      </LinkContainer>
                      <LinkContainer to="/login">
                        <NavItem>Login</NavItem>
                      </LinkContainer>
                    </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>

)

const Main = ({childProps}) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute exact path="/customers" component={List} props={childProps} />
    <AppliedRoute exact path="/customers/new" component={Add} props={childProps}/>
    <AppliedRoute exact path="/customers/:id" component={Info} props={childProps} />
    <AppliedRoute exact path="/customers/:id/edit" component={Edit} props={childProps} />
    <Route component={NotFound} />
  </Switch>
);

export default withRouter(UI);