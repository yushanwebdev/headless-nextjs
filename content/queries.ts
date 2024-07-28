import { THeroQuery, TLogoWallQuery } from "@/types";
import { contentGqlFetcher, gql } from "./fetch";

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

export const getContentForHero = async () => {
  const query = gql`
    query HeroCollection {
      heroCollection {
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

  const data = await contentGqlFetcher<THeroQuery>({ query });

  if (!data) {
    throw new Error("Could not get content");
  }

  return data;
};
