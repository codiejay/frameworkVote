import React from 'react';
import '../Landing/Landing.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
const Landing = () => {
  return (
    <div className="landingPage">
      <h2>AYE, THERE DEV!</h2>
      <p>
        It time to vote for your fav framework. But before that, let’s know your
        name!
      </p>
      <div className="usersName">
        <Input inputType="text" placeholder="Your Name!" />
      </div>

      <div id="userSocialMedia">
        <p>Optional</p>
        <section>
          <Input inputType="text" placeholder="Instagram Handle" />
          <Input inputType="text" placeholder="Twitter Handle" />
        </section>
        <div id="goButton">
          <Button>Let's Go!</Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
