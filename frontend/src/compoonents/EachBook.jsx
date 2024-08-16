const EachBook = ({id, k, eachBook, deleteBook}) => {
  return (
    <div className="list">
      <div className="card-container">
        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
          alt="Books"
          height="200"
        />
        <div className="desc">
        <h2>{eachBook.bookTitle}</h2>
          <h3>{eachBook.bookAuthor}</h3>
          <p>{eachBook.description} </p>
          <div align="right">
            <button
              onClick={() => {
                deleteBook(eachBook._id);
              }}>X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachBook;
