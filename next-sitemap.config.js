/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://smew.tech',
  generateRobotsTxt: true, // only generate robots.txt for prod
  // ...other options
};
