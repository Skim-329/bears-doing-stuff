import React from 'react';
import Bear1Image from './slider-images/bear1.jpeg';
import Bear2Image from './slider-images/bear2.jpeg';
import Bear3Image from './slider-images/bear3.jpeg';
import Bear4Image from './slider-images/bear4.jpeg';
import Bear5Image from './slider-images/bear5.jpeg';
import './styles.css';

const carouselImages = [
  Bear1Image,
  Bear2Image,
  Bear3Image,
  Bear4Image,
  Bear5Image
];

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrev(event) {
    this.setState({
      currentIndex:
        this.state.currentIndex === 0 ? 4 : this.state.currentIndex - 1
    });
  }

  handleNext(event) {
    this.setState({
      currentIndex:
        this.state.currentIndex === 4 ? 0 : this.state.currentIndex + 1
    });
  }

  render() {
    return (
      <>
        <div className="carousel-container">
          <div className="arrow-container">
            <button className="carousel-button" onClick={this.handlePrev}>
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
          <div>
            <img src={carouselImages[this.state.currentIndex]} />
          </div>
          <div className="arrow-container">
            <button className="carousel-button" onClick={this.handleNext}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="carousel-dots-container">
          <span className="dot" onClick="currentSlide(1)"></span>
          <span className="dot" onClick="currentSlide(2)"></span>
          <span className="dot" onClick="currentSlide(3)"></span>
          <span className="dot" onClick="currentSlide(4)"></span>
          <span className="dot" onClick="currentSlide(5)"></span>
        </div>
      </>
    );
  }
}
