module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "valorant",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "valorantdata",
        fieldName: "valorantdata",
        url: "https://api-us-east-1.graphcms.com/v2/ckvre6cq00kbl01z810nk034c/master",
      },
    }
],
};
