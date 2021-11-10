const META_URL = 'https://seb-l.github.io/vuetify-auto-form-builder/'
const META_TITLE = 'Pinia Plugin Persist'
const META_DESCRIPTION = 'Vuetify form builder, with nested components and templating capabilities.'

module.exports = {
  title: 'Vuetify Auto Form Builder',
  lang: "en-US",
  description: META_DESCRIPTION,
  head: [
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: META_URL }],
    ["meta", { property: "og:title", content: META_TITLE }],
    ["meta", { property: "og:description", content: META_DESCRIPTION }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: META_URL }],
    ["meta", { property: "twitter:title", content: META_TITLE }],
    ["meta", { property: "twitter:description", content: META_DESCRIPTION }],
  ],
  base: '/vuetify-auto-form-builder/',
  themeConfig: {
    nav: [
      { text: "Guide", link: "/get-started.html" },
      { text: "Github", link: "https://github.com/Seb-L/vuetify-auto-form-builder" },
    ],

    sidebar: [
      "/get-started.html",
      "/basic-usage.html",
      {
        title: "Advanced Usage",
        children: [
          "/advanced/condition.html",
          "/advanced/nested.html",
          "/advanced/events.html",
        ],
      },
      "/examples.html",
    ],
  },
  plugins: [
    ['vuepress-plugin-typescript']
  ]
}
