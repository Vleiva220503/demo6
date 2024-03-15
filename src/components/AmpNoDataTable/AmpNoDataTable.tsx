import React from 'react';

interface AmpNoDataTableProps {
  message: string;
  showEmptyIcon: boolean;
}

const AmpNoDataTable: React.FC<AmpNoDataTableProps> = ({ message, showEmptyIcon }) => {
  return (
    <div>
      {showEmptyIcon && <span className="empty-icon" />} 
      <p>{message}</p>
    </div>
  );
};

export default AmpNoDataTable;
