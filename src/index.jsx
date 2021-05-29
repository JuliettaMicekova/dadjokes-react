import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [like, setlike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleClickLike = () => {
    setlike(like + 1);
  };

  const handleClickDislike = () => {
    setDislike(dislike + 1);
  };

  const myStyle = { color: 'green' };

  return (
    <>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img
                className="user-avatar"
                src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
              />
              <p className="user-name">Neroxx</p>
            </div>

            <p className="joke__text">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>
          <div className="joke__likes">
            <button
              onClick={handleClickLike}
              id="btn-up"
              className="btn-like btn-like--up"
            ></button>
            <span id="likes-up" className="likes-count likes-count--up"></span>
            {like}
            <button
              onClick={handleClickDislike}
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

render(<App />, document.querySelector('#app'));
