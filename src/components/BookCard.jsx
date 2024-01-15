import { bookList } from '../data.js';
import BookInfo from './BookInfo.jsx';
import BookCardFooter from './BookCardFooter.jsx';

export default function BookCard({
    query,
    sortAsc,
    sortDesc,
    yearAsc,
    yearDesc,
}) {
    let newBookList = [...bookList];
    let sortedValue;
    if (sortAsc) {
        sortedValue = newBookList.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    if (sortDesc) {
        sortedValue = newBookList.sort((a, b) => (a.name < b.name ? 1 : -1));
    }
    if (yearAsc) {
        sortedValue = newBookList
            .slice()
            .sort((a, b) => a.publicationYear - b.publicationYear);
    }
    if (yearDesc) {
        sortedValue = newBookList
            .slice()
            .sort((a, b) => b.publicationYear - a.publicationYear);
    }
    return (
        <>
            {sortedValue
                ? sortedValue
                      .filter((book) =>
                          book.name.toLowerCase().includes(query.toLowerCase()),
                      )
                      .map((book) => {
                          return (
                              <div className="space-y-3" key={book.id}>
                                  <BookInfo book={book} />
                                  <BookCardFooter />
                              </div>
                          );
                      })
                : bookList
                      .filter((book) =>
                          book.name.toLowerCase().includes(query.toLowerCase()),
                      )
                      .map((book) => {
                          return (
                              <div className="space-y-3" key={book.id}>
                                  <BookInfo book={book} />
                                  <BookCardFooter />
                              </div>
                          );
                      })}
        </>
    );
}