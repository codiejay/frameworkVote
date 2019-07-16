import React from 'react';
import '../Landing/Landing.css';
const Landing = () => {
  return (
    <div className="landingPage">
      <h2>AYE, THERE DEV!</h2>
      <p>
        It time to vote for your fav framework. But before that, let’s know your
        name!{' '}
      </p>
      <div className="usersName">
        <input placeholder="Your Name!" />
      </div>

      <div id="userSocialMedia">
        <p>Optional</p>
        <section>
          <input placeholder="Instagram Handle" />
          <input placeholder="Twitter Handle" />
        </section>
        <div id="goButton">
          <button> Let's Go!>> </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
