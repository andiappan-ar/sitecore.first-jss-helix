import React from 'react';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Logo component. 
 */
const Logo = ({ fields }) => (
  <div class="pading-comp">
    <Link field={fields.Anchor}>
      <Image media={fields.LogoImage} />
    </Link>
  </div>
);

export default Logo;