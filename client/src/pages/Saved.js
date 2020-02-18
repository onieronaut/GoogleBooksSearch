import React, { Component } from "react";
import BookSaved from "../components/BookSaved/BookSaved";
import axios from "axios";

class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        this.loadSavedBooks();
    }

    // Requests saved books from our MongoDB
    loadSavedBooks = () => {
        axios.get("/api/books")
            .then(res => {
                const data = res.data;
                this.setState({ savedBooks: data })
            })
            .catch(err => console.log(err))
    }

    // Removes a specific book from our MongoDB
    deleteBook = id => {
        axios.delete("/api/books/" + id)
            .then(res => this.loadSavedBooks())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="card mt-3 w-100 border-primary">
                <h4 className="card-header">Saved</h4>
                <div className="card-body">
                    {this.state.savedBooks.map(book => (
                        <BookSaved key={book._id}
                            title={book.title}
                            id={book._id}
                            link={book.link}
                            image={book.image}
                            description={book.description}
                            authors={book.authors}
                            delete={() => this.deleteBook(book._id)} />
                    ))}
                </div>
            </div>
        )
    }
};

export default Saved;