import React from 'react';
import {useViewport} from 'context'
export default function Slide(props) {
 
  const {isMobile} = useViewport();
  const text = {
    color: '#FFFF',
    fontSize:  isMobile ? "17px" :'25px',
  };
  return (
    <>
      <p style={text}>{props.image.title}</p>
    </>
  );
}
