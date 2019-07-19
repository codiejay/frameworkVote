import React from 'react';
import '../Landing/Landing.css';
// import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  state = {
    Name: '',
    instagramHandle: '',
    twitterHandle: ''
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleNewUser = () => {
    const { Name, instagramHandle, twitterHandle } = this.state;
    const user = {
      Name,
      instagramHandle,
      twitterHandle,
      voteFor: ''
    };
    sessionStorage.setItem('user', JSON.stringify(user));
  };
  render() {
    const { Name, instagramHandle, twitterHandle } = this.state;
    return (
      <div className="landingPage">
        <h2>AYE, THERE DEV!</h2>
        <p>
          It time to vote for your fav framework. But before that, let’s know
          your name!
        </p>
        <div className="usersName">
          <input
            placeholder="Your Name!"
            value={Name}
            name="Name"
            onChange={this.handleChange}
          />
        </div>

        <div id="userSocialMedia">
          <p>Optional</p>
          <section className="SocialInputs">
            <input
              placeholder="Instagram Handle"
              value={instagramHandle}
              name="instagramHandle"
              onChange={this.handleChange}
            />
            <input
              placeholder="Twitter Handle"
              value={twitterHandle}
              name="twitterHandle"
              onChange={this.handleChange}
            />
          </section>
          <div id="goButton">
            <Button landingBtn="Custom" handleNewUser={this.handleNewUser}>
              {Name ? (
                <Link to="/vote">
                  Let's Go <span>>></span>
                </Link>
              ) : (
                <Link to="/">
                  Let's Go <span>>></span>
                </Link>
              )}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
