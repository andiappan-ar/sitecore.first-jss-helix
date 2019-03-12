import React from 'react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const ThirdSubColumn = ({ sitecoreContext, rendering }) => {

    return (
        <div class="col rounded third-column-subl-comp">
            <Placeholder name="third-sub-column" rendering={rendering} />
        </div>
    );
};

export default withSitecoreContext()(ThirdSubColumn);
