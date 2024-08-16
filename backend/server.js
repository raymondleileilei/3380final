// importing packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

// setups
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URI = 'mongodb+srv://1234:1234@cluster0.trwha0t.mongodb.net/BooksDB'

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect('mongodb://localhost:27017/BookDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start your Express server once connected to MongoDB
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const bookSchema = new Schema({
    bookTitle: { type: String, required: true },
    bookAuthor: { type: String, required: true },
    description: { type: String}
});

const Book = mongoose.model("300369438-raymond", bookSchema);

const router = express.Router();

// Mount the router middleware at a specific path
app.use('/api/v1/book', router);

// app.get('/', (req, res) => {
router.route("/")
    .get((req, res) => {
        Book.find()
            .then((books) => res.json(books))
            .catch((err) => res.status(400).json("Error: " + err));
    });

router.route("/:id")
    .get((req, res) => {
        Book.findById(req.params.id)
            .then((book) => res.json(book))
            .catch((err) => res.status(400).json("Error: " + err));
    });

router.route("/")
    .post((req, res) => {
        const bookTitle = req.body.bookTitle;
        const bookAuthor = req.body.bookAuthor;
        const description = req.body.description;
        // create a new Book object 
        const newBook = new Book({
            bookTitle,
            bookAuthor,
            description
        });

        // console.log("checkpoint");

        // save the new object (newBook)
        newBook
            .save()
            .then(() => res.json("Book added!"))
            .catch((err) => res.status(400).json("Error: " + err));
    });

router.route("/:id")
    .put((req, res) => {
        Book.findById(req.params.id)
            .then((book) => {
                book.bookTitle = req.body.bookTitle;
                book.bookAuthor = req.body.bookAuthor;
                book.description = req.body.description;
                book
                    .save()
                    .then(() => res.json("Book updated!"))
                    .catch((err) => res.status(400).json("Error: " + err));
            })
            .catch((err) => res.status(400).json("Error: " + err));
    });

router.route("/:id")
    .delete((req, res) => {
        Book.findByIdAndDelete(req.params.id)
            .then(() => res.json("Book deleted."))
            .catch((err) => res.status(400).json("Error: " + err));
    });
