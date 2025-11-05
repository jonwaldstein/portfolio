interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  credits?: string
  category?: string
}

const websites = [
  {
    title: 'Technique Printers',
    description: 'A simple website built on wordpress',
    imgSrc: '/static/images/techniqueprinters.jpg',
    href: 'http://techniqueprinters.com/',
    credits: '',
    category: 'website'
  },
  {
    title: 'Fresh Green Light',
    description: 'A hand-crafted, custom tailored website, built on wordpress',
    imgSrc: '/static/images/freshgreenlight.jpg',
    href: 'https://www.freshgreenlight.com/',
    credits: 'Zero Gravity Marketing',
    category: 'website'
  },
  {
    title: 'Glamorous Corset',
    description: 'An e-commerce shop built with woocommerce',
    imgSrc: '/static/images/glamorouscorset.jpg',
    href: 'https://glamorouscorset.com/',
    credits: '',
    category: 'website'
  },
  {
    title: 'Kidsense Therapy Group',
    description: 'A hand-crafted, custom tailored website, built on wordpress',
    imgSrc: '/static/images/kidsensetherapygroup.jpg',
    href: 'https://www.kidsensetherapygroup.com/',
    credits: '',
    category: 'website'
  },
  {
    title: 'Xomad',
    description: 'A hand-crafted, custom tailored website, built on wordpress',
    imgSrc: '/static/images/xomad.png',
    href: 'https://xomad.com',
    credits: 'Digital Surgeons',
    category: 'website'
  },
  {
    title: 'Friends of Unfpa',
    description: 'A hand-crafted, custom tailored website, built on wordpress',
    imgSrc: '/static/images/unfpa.png',
    href: 'https://www.friendsofunfpa.org/',
    credits: 'Hopsie',
    category: 'website'
  },
  {
    title: 'PEE DEE Nephrology',
    description: 'A theme based website built on wordpress',
    imgSrc: '/static/images/peedee.png',
    href: 'http://www.pdnephrology.com',
    credits: 'Catoe Group',
    category: 'website'
  },
  {
    title: 'Shainfield Law',
    description: 'A hand-crafted, custom tailored website, built on wordpress',
    imgSrc: '/static/images/shainfield.png',
    href: 'https://lemonlawnow.com',
    credits: 'Hopsie',
    category: 'website'
  },
  {
    title: 'Valley Orthopaedic Specialists',
    description: 'A hand-crafted, custom tailored website, built on wordpress',
    imgSrc: '/static/images/vosct.png',
    href: 'https://vosct.com',
    credits: 'Zero Gravity Marketing',
    category: 'website'
  },
  {
    title: 'Christian Connections for Internationl Health',
    description: 'A hand-crafted, custom tailored website, built on wordpress',
    imgSrc: '/static/images/ccih.png',
    href: 'http://www.ccih.org',
    credits: 'Hopsie',
    category: 'website'
  },
  {
    title: 'Guytannos',
    description: 'A hand-crafted, custom tailored website, built on wordpress',
    imgSrc: '/static/images/guytannos.png',
    href: 'http://guytannosri.com',
    credits: '',
    category: 'website'
  },
  {
    title: 'Squeezepods',
    description: 'An e-commerce shop built on shopify',
    imgSrc: '/static/images/squeezepods.png',
    href: 'https://www.squeezepod.com',
    credits: 'Zero Gravity Marketing',
    category: 'website'
  },
  {
    title: 'Hope and Stetson',
    description: 'An e-commerce shop built on shopify',
    imgSrc: '/static/images/hope-stetson.png',
    href: 'https://hopeandstetson.com',
    credits: 'Zero Gravity Marketing',
    category: 'website'
  },
  {
    title: 'Allied Printing',
    description: 'A hand-crafted, custom tailored website, built on wordpress',
    imgSrc: '/static/images/allied-printing.png',
    href: 'http://alliedprinting.com',
    credits: 'Cronin & Co',
    category: 'website'
  },
  {
    title: 'The Steward House',
    description: 'A hand-crafted, custom tailored website, built on wordpress',
    imgSrc: '/static/images/steward-house.png',
    href: 'https://www.thestewardhouse.org',
    credits: 'Cronin & Co',
    category: 'website'
  },
  {
    title: 'New Britain Musuem of American Art',
    description: 'A hand-crafted, custom tailored website, built on Craft CMS',
    imgSrc: '/static/images/nbmaa.png',
    href: 'https://nbmaa.org',
    credits: 'Zero Gravity Marketing',
    category: 'website'
  },
  {
    title: 'Wood Pawcatuck Watershed Association',
    description: 'A hand-crafted, custom tailored website, built on WordPress',
    imgSrc: '/static/images/wpwa.png',
    href: 'https://wpwa.org',
    credits: '',
    category: 'website'
  }
];

const plugins = [
    {
        title: 'Blocks for Wordpress',
        description:
        'Managing events on WordPress can be a challenge. These days we have many great solutions for managing our events outside of WordPress like Eventbrite. This plugin helps bridge the gap between the two platforms while retaining the great user interface and experience that Eventbrite provides.',
        imgSrc: '/static/images/blocks-for-eventbrite.jpg',
        href: 'https://wordpress.org/plugins/blocks-for-eventbrite/',
        category: 'plugin'
    },
    {
        title: 'GiveWP',
        description: 'A world-wide open-source fundraising plugin for WordPress powering over 100k causes and raising billions of dollars every year for non-profits.',
        imgSrc: '/static/images/givewp.png',
        href: 'https://wordpress.org/plugins/give/',
        credits: 'Liquid Web',
        category: 'plugin'
    },
];

const projectsData: Project[] = [
  ...websites.reverse(),
  ...plugins.reverse(),
]

export default projectsData
