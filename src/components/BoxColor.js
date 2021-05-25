import React from 'react';


const BoxColor = (props) => {
const divStyle = {
    backgroundColor: 'rgb(' + props.r + ', ' + props.g + ', ' + props.b + ')',
    color: 'white',
  };
  const colorHash = '';
  return (
    <div style={divStyle}>
      rgb({props.r},{props.g},{props.b})
      <br />
      {colorHash}
    </div>
  );
};

export default BoxColor;