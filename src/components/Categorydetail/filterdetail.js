import React from 'react';
import {connect} from 'react-redux';
import '../Categorydetail/filterdetail.scss'

const filterdetail = () => {
    return (
        <div className="category-detail">
            <ol>
                <li><a href="#Synopsis">Synopsis</a></li>
                <li><a href="#Cast">Cast</a></li>
                <li><a href="#Social">Review</a></li>
            </ol>
        </div>
    )
}

export default connect()(filterdetail);