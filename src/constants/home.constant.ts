import { banner, projectImages, solutionImages, technologyImages } from '@/assets'

export const technologyColor = {
  python: '#e4c603',
  rails: '#c91f25',
  nodejs: '#166629',
  angularJs: '#dc1f26',
  reactJs: '#056b85',
  php: '#073e9e',
  android: '#257202',
  ios: '#040708',
  blockchain: '#0056b3',
  ai: '#af3386',
  dotnet: '#e56a39',
  reactNative: '#5b19aa'
}

export const TECHNOLOGY_CONSTANTS = {
  heading: 'Technologies we work with',
  subHeading: 'We have teamed up with major technology platforms to keep giving our customers',
  subHeading2: 'most upgraded world-class software performance.',
  images: {
    clientRound: projectImages.clientRound.src
  },
  rows: [
    {
      img: technologyImages.pythonIcon.src,
      hover_img: technologyImages.pythonHoverIcon.src,
      color: technologyColor.python
    },
    {
      img: technologyImages.railsIcon.src,
      hover_img: technologyImages.railsHoverIcon.src,
      color: technologyColor.rails
    },
    {
      img: technologyImages.nodeJsIcon.src,
      hover_img: technologyImages.nodeJsHoverIcon.src,
      color: technologyColor.nodejs
    },
    {
      img: technologyImages.angularJsIcon.src,
      hover_img: technologyImages.angularJsHoverIcon.src,
      color: technologyColor.angularJs
    },
    {
      img: technologyImages.reactJsIcon.src,
      hover_img: technologyImages.reactJsHoverIcon.src,
      color: technologyColor.reactJs
    },
    {
      img: technologyImages.phpIcon.src,
      hover_img: technologyImages.phpHoverIcon.src,
      color: technologyColor.php
    },
    {
      img: technologyImages.androidIcon.src,
      hover_img: technologyImages.androidHoverIcon.src,
      color: technologyColor.android
    },
    {
      img: technologyImages.iosIcon.src,
      hover_img: technologyImages.iosHoverIcon.src,
      color: technologyColor.ios
    },
    {
      img: technologyImages.blockchainIcon.src,
      hover_img: technologyImages.blockchainHoverIcon.src,
      color: technologyColor.blockchain
    },
    {
      img: technologyImages.aiIcon.src,
      hover_img: technologyImages.aiHoverIcon.src,
      color: technologyColor.ai
    },
    {
      img: technologyImages.dotnetIcon.src,
      hover_img: technologyImages.dotnetHoverIcon.src,
      color: technologyColor.dotnet
    },
    {
      img: technologyImages.reactNativeIcon.src,
      hover_img: technologyImages.reactNativeHoverIcon.src,
      color: technologyColor.reactNative
    }
  ]
}

export const SOLUTION_CONSTANTS = {
  heading: 'Solutions we deliver',
  subHeading: `Thoughtwin IT Solutions assists to develop an impeccable website and mobile application. We serve on numerous domains and transform client's thoughts into reality.`,
  images: {
    clientRound: projectImages.clientRound.src
  },
  rows: [
    {
      id: 1,
      src: solutionImages.solutionIcon.src,
      title: 'WEB DEVELOPMENT',
      description: 'We offer one of the best Web Development services in numerous countries.'
    },
    {
      id: 2,
      src: solutionImages.solutionIcon.src,
      title: 'UI UX DESIGN',
      description: 'We have proficient UI/UX Designers for interface design, user experience, conversion optimization.'
    },
    {
      id: 3,
      src: solutionImages.solutionIcon.src,
      title: 'MOBILE APP DEVELOPMENT',
      description: 'We provide professional Android, IOS, React Native, and Flutter developers.'
    },
    {
      id: 4,
      src: solutionImages.solutionIcon.src,
      title: 'IOT DEVELOPMENT',
      description: 'We assist to build smart Internet of Things applications for our clients.'
    }
  ]
}

export const BANNER_CONSTANTS = {
  bannerGif: banner.bannerGif.src,
  heading: 'Innovative and intelligent technology solutions and services',
  scheduleBtn: 'Schedule a call'
}

export const CLIENT_CONSTANTS = {
  heading: 'Clients who trust us',
  subHeading: 'We have teamed up with major technology platforms to keep giving our customers',
  subHeading2: 'most upgraded world-class software performance.',
  images: {
    clientRound: projectImages.clientRound.src
  },
  rows: [
    {
      id: 1,
      src: projectImages.projectOne.src,
      bgSrc: projectImages.clientOne.src
    },
    {
      id: 2,
      src: projectImages.projectTwo.src,
      bgSrc: projectImages.clientTwo.src
    },
    {
      id: 3,
      src: projectImages.projectThree.src,
      bgSrc: projectImages.clientThree.src
    },
    {
      id: 4,
      src: projectImages.projectFour.src,
      bgSrc: projectImages.clientFour.src
    }
  ],
  viewBtn: 'View All'
}

export const HOME_META = {
  keyword: 'software development company,mobile app development company',
  website: 'https://www.thoughtwin.com/',
  twitter_site: 'Thoughtwin It Solutions',
  twitter_id: '1309409360670408706',
  twitter_creator: '@thoughtwin',
  twitter_image: 'https://thoughtwin.com/assets/img/header.png'
}
