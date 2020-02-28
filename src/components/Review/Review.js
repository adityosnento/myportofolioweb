import React from 'react';
import {connect} from 'react-redux';
import '../Review/Review.scss';

const Review = () => {
    return (
        <div className="review-container">
           <div className="menu">
               <h3 className="auto">Social</h3>
               <ul>
                   <li>Review</li>
                   <li>Discussion</li>
               </ul>

           </div>
        </div>
       

    )
}

export default connect()(Review);