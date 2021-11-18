import React from 'react';
import { Header } from '../../components/header';
import './styles.css';

export default class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <h1 className="about-page-text">About</h1>
        </div>
        <div>
          <div className="about-page-group">
            <div className="about-page-description">
              <p>
                Forged in the classroom of a teacher who wanted to provide
                entertainment and relief for weary students who had just
                finished taking a test, &#34;Bears Doing Stuff&#34; is a website
                designed to cultivate joy, provide rest, and share delight
                through the act of drawing bears doing stuff!
              </p>
              <p>
                Click &#34;Draw your bear&#34; and a randomly generated prompt
                will appear in your online sketchbook!
              </p>
              <p>Have fun!</p>
            </div>
            <div>
              <img
                className="about-page-photo"
                src="https://27mi124bz6zg1hqy6n192jkb-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-scaled.jpg"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
