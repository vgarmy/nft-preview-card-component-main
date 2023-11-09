import React from 'react';
import './ntfcard.css';
import Equilibrium from '../../images/image-equilibrium.jpg';
import EyeIcon from '../../images/icon-view.svg'
import Clock from '../../images/icon-clock.svg';
import Etherum from '../../images/icon-ethereum.svg';
import Avatar from '../../images/image-avatar.png';


const Ntfcard = () => {
  return (
    <div className='container' role="main">
      <div className='card__container'>
        <div className='img_container'>
          <img src={Equilibrium} alt="equilibrium" />
          <div className='img_container_hover'>
            <img src={EyeIcon} alt="eye icon" />
          </div>
        </div>
        <h1>Equilibrium #3429</h1>
        <p className='card__container_text'>Our Equilibrium collection promotes balance and calm.</p>
        <div className='card__container_information'>
          <p className='clock-text'><img src={Etherum} alt="Etherum" /> 0.041 ETH</p>
          <p className='etherum-text'><img src={Clock} alt="Clock" /> 3 days left</p>
        </div>
        <hr />
        <div className='avatar_text'>
          <img src={Avatar} alt="Avatar" /> <p>Creation of</p>&nbsp;<p className='avatar_name'>Jules Wyvern</p>
        </div>
      </div>
    </div>
  )
}

export default Ntfcard