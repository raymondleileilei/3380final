import axios from "axios";
import { useState } from "react";

const BookInput = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [desc, setDesc] = useState("");

  const CreateBook = (e) => {
    e.preventDefault();
    const newBook = {
      bookTitle: title,
      bookAuthor: author,
      description: desc,
    };
    axios
      .post("https://three380final-d4hg.onrender.com/api/v1/book", newBook)
      .then((res) => {
        window.location = "/";
      })
      .catch((error) => {
        console.error("There was an error posting the book!", error);
        console.log(newBook);
      });
  };
  return (
    <div>
      <form noValidate="" onSubmit={CreateBook}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title of the Book"
            name="title"
            className="form-control"
            value={title}
            spellCheck="false"
            data-ms-editor="true"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Author"
            name="author"
            className="form-control"
            value={author}
            spellCheck="false"
            data-ms-editor="true"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Describe this book"
            name="description"
            className="form-control"
            value={desc}
            spellCheck="false"
            data-ms-editor="true"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <input type="submit" className="btn btn-info btn-block mt-4" />
      </form>

      {/* <form novalidate="">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Title of the Book"
                    name="title"
                    class="form-control"
                    value=""
                    spellcheck="false"
                    data-ms-editor="true"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    class="form-control"
                    value=""
                    spellcheck="false"
                    data-ms-editor="true"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Describe this book"
                    name="description"
                    class="form-control"
                    value=""
                    spellcheck="false"
                    data-ms-editor="true"
                  />
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form> */}
    </div>
  );
};

export default BookInput;
