import React from 'react';
import {connect} from 'react-redux';
import '../Category filter/filter.scss'

const filter = () => {
    return (
        <div className="category">
           <h2>Browse by Category</h2>
            <ol>
                <li>All</li>
                <li>Action</li>
                <li>Fantasy</li>
                <li>Romance</li>
                <li>Science fiction</li>
            </ol>
        </div>
    )
}

export default connect()(filter);