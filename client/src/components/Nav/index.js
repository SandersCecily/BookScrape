import React from "react";

function Nav() {
    return (

        <nav class="navbar navbar-dark bg-primary navbar-expand-lg fixed-top info-color">
            <a class="navbar-brand" href="/">Google Books</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link waves-effect waves-light" href="/">Home <span
                            class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link waves-effect waves-light" href="/saved">Saved Books</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav;