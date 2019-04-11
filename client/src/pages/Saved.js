import React, { Component } from "react";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount() {
        this.loadSavedBooks();
    }

    loadSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({ savedBooks: res.data }))
    }

    deleteSavedBook = (event, id) => {
        event.preventDefault();
        API.deleteSavedBook(id)
          .then(res => this.loadSavedBooks())
          .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                    <div className="col border border-rounded p-4">
                        <h4>Saved Books</h4>
                        {!this.state.savedBooks.length ? (
                            <h6 className="text-center">No books to display currently</h6>
                        ) : (
                            <BookList>
                                {this.state.savedBooks.map(book => {
                                    return (
                                        <BookListItem
                                            key={book._id}
                                            id={book._id}
                                            title={book.title}
                                            authors={book.authors}
                                            description={book.description}
                                            thumbnail={book.thumbnail ? book.thumbnail : "https://placehold.it/128x197?text=No%20Preview"}
                                            href={book.href}
                                            saved={true}
                                            clickEvent={this.deleteSavedBook}
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

export default Saved;
