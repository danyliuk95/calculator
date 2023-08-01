import React from 'react';
import Button from '@mui/material/Button';
import './styles.scss'

const CalcButton = ({text, onClick, className = ''}) => {
  return (
    <Button variant="contained" onClick={onClick} className={`calc-button ${className}`}>{text}</Button>
  );
}

export default CalcButton
