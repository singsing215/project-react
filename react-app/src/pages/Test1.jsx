import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        <Header />
        <div class="container">
      <FormControl className={classes.formControl} action="/rent/paginate" method="get">
        <InputLabel id="demo-controlled-open-select-label">Estate</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Robinson Heights">Robinson Heights</MenuItem>
          <MenuItem value="Hoi deen Court">Hoi deen Court</MenuItem>
          <MenuItem value="Lime Stardom">Lime Stardom</MenuItem>
          <MenuItem value="AKVO Hotel">AKVO Hotel</MenuItem>
        </Select>
      </FormControl>
      </div>
      <Footer />
    </div>
  );
}