import React from 'react';
import { NavLink } from 'react-router-dom';
import { BearLogo } from '../../components/header/bearlogo';
import CanvasDraw from 'react-canvas-draw';
import { DrawerOptions, EraserOptions } from './drawing-options';
import './styles.css';

function renderText() {
  const ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'black';
  ctx.font = '48px serif';
  ctx.fillText('Hello world', 100, 150);
}

export default class Sketchbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pen: { brushRadius: 1 },
      prompts: [
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
      ]
    };
    this.handleSelectBrushRadius = this.handleSelectBrushRadius.bind(this);
  }

  componentDidMount() {
    renderText();
    this.setState(prevState => ({
      randomIndex: Math.floor(Math.random() * prevState.prompts.length)
    }));
  }

  handleSelectBrushRadius(event) {
    const radius = Number(event.target.id);
    this.setState({
      pen: {
        brushRadius: radius
      }
    });
  }

  render() {
    const { pen, randomIndex, prompts } = this.state;
    // renderText();
    return (
      <div className="sketchbook-content">
        <header className="sketchbook-header">
          <NavLink to="/">
            <BearLogo />
          </NavLink>
          <h1>{prompts[randomIndex]}</h1>
        </header>
        <div>
          <div className="sketchbook-sidebar">
            <div className="sketchbook-pen">
              <DrawerOptions selectRadius={this.handleSelectBrushRadius} />
            </div>
            <div className="sketchbook-eraser">
              <EraserOptions selectRadius={this.handleSelectBrushRadius} />
            </div>
          </div>
          <textarea id="sketchbook-text-area" />
          <div className="sketchbook-canvas">
            <CanvasDraw
              lazyRadius={0}
              canvasWidth={900}
              canvasHeight={600}
              brushRadius={pen.brushRadius}
              hideGrid={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
