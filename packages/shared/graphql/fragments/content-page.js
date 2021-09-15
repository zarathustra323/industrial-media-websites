const gql = require('graphql-tag');

module.exports = gql`
fragment ContentPageFragment on Content {
  id
  name
  teaser(input: { useFallback: false, maxLength: null })
  body
  published
  taxonomyIds
  siteContext {
    path
    canonicalUrl
  }
  company {
    id
    name
    siteContext {
      path
    }
    enableRmi
    primaryImage {
      id
      src
      alt
      caption
      credit
      isLogo
    }
  }
  primarySection {
    id
    name
    alias
    canonicalPath
    hierarchy {
      id
      name
      alias
      canonicalPath
    }
  }
  primaryImage {
    id
    src
    alt
    caption
    credit
    isLogo
  }
  gating {
    surveyType
    surveyId
  }
  userRegistration {
    isRequired
    accessLevels
  }
  ... on ContentVideo {
    embedCode
  }
  ... on ContentNews {
    source
    byline
  }
  ... on ContentBlog {
    byline: customAttribute(input: { path: "byline" })
  }
  ... on ContentEvent {
    endDate
    startDate
  }
  ... on ContentArticle {
    byline: customAttribute(input: { path: "byline" })
    sidebars
  }
  ... on ContentWebinar {
    linkUrl
    startDate
    sponsors {
      edges {
        node {
          id
          name
          siteContext {
            path
          }
        }
      }
    }
  }
  ... on Addressable {
    address1
    address2
    cityStateZip
    country
  }
  ... on Contactable {
    phone
    tollfree
    fax
    website
    title
    mobile
    publicEmail
  }
  ... on ContentCompany {
    email
  }
  ... on SocialLinkable {
    socialLinks {
      provider
      url
      label
    }
  }
  ... on Media {
    fileSrc
  }
  ... on Inquirable {
    enableRmi
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
          type
          siteContext {
            path
          }
        }
      }
    }
    contributors {
      edges {
        node {
          id
          name
          type
          siteContext {
            path
          }
        }
      }
    }
    photographers {
      edges {
        node {
          id
          name
          type
          siteContext {
            path
          }
        }
      }
    }
  }
  images(input: { pagination: { limit: 100 }, sort: { order: values } }) {
    edges {
      node {
        id
        src
        alt
        displayName
        caption
        credit
        isLogo
      }
    }
  }
}
`;
