import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import React from 'react';

// import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2 },
        marginTop: '64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%',
      }}
      noValidate
      autoComplete="off"
    >
      <Stack alignItems="stretch">
        <div>
          <TextField required id="nome" label="Nome" placeholder="Nome" />
          <TextField
            required
            id="sobrenome"
            label="Sobrenome"
            placeholder="Sobrenome"
          />
        </div>
        <div>
          <TextField
            required
            id="email"
            label="Email"
            type="email"
            placeholder="meuemail@meu.dominio"
          />
          <TextField
            required
            id="telefone"
            label="Telefone"
            type="numeric"
            placeholder="(00) 0 0000 0000"
          />
        </div>
        <div>
          <TextField
            multiline
            required
            id="message"
            label="Message"
            type="text"
            fullWidth
            placeholder="Digite Sua mensagem"
            rows={6}
          />
        </div>
      </Stack>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          How do you want to receive our news
        </FormLabel>
        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel value="email" control={<Radio />} label="Email" />
          <FormControlLabel value="phone" control={<Radio />} label="Phone" />
          <FormControlLabel
            value="whatsapp"
            control={<Radio />}
            label="WhatsApp"
          />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ m: 1, width: '30%' }}>
        <InputLabel id="news-time">Period to recieve news</InputLabel>
        <Select
          labelId="news-time"
          id="news-time"
          label="Period to recieve news"
          // onChange={handleChange}
        >
          <MenuItem>Morning</MenuItem>
          <MenuItem>Afternoon</MenuItem>
          <MenuItem>Night</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined">Send</Button>
    </Box>
  );
};

export default Contact;
