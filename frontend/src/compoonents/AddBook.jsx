import BookInput from "./BookInput";

const AddBook = () => {
    return(
        <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br /><a className="btn btn-info float-left" href="/">Show BooK List</a>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">Create new book</p>
              <BookInput/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AddBook;