import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { selectBook } from '../actions/index';
//import { bindActionCreators } from 'redux';

class BookDetail extends Component {
    render() {
        return (
            <div>
                BookDetail
                {JSON.stringify(this.props.activeBook)}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);