import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Slider from '../src/lib/slider';

const Listitem = () => (
  <div className="customItem">
    <img
      src="http://static.flickr.com/66/199481236_dc98b5abb3_s.jpg"
      width="75"
      height="75"
    />
    <h1>Custom Content</h1>
  </div>
);

storiesOf('Slider', module).add('default', () => (
  <Slider
    auto
    items={[
      <Listitem />,
      <Listitem />,
      <Listitem />,
      <Listitem />,
      <Listitem />,
      <Listitem />,
      <Listitem />,
      <Listitem />,
      <Listitem />,
      <Listitem />,
      <Listitem />,
      <Listitem />,
    ]}
  />
));
