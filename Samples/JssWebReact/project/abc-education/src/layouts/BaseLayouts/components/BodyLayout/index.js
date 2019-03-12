import React from 'react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';


const BodyLayout = ({ sitecoreContext, rendering }) => {

    return (
        <div class="container-fluid body-layout-comp">            
            <Placeholder name="body" rendering={rendering} />            
        </div>
    );
};

export default withSitecoreContext()(BodyLayout);
