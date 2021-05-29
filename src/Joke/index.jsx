import React, { useState } from 'react';
import './style.css';

export const Joke = (props) => {
  const [like, setLike] = useState(props.likes);
  const [dislike, setDislike] = useState(props.dislikes);

  // const handleClickLike = () => {
  //   setlike(like + 1);
  // };

  // const handleClickDislike = () => {
  //   setDislike(dislike + 1);
  // };

  return (
    <>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img className="user-avatar" src={props.userAvatar} />
              <p className="user-name">{props.userName}</p>
            </div>

            <p className="joke__text">{props.text}</p>
          </div>
          <div className="joke__likes">
            <button
              onClick={() => setLike(like + 1)}
              id="btn-up"
              className="btn-like btn-like--up"
            ></button>
            <span id="likes-up" className="likes-count likes-count--up"></span>
            {like}
            <button
              onClick={() => setDislike(dislike + 1)}
              id="btn-down"
              className="btn-like btn-like--down"
            ></button>
            <span
              id="likes-down"
              className="likes-count likes-count--down"
            ></span>
            {dislike}
          </div>
        </div>
      </div>
    </>
  );
};
