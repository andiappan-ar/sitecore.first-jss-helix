import React from 'react';
import { Text, Image, Link, RichText } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Logo component. 
 */
const HeroBanner = ({ fields }) => (
    <div class="row-fluid">
        <div class="jumbotron jumbotron-fluid white-text">
            <div class="container-fluid">
                <h1 class="display-4"><Text field={fields.Title} /></h1>
                <p class="lead"><RichText field={fields.SubTitle} /></p>
                <hr class="my-4" />
                <p><RichText field={fields.Para} /></p>
                <p class="lead">
                    <Link field={fields.Url} class="btn btn-primary btn-lg" role="button">
                        <Text field={fields.DisplayNameUrl} />
                    </Link>
                </p>
                <Image media={fields.BackGroundImage} />
            </div>

        </div>
    </div>
);

export default HeroBanner;