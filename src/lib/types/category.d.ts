export type TAllCategories = {
  message: string;
  metadata: {
    currentPage: number;
    limit: number;
    totalPages: number;
    totalItems: number;
  };
  categories: Tcategory[];
};

export type Tcategory = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isSuperAdmin: boolean;
  productsCount: number;
};
