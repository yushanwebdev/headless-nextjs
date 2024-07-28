import { THeroQuery } from "@/types";
import { contentGqlFetcher, gql } from "./fetch";

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
