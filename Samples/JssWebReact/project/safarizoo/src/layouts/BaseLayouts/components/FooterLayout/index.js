import React from 'react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const FooterLayout = ({ sitecoreContext, rendering }) => {

    return (
        <div class="container-fluid text-center footer-layout-comp">
            <br />
            <div data-e2e-id="footer-layout" class="row-fluid white-text">
                <Placeholder name="footer" class="" rendering={rendering} />
            </div>
            <br />
        </div>
    );
};

export default withSitecoreContext()(FooterLayout);
