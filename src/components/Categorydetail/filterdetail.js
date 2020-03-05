import React, {useState} from 'react';
import '../Categorydetail/filterdetail.scss'
import Synopsis from '../Overview/Overview'
import Cast from '../Cast/Moviedesc'
import Review from '../Review/Review'


function Filterdetail() {
    
    const synopsis="synopsis";
    const cast="cast";
    const review="review";
    
    const [detail, setDetail] = useState();
    
    return (
        <div className="category-detail">
            <ol className="category__ol">
                <li
                className={detail === synopsis ? "active" : ""}
                onClick={() => setDetail(synopsis)}
                >Synopsis
                </li>
                <li
                className={detail === cast ? "active" : ""}
                onClick={() => setDetail(cast)}
                >Cast
                </li>
                <li
                className={detail === review ? "active" : ""}
                onClick={() => setDetail(review)}
                >Review
                </li>
            </ol>
            <div>
                {detail === synopsis ? <Synopsis/> : false}
                {detail === cast ? <Cast/> : false}
                {detail === review ? <Review/>: false}
            </div>
        </div>
    )
}

export default Filterdetail;