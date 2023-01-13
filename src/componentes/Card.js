import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desktop: true,
    };
  }

  handleResize = () => {
    if (window.innerWidth < 720) {
      this.setState(() => {
        return { desktop: false };
      });
    } else {
      this.setState(() => {
        return { desktop: true };
      });
    }
  };

  render() {
    window.addEventListener('resize', this.handleResize);

    return (
      <article
        className='card-article col-md-3 col-12 d-flex align-items-end p-4'
        style={{
          backgroundImage: `url(${this.state.desktop ? this.props.imgDesktop : this.props.imgMobile})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h3>{this.props.title}</h3>
      </article>
    );
  }
}
