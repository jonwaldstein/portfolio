import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      websites: [
        {
          "id": 1,
          "title": "Kidsense Therapy Group",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/kidsensetherapygroup.jpg'),
          "external_url": 'https://www.kidsensetherapygroup.com/',
          "credits": ""
        },
        {
          "id": 2,
          "title": "Glamorous Corset",
          "description": "An e-commerce shop built with woocommerce",
          "featured_image": require('~/assets/images/glamorouscorset.jpg'),
          "external_url": 'https://glamorouscorset.com/',
          "credits": ""
        },
        {
          "id": 3,
          "title": "Fresh Green Light",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image":  require('~/assets/images/freshgreenlight.jpg'),
          "external_url": 'https://www.freshgreenlight.com/',
          "credits": "Zero Gravity Marketing"
        },
        {
          "id": 4,
          "title": "Technique Printers",
          "description": "A simple website built on wordpress",
          "featured_image":  require('~/assets/images/techniqueprinters.jpg'),
          "external_url": 'http://techniqueprinters.com/',
          "credits": ""
        },
      ],
      blog: [],
    },
    actions: {
      loadFishtivityBlog: function ({ commit }) {
        axios.get('https://fishtivity.net/wp-json/wp/v2/posts?_embed').then((response) => {
          console.log(response.data),
          commit('setFishtivityBlog', { blog: response.data })
        }, (err) => {
          console.log(err)
        })
      }
    },
    mutations: {
      setFishtivityBlog: (state, { blog }) => {
        state.blog = blog
      }
    },
    getters: {

    }
  })
}

export default createStore
