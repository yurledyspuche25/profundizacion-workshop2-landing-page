import React, { Component } from 'react';
import listCards from '../data/cards';
import Card from './Card';
import '../estilos/ourCreations.scss';

export default class OurCreations extends Component {
  renderCards = (listCards) => {
    return listCards.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        imgDesktop={card.imgDesktop}
        imgMobile={card.imgMobile}
      />
    ));
  };

  render() {
    return (
      <section className='container p-5 d-flex flex-column gap-md-5 gap-3'>
        <div className='row d-flex flex-row justify-content-md-between justify-content-center mb-4 mx-md-4 px-md-5'>
          <h2 className='col-12 col-md-6 text-md-start text-center' >OUR CREATIONS</h2>
          <button className='col-3' style={{ width: 150 }}>
            SEE ALL
          </button>
        </div>
        <div className='row d-flex justify-content-center gap-4'>
          {this.renderCards(listCards)}
        </div>
      </section>
    );
  }
}
