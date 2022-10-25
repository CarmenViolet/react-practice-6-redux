import { selectBooks } from 'redux/books/booksSelectors';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { deleteBook } from 'redux/books/booksActions';

export const HomePage = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {books.map(({ id, title, author, plot, img }) => {
          return (
            <li key={id}>
              <h2>{title}</h2>
              <p>{author}</p>
              <img src={img} alt={author} />
              <p>{plot}</p>
              <button type='button' onClick={() => dispatch(deleteBook(id))}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
