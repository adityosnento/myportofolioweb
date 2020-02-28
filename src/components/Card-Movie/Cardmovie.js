import React from 'react';
import {connect} from 'react-redux';
import '../Card-Movie/Cardmovie.scss';

const CardMovie = () => {
    return (
        <div className="body-container">
            <div className="card-container">
                <img 
                    src={require('../../assets/1.webp')} 
                    alt="logo"
                    className=""/>
                <h3>Doraemon</h3>
                <p>Kartun</p>
            </div>
            <div className="card-container">
                <img 
                    src={require('../../assets/Avengers-Heroes.jpg')} 
                    alt="logo"
                    className=""/>
                <h3>Doraemon</h3>
                <p>Kartun</p>
            </div>
            <div className="card-container">
                <img 
                    src={require('../../assets/Avengers-Heroes.jpg')} 
                    alt="logo"
                    className=""/>
                <h3>Doraemon</h3>
                <p>Kartun</p>
            </div>
            <div className="card-container">
                <img 
                    src={require('../../assets/Avengers-Heroes.jpg')} 
                    alt="logo"
                    className=""/>
                <h3>Doraemon</h3>
                <p>Kartun</p>
            </div>
            <div className="card-container">
                <img 
                    src={require('../../assets/Avengers-Heroes.jpg')} 
                    alt="logo"
                    className=""/>
                <h3>Doraemon</h3>
                <p>Kartun</p>
            </div>
            <div className="card-container">
                <img 
                    src={require('../../assets/Avengers-Heroes.jpg')} 
                    alt="logo"
                    className=""/>
                <h3>Doraemon</h3>
                <p>Kartun</p>
            </div>
            
            
            
        </div>
       

    )
}

export default connect()(CardMovie);