import React from "react";
import { Header } from "../../components/header";
import "./styles.css";
import { Spinner } from "../../components/spinner";

const BEARS_URL = "https://placebear.com";
const BASE_WIDTH = 600;
const BASE_HEIGHT = 800;
const MAX = 30;

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export default class Inspiration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      isLoading: true,
    };
    this.handleInspire = this.handleInspire.bind(this);
  }

  componentDidMount() {
    this.fetchBearsDoingStuff();
  }

  fetchBearsDoingStuff() {
    const width = BASE_WIDTH + getRandomNumber(MAX);
    const height = BASE_HEIGHT + getRandomNumber(MAX);
    this.setState({ isLoading: true }, () => {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://placebear.com/${width}/${height}`,
        {
          headers: {
            accept: "blob",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            pragma: "no-cache",
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Linux"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
          },
          referrerPolicy: "strict-origin-when-cross-origin",
          body: null,
          method: "GET",
          mode: "cors",
          credentials: "omit",
        }
      )
        .then((data) => data.blob())
        .then((data) => {
          this.setState({
            image: URL.createObjectURL(data),
            isLoading: false,
          });
        });
    });
  }

  handleInspire() {
    this.fetchBearsDoingStuff();
  }

  render() {
    if (this.state.image === null) {
      return null;
    }
    return (
      <>
        <Header />
        <div className="inspiration-container">
          {!this.state.isLoading ? (
            <>
              <div className="inspiration-image-wrapper">
                <img
                  alt="picture of bear beat battlestar galactica"
                  src={this.state.image}
                />
              </div>
              <button
                onClick={this.handleInspire}
                className="inspiration-button"
              >
                <span className="inspiration-button-text">Inspire Me!</span>
              </button>
            </>
          ) : (
            <Spinner />
          )}
        </div>
      </>
    );
  }
}
