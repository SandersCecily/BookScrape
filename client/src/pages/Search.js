import React, { Component } from "react";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";

class Search extends Component {

    state = {
        books: [],
        bookSearch: ""
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.bookSearch)
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
        this.setState({
            bookSearch: ""
        });
    };

    handleSave = (event, title, authors, description, href, thumbnail) => {
        event.preventDefault();
        API.saveBook({
            title: title,
            authors: authors,
            description: description,
            href: href,
            thumbnail: thumbnail
        })
        .then(res => alert("Book saved"));
    };

    render() {
        return (
            <div>
                    <div className="col rounded bg-light mb-4 mt-4 p-4">
                        <h4>Book Search</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="bookSearch">Book</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="bookSearch" 
                                    name="bookSearch" 
                                    value={this.state.bookSearch} 
                                    onChange={this.handleInputChange} />
                            </div>
                            <button onClick={this.handleFormSubmit}>Search</button>
                            <img className="ml-3" src="https://books.google.com/googlebooks/images/poweredby.png" alt="Powered by Google" />
                        </form>
                    </div>
                    <div className="col border border-rounded p-4">
                        <h4>Results</h4>
                        {!this.state.books.length ? (
                            <h6 className="text-center">No books to display currently</h6>
                        ) : (
                            <BookList>
                                {this.state.books.map(book => {
                                    return (
                                        <BookListItem
                                            key={book.volumeInfo.infoLink}
                                            title={book.volumeInfo.title}
                                            authors={Array.isArray(book.volumeInfo.authors) ? book.volumeInfo.authors : ["Unknown"]}
                                            description={book.volumeInfo.description}
                                            thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "https://placehold.it/128x197?text=No%20Preview"}
                                            href={book.volumeInfo.infoLink}
                                            saved={false}
                                            clickEvent={this.handleSave}
                                        />
                                    );
                                })}
                            </BookList>
                        )}
                    </div>
            </div>
        )
    }
}

export default Search;