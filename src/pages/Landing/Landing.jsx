import React from 'react';
import './Landing.css';
import { Consumer } from '../../context';
import Button from '../../components/Button/Button';

class Landing extends React.Component {
  state = {
    Name: '',
    instagramHandle: '',
    twitterHandle: '',
    voted: false
  };

  // Function that is bind to all inputs

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  // This get called when user click the "Let's Go" Button

  handleNewUser = dispatch => {
    const { Name, instagramHandle, twitterHandle } = this.state;
    const user = {
      Name,
      instagramHandle,
      twitterHandle,
      voteFor: '',
      time: new Date().toUTCString()
    };

    //  Getting voted from localStorage if it already stored in localStorage and storing it in a variable
    const voted = localStorage.getItem('voted');

    // checking if the user has voted before to output error
    if (voted) {
      this.setState({ voted: true });
      setTimeout(() => this.setState({ voted: false }), 4000);
    }
    // Getting user IP from localStorage if it already stored in localStorage and storing it in a variable
    const myIp = localStorage.getItem('IP');

    // checking if the user has voted before
    if (Name) {
      if (!myIp) {
        dispatch({ type: 'CHANGE_ROUTE', payload: 'vote page' });
        sessionStorage.setItem('user', JSON.stringify(user));
      }
    }
  };
  render() {
    // Destructuring
    const { Name, instagramHandle, twitterHandle, voted } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="landingPage">
              <h2>AYE, THERE DEV!</h2>
              <p>
                It time to vote for your fav framework. But before that, let’s
                know your name!
              </p>
              <div className="usersName">
                <input
                  className="Input"
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
                    className="Social"
                    placeholder="Instagram Handle"
                    value={instagramHandle}
                    name="instagramHandle"
                    onChange={this.handleChange}
                  />
                  <input
                    className="Social"
                    placeholder="Twitter Handle"
                    value={twitterHandle}
                    name="twitterHandle"
                    onChange={this.handleChange}
                  />
                </section>
                <div id="goButton">
                  {voted ? (
                    <h3 className="error">Seems like You've already Voted</h3>
                  ) : null}
                  <Button
                    landingBtn="Custom"
                    handleNewUser={this.handleNewUser.bind(this, dispatch)}
                  >
                    Let's Go <span>>></span>
                  </Button>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Landing;
