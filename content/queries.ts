import "server-only";
import {
  TCustomerPostQuery,
  THeaderNavQuery,
  THeroQuery,
  TLogoWallQuery,
} from "@/types";
import { contentGqlFetcher, gql } from "./fetch";

export const getSlugsForPosts = async () => {
  const query = gql`
    {
      customerPostCollection {
        items {
          slug
        }
      }
    }
  `;

  const data = await contentGqlFetcher<{
    customerPostCollection: { items: { slug: string }[] };
  }>({ query });

  if (!data) {
    throw new Error("Could not get content");
  }

  return data;
};

export const getContentForCustomerPost = async (slug: string) => {
  const query = gql`
    query CustomerPostCollection($where: CustomerPostFilter) {
      customerPostCollection(where: $where) {
        items {
          title
          slug
          customer {
            logo {
              url
              width
              height
            }
            name
          }
          body {
            json
          }
        }
      }
    }
  `;

  const data = await contentGqlFetcher<TCustomerPostQuery>({
    query,
    variables: {
      where: {
        slug,
      },
    },
  });

  if (!data) {
    throw new Error("Could not get content");
  }

  return data;
};

export const getContentHeaderNav = async () => {
  const query = gql`
    query NavigationCollection($where: NavigationFilter) {
      navigationCollection(where: $where) {
        items {
          name
          linkCollection {
            items {
              label
              link
            }
          }
        }
      }
    }
  `;

  const data = await contentGqlFetcher<THeaderNavQuery>({
    query,
    variables: {
      where: {
        name: "Header",
      },
    },
  });

  if (!data) {
    throw new Error("Could not get content");
  }

  return data;
};

export const getContentForLogoWall = async () => {
  const query = gql`
    query AssetCollection($where: AssetFilter) {
      assetCollection(where: $where) {
        items {
          title
          url
          width
          height
        }
      }
    }
  `;

  const data = await contentGqlFetcher<TLogoWallQuery>({
    query,
    variables: {
      where: {
        title_contains: "client",
      },
    },
  });

  if (!data) {
    throw new Error("Could not get content");
  }

  return data;
};

export const getContentForHero = async (isDraft = false) => {
  const query = gql`
    query HeroCollection {
      heroCollection(preview: ${isDraft ? "true" : "false"}) {
        items {
          preTitle
          title
          subtitle
          callToActionsCollection {
            items {
              label
              link
            }
          }
        }
      }
    }
  `;

  const data = await contentGqlFetcher<THeroQuery>({ query, preview: isDraft });

  if (!data) {
    throw new Error("Could not get content");
  }

  return data;
};
