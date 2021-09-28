// Global imports for all views using default layout

// Styles

import '../../styles/theme.css'

// External

import 'regenerator-runtime/runtime'
import 'lazysizes/plugins/object-fit/ls.object-fit'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/rias/ls.rias'
import 'lazysizes/plugins/bgset/ls.bgset'
import 'lazysizes'
import 'lazysizes/plugins/respimg/ls.respimg'


import cookiesEnabled from '../utilities/cookies-enabled';

// Shopify

import {load} from '@shopify/theme-sections'

document.addEventListener("DOMContentLoaded", function(event) {
  load('*');

  // Apply a specific class to the html element for browser support of cookies.
  if (cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace(
      'supports-no-cookies',
      'supports-cookies'
    );
  }
});