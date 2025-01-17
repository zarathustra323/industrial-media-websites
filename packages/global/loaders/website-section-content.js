const { websiteScheduledContent, websiteOptionedContent } = require('@parameter1/base-cms-web-common/block-loaders');
const defaultFragment = require('../graphql/fragments/content-list');

const loadFeaturedContent = async (apolloClient, params = {}) => {
  const defaults = {
    limit: 6,
    optionName: 'Featured Content',
    queryFragment: defaultFragment,
  };

  return websiteOptionedContent(apolloClient, {
    ...defaults,
    ...params,
  });
};

const loadStandardContent = async (apolloClient, params = {}) => {
  const defaults = {
    limit: 4,
    optionName: ['Featured Content', 'Standard'],
    queryFragment: defaultFragment,
  };

  return websiteScheduledContent(apolloClient, {
    ...defaults,
    ...params,
  });
};

module.exports = async (apolloClient, {
  sectionId,

  featuredParams,
  standardParams,

  withStandardQuery = true,
} = {}) => {
  const featured = await loadFeaturedContent(apolloClient, {
    ...featuredParams,
    sectionId,
  });
  const featuredIds = featured.nodes.map(node => node.id);

  let standard = { nodes: [] };
  if (withStandardQuery) {
    standard = await loadStandardContent(apolloClient, {
      sectionId,
      ...standardParams,
      excludeContentIds: featuredIds,
    });
  }
  const ids = [...featuredIds, ...standard.nodes.map(node => node.id)];
  return { featured, standard, ids };
};
