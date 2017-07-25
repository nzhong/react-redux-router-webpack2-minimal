import React, { Component } from 'react';

import BookList from '../links/bookList';
import BookDetail from '../../containers/book-detail';

import { HashRouter, Route } from 'react-router-dom'

class Link1Component extends Component {
    render() {
        return <div>Content 1</div>
    }
}
class Link2Component extends Component {
    render() {
        return <div>Content 2</div>
    }
}

export default class MainPage extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <BookList />
                    <hr />

                    <BookDetail />
                    <hr />

                    <div>
                        <Route exact path="/testLink1" component={Link1Component} />
                        <Route exact path="/testLink2" component={Link2Component} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}