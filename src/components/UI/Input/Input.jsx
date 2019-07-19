import React from 'react';
import classes from './Input.module.css';
const Input = ({ placeholder, name, value, handleChange }) => {
  return (
    <div>
      <input
        name={name}
        value={value}
        className={
          placeholder === 'Your Name!' ? classes.Input : classes.Social
        }
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;

// import React from 'react';
// import classes from './Input.module.css';
// const Input = props => {
//   let inputElement = null;
//   switch (props.inputType) {
//     case 'text':
//       inputElement = (
//         <input
//           className={classes.Input}
//           type="text"
//           placeholder={props.placeholder}
//         />
//       );
//       break;

//     default:
//       inputElement = (
//         <input
//           className={classes.Input}
//           style={{fontSize: "21px"}}
//           type="text"
//           placeholder={props.placeholder}
//         />
//       );
//       break;
//   }
//   return (
//     <div>
//       <label> {inputElement}</label>
//     </div>
//   );
// };

// export default Input;
