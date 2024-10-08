// .vitepress/config.js
export default {
  // site-level options
  title: 'VitePress',
  description: 'Just playing around.',
  base: "/hello-world/",
  themeConfig: {
    // theme-level options
        nav: [
      { text: "Home", link: "/" },
      { text: "NAM", link: "/NAM" },
      //{ text: "Linux", link: "/linux/service-accounts" },
    ],
        sidebar: [
      {
        text: "NAM",
        items: [
          {
            text: "SP",
            items: [
              {
                text: "Single Logout",
                link: "/NAM/SP/SLO",
              },
            ],
          },
        ],
      },
    ],
    search: {
      provider: "local",
    },
  }
}
