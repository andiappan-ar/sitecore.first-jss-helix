import React from 'react';
import { Text, Image, Link, RichText } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Copyrights component. 
 */
const Copyrights = ({ fields }) => (
  <div class="pading-comp">
    <RichText field={fields.ContentText} class="" />
  </div>
);

export default Copyrights;