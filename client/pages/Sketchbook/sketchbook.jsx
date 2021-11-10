import React from 'react';
import { NavLink } from 'react-router-dom';
import { BearLogo } from '../../components/header/bearlogo';
import CanvasDraw from 'react-canvas-draw';
import './styles.css';

// static defaultProps = {
//     onChange: null
//     loadTimeOffset: 5,
//     lazyRadius: 30,
//     brushRadius: 12,
//     brushColor: "#444",
//     catenaryColor: "#0a0302",
//     gridColor: "rgba(150,150,150,0.17)",
//     hideGrid: false,
//     canvasWidth: 400,
//     canvasHeight: 400,
//     disabled: false,
//     imgSrc: "",
//     saveData: null,
//     immediateLoading: false,
//     hideInterface: false,
//     gridSizeX: 25,
//     gridSizeY: 25,
//     gridLineWidth: 0.5,
//     hideGridX: false,
//     hideGridY: false
//   };

export default class Sketchbook extends React.Component {
  render() {
    const prompts = [
      'Draw a bear drinking tea.',
      'Draw a bear riding a bicycle.',
      'Draw a bear trying on shoes.',
      'Draw a bear jumping on a trampoline.',
      'Draw a bear juggling.',
      'Draw a bear playing basketball.',
      'Draw a bear preventing forest fires.',
      'Draw a bear attending Learning Fuze.',
      'Draw a bear reading a book.',
      'Draw a bear eating sushi.',
      'Draw a bear driving a car.',
      'Draw a bear eating watermelons.',
      'Draw a bear on vacation.',
      'Draw a bear doing the laundry.',
      'Draw a bear buying groceries.'
    ];
    const randomIndex = Math.floor(Math.random() * prompts.length);

    return (
      <div className="sketchbook-content">
        <header className="sketchbook-header">
          <NavLink to="/">
            <BearLogo />
          </NavLink>
          <h1>{prompts[randomIndex]}</h1>
        </header>
        <div>
          <div className="sketchbook-sidebar"></div>
          <div className="sketchbook-canvas">
            <CanvasDraw
              lazyRadius={0}
              canvasWidth={700}
              canvasHeight={500}
              brushRadius={1}
            />
          </div>
        </div>
      </div>
    );
  }
}
