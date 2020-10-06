import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      websites: [
        {
          "title": "Technique Printers",
          "description": "A simple website built on wordpress",
          "featured_image":  require('~/assets/images/techniqueprinters.jpg'),
          "external_url": 'http://techniqueprinters.com/',
          "credits": ""
        },
        {
          "title": "Fresh Green Light",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image":  require('~/assets/images/freshgreenlight.jpg'),
          "external_url": 'https://www.freshgreenlight.com/',
          "credits": "Zero Gravity Marketing"
        },
        {
          "title": "Glamorous Corset",
          "description": "An e-commerce shop built with woocommerce",
          "featured_image": require('~/assets/images/glamorouscorset.jpg'),
          "external_url": 'https://glamorouscorset.com/',
          "credits": ""
        },
        {
          "title": "Kidsense Therapy Group",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/kidsensetherapygroup.jpg'),
          "external_url": 'https://www.kidsensetherapygroup.com/',
          "credits": ""
        },
        {
          "title": "Xomad",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/xomad.png'),
          "external_url": 'https://xomad.com',
          "credits": "Digital Surgeons"
        },
        {
          "title": "Friends of Unfpa",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/unfpa.png'),
          "external_url": 'https://www.friendsofunfpa.org/',
          "credits": "Hopsie"
        },
        {
          "title": "PEE DEE Nephrology",
          "description": "A theme based website built on wordpress",
          "featured_image": require('~/assets/images/peedee.png'),
          "external_url": 'http://www.pdnephrology.com',
          "credits": "Catoe Group"
        },
        {
          "title": "Shainfield Law",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/shainfield.png'),
          "external_url": 'https://lemonlawnow.com',
          "credits": "Hopsie"
        },
        {
          "title": "Valley Orthopaedic Specialists",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/vosct.png'),
          "external_url": 'https://vosct.com',
          "credits": "Zero Gravity Marketing"
        },
        {
          "title": "Christian Connections for Internationl Health",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/ccih.png'),
          "external_url": 'http://www.ccih.org',
          "credits": "Hopsie"
        },
        {
          "title": "Guytannos",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/guytannos.png'),
          "external_url": 'http://guytannosri.com',
          "credits": ""
        },
        {
          "title": "Squeezepods",
          "description": "An e-commerce shop built on shopify",
          "featured_image": require('~/assets/images/squeezepods.png'),
          "external_url": 'https://www.squeezepod.com',
          "credits": "Zero Gravity Marketing"
        }, {
          "title": "Hope and Stetson",
          "description": "An e-commerce shop built on shopify",
          "featured_image": require('~/assets/images/hope-stetson.png'),
          "external_url": 'https://hopeandstetson.com',
          "credits": "Zero Gravity Marketing"
        },
        {
          "title": "Allied Printing",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/allied-printing.png'),
          "external_url": 'http://alliedprinting.com',
          "credits": "Cronin & Co"
        },
        {
          "title": "The Steward House",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/steward-house.png'),
          "external_url": 'https://www.thestewardhouse.org',
          "credits": "Cronin & Co"
        },
        {
          "title": "New Britain Musuem of American Art",
          "description": "A hand-crafted, custom tailored website, built on Craft CMS",
          "featured_image": require('~/assets/images/nbmaa.png'),
          "external_url": 'https://nbmaa.org',
          "credits": "Zero Gravity Marketing"
        },
        {
          "title": "Wood Pawcatuck Watershed Association",
          "description": "A hand-crafted, custom tailored website, built on WordPress",
          "featured_image": require('~/assets/images/wpwa.png'),
          "external_url": 'https://wpwa.org',
          "credits": ""
        },
      ],
      plugins: [
          {
              "title": "Blocks for Wordpress",
              "description": "Managing events on WordPress can be a challenge. These days we have many great solutions for managing our events outside of WordPress like Eventbrite. This plugin helps bridge the gap between the two platforms while retaining the great user interface and experience that Eventbrite provides.",
              "featured_image": require('~/assets/images/blocks-for-eventbrite.jpg'),
              "external_url": 'https://wordpress.org/plugins/blocks-for-eventbrite/',
              "credits": ""
          },
      ],
      blog: [],
      loading: false
    },
  })
}

export default createStore
