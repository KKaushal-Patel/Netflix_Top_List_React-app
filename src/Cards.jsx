import React from 'react';

function Card(props) {
    // console.log(props);
    console.log();
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgSrc} className="card_img" alt="MyPic" />
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        <h3 className="card_title"> {props.aname}</h3>
                        <a href={props.link} target="_blank" className="btn btn-primary">
                            <button> Watch Now</button>
                            <br />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;