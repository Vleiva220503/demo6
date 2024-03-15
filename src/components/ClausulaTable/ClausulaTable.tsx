// ClausulaTable.tsx
import React from 'react';
import AmpTableRefactor from '../AmpTableRefactor/AmpTableRefactor';

interface ClausulaTableProps {
  data: any[]; 
  columns: any[]; 
}

const ClausulaTable: React.FC<ClausulaTableProps> = ({ data, columns }) => {
  return (
    <AmpTableRefactor
      columns={columns}
      data={data}
      isLoading={false} 
      noDataMessage="No hay datos disponibles"
    />
  );
};

export default ClausulaTable;
