export type TProduct = {
  _id: string;
  title: string;
  imgCover: string;
  price: number;
  rateAvg: number;
  rateCount: number;
};

export type TProductDetails = {
  metadata: {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalItems: number;
    nextPage: number;
  };
  products: TProduct[];
};

export type TRecommendation = {
  _id: string;
  title: string;
  imgCover: string;
  price: number;
  priceAfterDiscount: number;
  rateAvg: number;
  rateCount: number;
  id: string;
};

export type TRecommendationResponse = {
  count: number;
  recommendations: TRecommendation[];
};
