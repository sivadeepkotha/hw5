import React from 'react';

const view = ({ activity, onFetchActivity }) => {
  return (
    <div>
      <h1>Feeling Bored</h1>
      <button onClick={onFetchActivity}>Suggest Me Something</button>
      <p className="activity">{activity}</p>
    </div>
  );
};

export default view;