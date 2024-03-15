// src/components/Button/Button.tsx
import React from 'react';
import Button from '@mui/material/Button';

interface Props {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<Props> = ({ label, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
