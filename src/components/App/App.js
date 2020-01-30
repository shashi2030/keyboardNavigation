import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Plumbing from '../../pages/Plumbing/Plumbing';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/link1" component={Plumbing} />
                    {/* <Route exact path="/bedding" component={EditUser} />
                    <Route exact path="/bathamenities" component={ListUsers} /> */} */}
                </Switch>
            </HashRouter>
        );
    }
}



export default App;
