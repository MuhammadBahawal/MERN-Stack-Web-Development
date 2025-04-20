import React from 'react';

const Props = ({ data }) => {
  return (
    <div>
      {Array.isArray(data) ? (
        <>
          <h1>Name: {data[0]}</h1>
          <h2>Age: {data[1]}</h2>
          <h3>Degree: {data[2]}</h3>
        </>
      ) : (
        <img src={data} alt="network error" />
      )}
    </div>
  );
};

export default Props;
