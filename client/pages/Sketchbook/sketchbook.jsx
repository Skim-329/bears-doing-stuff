import React from 'react';
import { NavLink } from 'react-router-dom';
import { BearLogo } from '../../components/header/bearlogo';
import { Spinner } from '../../components/spinner';
import CanvasDraw from 'react-canvas-draw';
import { BrushOptions, EraserOptions, PromptOptions } from './drawing-options';
import './styles.css';

export default class Sketchbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pen: { brushRadius: 1, color: '#000000' },
      prompts: [],
      loading: true
    };
    this.handleUpdateBrush = this.handleUpdateBrush.bind(this);
    this.handleUpdateEraser = this.handleUpdateEraser.bind(this);
    this.handleUpdatePrompt = this.handleUpdatePrompt.bind(this);
  }

  componentDidMount() {
    fetch('/api/bearPrompts')
      .then(res => res.json())
      .then(data => {
        this.setState({
          prompts: data
        });

        this.setState(prevState => ({
          randomIndex: Math.floor(Math.random() * prevState.prompts.length),
          loading: false
        }));
      });
  }

  handleUpdateBrush(event) {
    const radius = Number(event.target.id);
    this.setState({
      pen: {
        brushRadius: radius,
        color: '#000000'
      }
    });
  }

  handleUpdateEraser(event) {
    const radius = Number(event.target.id);
    this.setState({
      pen: {
        brushRadius: radius,
        color: '#ffffff'
      }
    });
  }

  handleUpdatePrompt(event) {
    this.setState(prevState => ({
      randomIndex: event.target.id - 1
    }));
  }

  render() {
    const { pen, randomIndex, prompts } = this.state;
    return (
      <div className="sketchbook-content">
        <header className="sketchbook-header">
          <NavLink to="/">
            <BearLogo />
          </NavLink>
          <h1>
            {this.state.loading ? <Spinner /> : prompts[randomIndex].prompt}
          </h1>
        </header>
        <div>
          <div className="sketchbook-sidebar">
            <div className="sketchbook-pen">
              <BrushOptions updateBrush={this.handleUpdateBrush} />
            </div>
            <div className="sketchbook-eraser">
              <EraserOptions updateEraser={this.handleUpdateEraser} />
            </div>
            <div className="sketchbook-prompt">
              <PromptOptions updatePrompt={this.handleUpdatePrompt} />
            </div>
          </div>
          <div className="sketchbook-canvas">
            <CanvasDraw
              lazyRadius={0}
              canvasWidth={900}
              canvasHeight={600}
              brushRadius={pen.brushRadius}
              brushColor={pen.color}
              hideGrid={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
