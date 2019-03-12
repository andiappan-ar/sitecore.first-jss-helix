import React from 'react';
import { Text, Link, Image } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Carousal from andi.           .
 */
const Carousal = (props) => {
    //const { List } = ;

    const olItems = props.fields.ThumbailList.map((listItem, index) =>



        <li data-target="#demo" data-slide-to={`${index.toString()}`} class={(index == 0) ? "active" : ""}></li>

    );

    const listItems = props.fields.ThumbailList.map((listItem, index) =>

        <div class={`carousel-item  ${(index == 0) ? "active" : ""}`}>
            <Image media={listItem.fields.Image} />
            <div class="carousel-caption d-none d-md-block">
                <h1 class=""><Text field={listItem.fields.Title} /></h1>
                <h3 class="text-default"><Text field={listItem.fields.Title} /></h3>
            </div>
        </div>

    );


    return (
        <div class="container-fluid align-items-center">

            <div id="demo" class="carousel slide " data-ride="carousel">

                <ul class="carousel-indicators">
                    {olItems}
                </ul>

                <div class="carousel-inner">
                    {listItems}
                </div>

                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>

    );
};

export default Carousal;
