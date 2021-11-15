import React from 'react';
import { Header } from '../../components/header';
import './styles.css';

export default class Inspiration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      bearPhotos: [
        'https://www.nps.gov/common/uploads/grid_builder/bears/crop16_9/22227B96-9A8A-6B07-01C6B2A496F6AF20.jpg?width=950&quality=90&mode=crop',
        'https://lumiere-a.akamaihd.net/v1/images/hb_bears_mobile_19090_4f570c4d.jpeg?region=0,0,640,480',
        'https://19mvmv3yn2qc2bdb912o1t2n-wpengine.netdna-ssl.com/science/files/2021/08/c82db14beeb5dbe05ef44a75ece2a0a0_original-1260x708.jpg',
        'https://bearswire.usatoday.com/wp-content/uploads/sites/63/2021/07/3fd57f241fc14dcfb1b5c853476df956.jpg?w=1000&h=600&crop=1',
        'https://th-thumbnailer.cdn-si-edu.com/l7ikQadtMUtVB3HQ3GnGzr7PRE0=/1000x750/filters:no_upscale():focal(4824x2745:4825x2746)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/45/67/4567c588-760f-402b-9a36-ab2cb74e3bd4/51429950542_f7647e4138_o.jpg',
        'http://cdn.cnn.com/cnnnext/dam/assets/211007211315-01-bear-encounters-restricted.jpg',
        'https://images.immediate.co.uk/production/volatile/sites/23/2019/10/shutterstock_1318940468-d60b405.jpg?quality=90&resize=620%2C413',
        'https://www.motherjones.com/wp-content/uploads/2021/10/fat-bear-.jpeg?w=1200&h=630&crop=1',
        'https://pyxis.nymag.com/v1/imgs/9a8/4f0/334fd7affff0c7beb9d092351bfcc7eac0-GettyImages-1271918348.rvertical.w1200.jpg',
        'https://www.alaskawildlife.org/wp-content/uploads/2016/12/JB-napping-on-a-log-Photo-by-Nicole-Geils-Resized-for-Web-1024x679.jpg',
        'https://static01.nyt.com/images/2021/11/04/opinion/04appelbaum1/04appelbaum1-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        'https://lh3.googleusercontent.com/proxy/e-VnPE1hd5XZirG6N-Myeaj__huhQEuPMrz9-WQEOrp3IXWyrqUdo961zIySM6Ajpn6wqUoR5VD6MjYKa9CZTYsvLDF_JFo5DfNKWzmEoZTKsXTxRiVq2x4'
      ]
    };
    this.handleInspire = this.handleInspire.bind(this);
  }

  componentDidMount() {
    this.fetchBearsDoingStuff();
  }

  getRandomNumber() {
    this.setState(prevState => ({
      randomIndex: Math.floor(Math.random() * prevState.bearPhotos.length)
    }));
  }

  fetchBearsDoingStuff() {
    this.getRandomNumber();
    this.setState(prevState => ({
      image: prevState.bearPhotos[prevState.randomIndex]
    }));
  }

  handleInspire() {
    this.fetchBearsDoingStuff();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="inspiration-container">
          <>
            <div className="inspiration-image-wrapper">
              <img
                alt="picture of bear beats battlestar galactica"
                src={this.state.image}
              />
            </div>
            <button onClick={this.handleInspire} className="inspiration-button">
              <span className="inspiration-button-text">Inspire Me!</span>
            </button>
          </>
        </div>
      </div>
    );
  }
}
