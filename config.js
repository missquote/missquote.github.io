// @ts-check
import profileImage from './src/images/profilepic.png?url';
import backgroundImage from './src/images/backgrounds/watercolor-pink-blue.png?url';

/** @type {import('./src/types').SiteConfig} */
const config = {
  user: {
    name: "emily ✨",
    bio: "just another internet nerd",
    profileImage: profileImage,
  },
  background: {
    color: "#f0f0f0",
    image: backgroundImage,
  },

  socialLinks: [],

  links: [
    {
      title: "my blog",
      url: "https://blog.missquote.net",
      icon: "blog",
    },
    {
      title: "follow me on the fediverse",
      url: "https://sakurajima.social/@missquote",
      icon: "globe",
    },
    {
      title: "picrew by ummmmandy",
      url: "https://picrew.me/en/image_maker/114808",
      icon: "image-portrait"
    }
    // Add more links as needed
  ],
  products: [

    // Add more products as needed
  ],
};

export const analytics = {
  posthog: {
    enableTracking: false
  }
};

export default config;
