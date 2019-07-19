import React from 'react';
import '../Landing/Landing.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landingPage">
      <h2>AYE, THERE DEV!</h2>
      <p>
        It time to vote for your fav framework. But before that, let’s know your
        name!
      </p>
      <div className="usersName">
        <Input placeholder="Your Name!" />
      </div>

      <div id="userSocialMedia">
        <p>Optional</p>
        <section className="SocialInputs">
          <Input placeholder="Instagram Handle" />
          <Input placeholder="Twitter Handle" />
        </section>
        <div id="goButton">
          <Button landingBtn="Custom">
            <Link to="/vote">
              Let's Go <span>>></span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Landing;
