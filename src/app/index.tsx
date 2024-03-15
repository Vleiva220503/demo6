import React from 'react';
import { Grid, TextField, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import CustomButton from '../components/Button/Button';
import EditClausula from '../components/EditClausula/EditClausula';
import AmpTableRefactor from "../components/AmpTableRefactor/AmpTableRefactor";

const IndexPage = () => {
  const data = [
    { id: 1, clausa: 'Clausula 1', descripcion: 'Descripción 1', contenido: 'Contenido 1' },
    { id: 2, clausa: 'Clausula 2', descripcion: 'Descripción 2', contenido: 'Contenido 2' },
    // Otros datos...
  ];

  const columns = [
    { name: 'ID', selector: 'id' },
    { name: 'Clausula', selector: 'clausa' },
    { name: 'Descripción', selector: 'descripcion' },
    { name: 'Contenido', selector: 'contenido' },
  ];

  const handleGenerateClause = () => {
    console.log('Generar Clausula con IA');
  };

  const handleAddClause = () => {
    console.log('Agregar Clausula');
  };

  const handleDuplicateClausula = () => {
    console.log('Duplicar Clausula');
  };

  const handleAdjustClausula = () => {
    console.log('Ajustar Clausula');
  };

  const handleUpdateClausula = () => {
    console.log('Actualizar Clausula');
  };

  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <CustomButton label="Generar Clausula con IA" onClick={handleGenerateClause} />
        </Grid>
        <Grid item>
          <CustomButton label="Agregar Clausula" onClick={handleAddClause} />
        </Grid>
        <Grid item>
          <TextField
            label="Buscar Clausa"
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <SearchIcon />
              ),
            }}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <AmpTableRefactor data={data} columns={columns} />
      </Box>
      <Box mt={4}>
        <EditClausula
          onDuplicate={handleDuplicateClausula}
          onAdjust={handleAdjustClausula}
          onUpdate={handleUpdateClausula}
        />
      </Box>
    </div>
  );
};

export default IndexPage;
