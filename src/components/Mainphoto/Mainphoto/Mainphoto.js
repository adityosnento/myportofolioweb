import React from 'react';
import {connect} from 'react-redux';
import '../Mainphoto/Mainphoto.scss';

const Mainphoto = () => {
    return (
        <div className="Mainphoto">
            <div className="container-desc">
                <h1>Parasite</h1>
                <p>lorem ipsum</p>
                <button>Watch Trailer</button>
                <button>Add WatchList</button>
            </div>
        </div>

    )
}

export default connect()(Mainphoto);