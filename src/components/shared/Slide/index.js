import React from 'react';

export default function Slide(props) {
  const text = {
    color: '#5ca9fb',
    fontSize: '25px',
  };
  return (
    <>
      <p style={text}>{props.image.title}</p>
    </>
  );
}
