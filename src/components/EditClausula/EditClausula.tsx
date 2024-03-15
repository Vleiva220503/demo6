// src/components/EditClausula.tsx
import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

interface EditClausulaProps {
  onDuplicate: () => void; 
  onAdjust: () => void; 
  onUpdate: () => void; 
}

const EditClausula: React.FC<EditClausulaProps> = ({ onDuplicate, onAdjust, onUpdate }) => {
  const [editClausula, setEditClausula] = useState({
    nombre: '',
    descripcion: '',
    contenido: '',
  });

  const handleEditChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditClausula({ ...editClausula, [field]: e.target.value });
  };

  return (
    <Box>
      <h2>Editar Clausula</h2>
      <TextField
        label="Nombre de Clausa"
        variant="outlined"
        size="small"
        fullWidth
        value={editClausula.nombre}
        onChange={handleEditChange('nombre')}
      />
      <TextField
        label="Descripción"
        variant="outlined"
        size="small"
        fullWidth
        multiline
        rows={4}
        value={editClausula.descripcion}
        onChange={handleEditChange('descripcion')}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Contenido"
        variant="outlined"
        size="small"
        fullWidth
        multiline
        rows={4}
        value={editClausula.contenido}
        onChange={handleEditChange('contenido')}
        sx={{ mt: 2 }}
      />
      <Button variant="contained" onClick={onDuplicate} sx={{ mr: 2, mt: 2 }}>
        Duplicar Clausula
      </Button>
      <Button variant="contained" onClick={onAdjust} sx={{ mr: 2, mt: 2 }}>
        Ajustar
      </Button>
      <Button variant="contained" onClick={onUpdate} sx={{ mt: 2 }}>
        Actualizar
      </Button>
    </Box>
  );
};

export default EditClausula;
