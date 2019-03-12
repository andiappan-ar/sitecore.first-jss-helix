import React from 'react';
import { Text, Image, Link, RichText } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Logo component. 
 */
const BasicPanel = ({ fields }) => (

    <div class={`card`}>
        <div class={`card-header   ${fields.HeadingType.value.toString()}`}>
            <Text field={fields.HeadingText} class="" />
        </div>
        <div class="card-body">
            <h5 class="card-title">
                <Text field={fields.HeadingText} class="" />
            </h5>
            <p class="card-text">
                <RichText field={fields.ContentText} class="" />
            </p>
        </div>
    </div>


);

export default BasicPanel;