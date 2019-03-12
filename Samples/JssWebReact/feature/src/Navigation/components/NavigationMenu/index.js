import React from 'react';
import { Text, Link, Image } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple navigation menu.
 */
const NavigationMenu = (props) => {
    // const { List } = props.fields;

    const listItems = props.fields.List.map((listItem, index) =>
        <li class="nav-item">
            <Link field={listItem.fields.Url} class="nav-link">
                <Text field={listItem.fields.DisplayName} />
            </Link>
        </li>
    );
    return (
        <div class="navi-comp">
            <nav class="navbar navbar-dark bg-dark navbar-expand-sm navbar-custom">
                <Link field={props.fields.Url} class="navbar-brand">
                    <Image media={props.fields.Image} class="d-inline-block align-top" />                   
                </Link>
                <ul class="navbar-nav">
                    {listItems}
                </ul>
            </nav>
        </div>

    );

};

export default NavigationMenu;
