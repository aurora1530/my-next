export type GoogleBook = {
  id: string;
  volumeInfo: {
    authors: string[];
    title: string;
    imageLinks: {
      smallThumbnail: string;
    };
    publisher: string;
    publishedDate: string;
  };
  saleInfo: {
    listPrice: {
      amount: number;
    };
  };
};
