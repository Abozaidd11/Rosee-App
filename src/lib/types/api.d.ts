declare type SuccessfulResponse<T> = {
  message: string;
} & T;

declare type PaginatedData<T> = {
  metadata: {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalItems: number;
    nextPage?: number;
  };
  [key: string]: T;
};

declare type ErrorResponse = {
  error: string;
};

declare type ApiResponse<T> = SuccessfulResponse<T> | ErrorResponse;
