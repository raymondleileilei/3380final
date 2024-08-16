import axios from 'axios';
import { useEffect, useState } from 'react';
import EachBook from './EachBook';

const HomePage = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        axios
            // .get('https://three380finalpractice.onrender.com/api/arts')
            .get('http://localhost:5000/api/v1/book')
            .then((res) => {
                setBooks(res.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Not getting data. " + err)
            });

    }, []);

    const deleteBook=(id)=>{
        axios
        .delete('http://localhost:5000/api/v1/book/' + id)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log("Delete error. " + err)
        });

    setBooks(books.filter((each) => each._id !== id));
    }

    const bookList =
    books.length === 0
        ? 'no book'
        : books.map((eachBook, k) => (
            <EachBook id={eachBook._id} key={k} eachBook={eachBook} deleteBook={deleteBook}/>  
        ))


  return (
    <div className="BookList">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Books List</h2>
      </div>
      <div className="col-md-11">
        <a className="btn btn-info float-right" href="/create-book">
          + Add New Book
        </a>
        <br />
        <br />
        <hr />
      </div>
      {bookList}
      {/* <div class="list">
        <div class="card-container">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
          <div class="desc">
            <h2>
              <a href="/show-book/123id">React.JS 101</a>
            </h2>
            <h3>Raymond Gallagher</h3>
            <p>Introduction to React.JS</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
