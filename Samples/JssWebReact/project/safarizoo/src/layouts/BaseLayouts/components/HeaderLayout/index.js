import React from 'react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const HeaderLayout = ({ sitecoreContext, rendering }) => {

    return (
        <div class="container-fluid header-layout-comp">        
            <div data-e2e-id="header-layout" class="row-fluid">
            <Placeholder name="header" rendering={rendering} />
            </div>
        </div>
    );
};

export default withSitecoreContext()(HeaderLayout);
