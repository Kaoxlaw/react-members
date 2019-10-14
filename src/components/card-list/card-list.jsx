import React from 'react';
import { Card } from '../card/card';
import './styles.css';

export const CardList = props => {
  return (
    <div className="card-list">
      {props.members.map(member => (
        <Card key={member.id} member={member} />
      ))}
    </div>
  );
};
