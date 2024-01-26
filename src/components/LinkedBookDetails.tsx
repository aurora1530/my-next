import Link from 'next/link';
import BookDetails from './BookDetails';
import { Book } from '@/feature/types/Book';

export default function LinkedBookDetails({
  index,
  book,
}: {
  index: number;
  book: Book;
}) {
  return (
    <Link href={`/edit/${book.id}`}>
      <div className="hover:bg-green-50">
        <BookDetails index={index} book={book} />
      </div>
    </Link>
  );
}
