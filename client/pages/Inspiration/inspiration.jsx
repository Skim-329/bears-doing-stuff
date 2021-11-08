import React from 'react';
import { Header } from '../../components/header';
import './styles.css';
// import axios from "axios";

const BEARS_URL = 'https://placebear.com';
const BASE_WIDTH = 600;
const BASE_HEIGHT = 800;
const MAX = 30;

// fetch(
//   `https://api.allorigins.win/get?url=${encodeURIComponent(
//     "https://wikipedia.org"
//   )}`
// )
//   .then((response) => {
//     if (response.ok) return response.json();
//     throw new Error("Network response was not ok.");
//   })
//   .then((data) => console.log(data.contents));

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export default class Inspiration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

  componentDidMount() {
    this.fetchBearsDoingStuff();
  }

  fetchBearsDoingStuff() {
    const width = BASE_WIDTH + getRandomNumber(MAX);
    const height = BASE_HEIGHT + getRandomNumber(MAX);
    const url = `${BEARS_URL}/${width}/${height}`;
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
      .then(response => {
        if (response.ok) {
          const data = response.json();
          // console.log(data);
          return data;
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        // console.log(data);
        this.setState({ image: data.contents });
      });
    // axios.get(url).then((response) => {
    //   console.log(response);
    // });
  }

  render() {
    if (this.state.image === null) {
      return null;
    }
    return (
      <>
        <Header />
        <img src={`data:image/jpeg;base64,${this.state.image}`} />
      </>
    );
  }
}
