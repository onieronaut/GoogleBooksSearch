import React, { Component } from "react";
import axios from "axios";
import BookSearch from "../components/BookSearch/BookSearch";
import BookResults from "../components/BookResults/BookResults";

class Results extends Component {
    state = {
        title: "",
        books: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    // Queries the Google Books API for a list of books matching the search terms
    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.title) {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${this.state.title}`)
                .then(res => {
                    let data = res.data.items
                    this.setState({ books: data })
                })
                .catch(err => console.log(err));
        }
    };

    // Saves a book to our MongoDB
    saveBook = book => {
        axios.post("/api/books", 
        {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            link: book.volumeInfo.previewLink,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        })
            .then(res => console.log("hi"))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.books)
        return (
            <div>
                <BookSearch
                    change={this.handleInputChange}
                    search={this.handleFormSubmit} />
                <div className="card mt-3 w-100 border-primary">
                    <h4 className="card-header">Results</h4>

                    {this.state.books ? (
                    <div className="card-body">
                        
                        {this.state.books.map(book => (
                            <BookResults
                            key={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            link={book.volumeInfo.previewLink}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            description={book.volumeInfo.description} 
                            save={() => this.saveBook(book)}/>
                            ))}
                            
                            </div>
                            ) : (<div className="p-3"><h3>No Results Found</h3></div>)}

                </div>
            </div>
                )

    }
}

export default Results;