// @ts-check
/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;
// module.exports = {
//   reactStrictMode: true,
//   i18n: {
//     // These are all the locales you want to support in
//     // your application

//     locales: ["en", "zh-CN"],
//     // This is the default locale you want to be used when visiting
//     // a non-locale prefixed path e.g. `/hello`
//     defaultLocale: "en",
//     // This is a list of locale domains and the default locale they
//     // should handle (these are only required when setting up domain routing)
//     // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
//     domains: [
//       {
//         domain: "example.com",
//         defaultLocale: "en",
//       },

//       {
//         domain: "example.fr",
//         defaultLocale: "fr",
//         // an optional http field can also be used to test
//         // locale domains locally with http instead of https
//         http: true,
//       },
//     ],
//   },
// };
