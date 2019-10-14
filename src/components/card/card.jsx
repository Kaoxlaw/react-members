import React from 'react';
import './styles.css';

export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="member"
        src={`https://robohash.org/${props.member.id}?set=set2&size=180x180`}
      />
      <h2> {props.member.name} </h2>
      <p> {props.member.email} </p>
    </div>
  );
};
