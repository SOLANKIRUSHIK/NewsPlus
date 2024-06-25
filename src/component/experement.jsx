import React, { useState } from 'react';

export const Experement = () => {
  const [text, setText] = useState("hello how are you");
  
  const changetext = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  return (
    <>
      <div>experement</div>
      <p>{text}</p>
      <button onClick={changetext}>hello</button>
    </>
  );
};
