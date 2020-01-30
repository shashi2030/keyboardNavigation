import React from 'react';
import SpatialNavigation from '../../spatial_navigation';
import Nav from '../../components/Nav/Nav';
import KeyProcessor from '../../components/KeyProcessor/KeyProcessor';
import {Layout} from '../../components/Layout/Layout';

require('./Css/Dashboard.css');

const dashboardNav = [{
    buttonText: 'Link1',
    id: 'link1'
},
{
    buttonText: 'Link2',
    id: 'link2'
},
{
    buttonText: 'Link3',
    id: 'link3'
}]
class Dashboard extends KeyProcessor {

    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        SpatialNavigation.init();
        SpatialNavigation.add({
            selector: '.focusable'
        });
        SpatialNavigation.makeFocusable();
        SpatialNavigation.focus();
    }
    clickNav = (e) => {
        const pageName = e.target.id;
        this.props.history.push('/' + pageName);
    }
    render() {
        return (
            <Layout>
                <Nav navData={dashboardNav} clickNav={this.clickNav} />
            </Layout>

        )
    }
}

export default Dashboard;