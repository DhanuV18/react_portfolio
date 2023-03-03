import React from 'react';
import logo from '../images/favicon.png'


const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <img src={logo} alt="" className='footer__logo' />
          <p className="copyright__paragraph">Copyright 2023. Designed & coded by Dhanushan</p>          
        </div>
      </div>
      
    </div>
  );
};

export default AppWrap;