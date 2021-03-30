import React from 'react'

export const Slide = (props) => {
    const text = {
        color: "rgb(57, 171, 111)",
        fontSize: "25px",
      };
    return (
      <>
        <p style={text}>
          {props.image.title}
        </p>
      </>
    );
  };