export type TCustomerPostQuery = {
  customerPostCollection: {
    items: {
      title: string;
      slug: string;
      customer: {
        logo: {
          url: string;
          width: number;
          height: number;
        };
        name: string;
      };
      body: {
        json: JSON;
      };
    }[];
  };
};

export type THeaderNavQuery = {
  navigationCollection: {
    items: {
      name: string;
      linkCollection: {
        items: {
          label: string;
          link: string;
        }[];
      };
    }[];
  };
};

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
