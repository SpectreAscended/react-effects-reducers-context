import React from 'react';

const Input = props => {
  return (
    <div className={props.className}>
      <label htmlFor={props.htmlFor}>{props.children}</label>
      <input
        type={props.type}
        id={props.id}
        autoComplete={props.autoComplete}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
