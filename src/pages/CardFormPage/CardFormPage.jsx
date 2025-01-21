import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CardForm from '../../components/CardForm/CardForm.jsx';

const CardFormPage = () => {
  const { card } = useOutletContext();

  return <CardForm card={card} />;
};

export default CardFormPage;
