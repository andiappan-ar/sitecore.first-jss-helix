import React from 'react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const ThreeColumnContentLayout = ({ sitecoreContext, rendering }) => {

    return (        
            <div class="row">
                <Placeholder name="three-column-content-layout" rendering={rendering} />
            </div>       
    );
};

export default withSitecoreContext()(ThreeColumnContentLayout);
