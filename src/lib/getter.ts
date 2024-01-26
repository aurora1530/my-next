import { GoogleBook } from '@/feature/types/GoogleBook';
import prisma from './prisma';
import { Book } from '@/feature/types/Book';

export function createBook(book: GoogleBook): Book {
  const authors = book.volumeInfo.authors;
  const price = book.saleInfo.listPrice;
  const img = book.volumeInfo.imageLinks;
  return {
    id: book.id,
    title: book.volumeInfo.title,
    author: authors ? authors.join(',') : '',
    price: price ? price.amount : 0,
    publisher: book.volumeInfo.publisher,
    published: book.volumeInfo.publishedDate,
    image: img ? img.smallThumbnail : '/vercel.svg',
  };
}

export async function getBooksByKeyword(keyword: string): Promise<Book[]> {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&langRestrict=ja&maxResults=20&printType=books`
  );
  const result = await res.json();
  const books = [];
  for (const b of result.items as GoogleBook[]) {
    books.push(createBook(b));
  }
  return books;
}

export async function getBookById(id: string): Promise<Book> {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const result = await res.json();
  return createBook(result as GoogleBook);
}

export async function getReviewById(id: string) {
  return await prisma.reviews.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAllReviews() {
  return await prisma.reviews.findMany({
    orderBy: {
      read: 'desc',
    },
  });
}
