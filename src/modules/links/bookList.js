import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from 'actions/index';
import { bindActionCreators } from 'redux';

import { Link, withRouter } from 'react-router-dom'

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li onClick={() => this.props.sb(book)}
                    key={book.title} >{book.title} </li>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderList()}
                <li><Link to='/testLink1'>Test Link1</Link></li>
                <li><Link to='/testLink2'>Test Link2</Link></li>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        sb: selectBook
    }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookList));
