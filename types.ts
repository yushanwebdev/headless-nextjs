export type TLogoWallQuery = {
  assetCollection: {
    items: {
      title: string;
      url: string;
      width: number;
      height: number;
    }[];
  };
};

export type THeroQuery = {
  heroCollection: {
    items: {
      preTitle: string;
      title: string;
      subtitle: string;
      callToActionsCollection: {
        items: {
          label: string;
          link: string;
        }[];
      };
    }[];
  };
};
