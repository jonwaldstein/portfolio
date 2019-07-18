import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      websites: [
        {
          "id": 1,
          "title": "Technique Printers",
          "description": "A simple website built on wordpress",
          "featured_image":  require('~/assets/images/techniqueprinters.jpg'),
          "external_url": 'http://techniqueprinters.com/',
          "credits": ""
        },
        {
          "id": 2,
          "title": "Fresh Green Light",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image":  require('~/assets/images/freshgreenlight.jpg'),
          "external_url": 'https://www.freshgreenlight.com/',
          "credits": "Zero Gravity Marketing"
        },
        {
          "id": 3,
          "title": "Glamorous Corset",
          "description": "An e-commerce shop built with woocommerce",
          "featured_image": require('~/assets/images/glamorouscorset.jpg'),
          "external_url": 'https://glamorouscorset.com/',
          "credits": ""
        },
        {
          "id": 4,
          "title": "Kidsense Therapy Group",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/kidsensetherapygroup.jpg'),
          "external_url": 'https://www.kidsensetherapygroup.com/',
          "credits": ""
        },
        {
          "id": 5,
          "title": "Xomad",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/xomad.png'),
          "external_url": 'https://xomad.com',
          "credits": "Digital Surgeons"
        },
        {
          "id": 6,
          "title": "Guytannos",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/guytannos.png'),
          "external_url": 'http://guytannosri.com',
          "credits": ""
        },
        {
          "id": 7,
          "title": "Squeezepods",
          "description": "An e-commerce shop built on shopify",
          "featured_image": require('~/assets/images/squeezepods.png'),
          "external_url": 'https://www.squeezepod.com',
          "credits": "Zero Gravity Marketing"
        }, {
          "id": 8,
          "title": "Hope and Stetson",
          "description": "An e-commerce shop built on shopify",
          "featured_image": require('~/assets/images/hope-stetson.png'),
          "external_url": 'https://hopeandstetson.com',
          "credits": "Zero Gravity Marketing"
        },
        {
          "id": 9,
          "title": "Allied Printing",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/allied-printing.png'),
          "external_url": 'http://alliedprinting.com',
          "credits": "Cronin & Co"
        },
        {
          "id": 10,
          "title": "The Steward House",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/steward-house.png'),
          "external_url": 'https://www.thestewardhouse.org',
          "credits": "Cronin & Co"
        },
      ],
      blog: [],
      loading: false
    },
    actions: {
      loadFishtivityBlog: function ({ commit }) {
        this.state.loading = true
        axios.get('https://fishtivity.net/wp-json/wp/v2/posts?_embed').then((response) => {
          commit('setFishtivityBlog', { blog: response.data })
        }, (err) => {
          console.log(err)
        })
      }
    },
    mutations: {
      setFishtivityBlog: (state, { blog, loading }) => {
        state.blog = blog,
        state.loading = false
      }
    },
    getters: {

    }
  })
}

export default createStore
