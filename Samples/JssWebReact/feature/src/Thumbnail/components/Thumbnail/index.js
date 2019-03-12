import React from 'react';
import { Text, Link, Image,RichText } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple navigation menu.
 */
const Thumbnail = (props) => {
    //const { List } = ;

    const listItems = props.fields.ThumbailList.map((listItem, index) =>

        <div class="col-md-3">
            <div class="card" >
                <Image media={listItem.fields.Image} class=" img-fluid card-img-top" />
                <div class="card-body text-center ">
                    <h4 class="card-title"><Text field={listItem.fields.Heading}/></h4>
                    <p class="card-text">
                    <RichText field={listItem.fields.Para}/>
                    </p>
                    <Link field={listItem.fields.Url} class="">
                        {(index + 1).toString()}. <Text field={listItem.fields.Title} class="" />
                    </Link>
                </div>
            </div>
        </div>

    );
    return (

        <div className="row pading-comp text-center">
            {listItems}
        </div>
    );
};

export default Thumbnail;
