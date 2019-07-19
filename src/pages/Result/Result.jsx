import React from 'react';
import { Consumer } from '../../context';
import vue from '../../assets/vue.svg';
import react from '../../assets/react.svg';
import classes from './Result.module.css';

const Result = () => {
  return (
    <Consumer>
      {value => {
        const reactVotes = [],
          vueVotes = [];
        const { voters } = value;
        for (let voter of voters) {
          console.log(voter);
          if (voter.voteFor === 'ReactJs') {
            reactVotes.push(voter);
          } else {
            vueVotes.push(voter);
          }
        }
        console.log(voters.length);

        return (
          <div className={classes.Result}>
            <div className={classes.Wrapper}>
              <div className={classes.FlexMain}>
                <img className={classes.Image} src={react} alt="React Logo" />
                <h2 className={classes.Votes}>VOTES: {reactVotes.length}</h2>
              </div>
            </div>
            <div className={classes.Wrapper}>
              <div className={classes.FlexMain}>
                <img className={classes.Image} src={vue} alt="Vue Logo" />
                <h2 className={classes.Votes}>VOTES: {vueVotes.length}</h2>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Result;
