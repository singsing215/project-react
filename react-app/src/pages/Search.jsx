import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Search.scss'


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
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <form action="http://localhost:1337/rent/jpaginate" method="get">
          <FormControl className={classes.formControl} id="selector">
            <InputLabel id="demo-controlled-open-select-label">select a estate</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              name="estate"
            >
              <MenuItem value={""}><em>None</em></MenuItem>
              <MenuItem value={"Robinson Heights"}>Robinson Heights</MenuItem>
              <MenuItem value={"Hoi deen Court"}>Hoi deen Court</MenuItem>
              <MenuItem value={"Lime Stardom"}>Lime Stardom</MenuItem>
              <MenuItem value={"AKVO Hotel"}>AKVO Hotel</MenuItem>
            </Select>
          </FormControl>
          <div className="row" id="btn">
            <Button type="submit"  variant="contained" color="primary" style={{ marginLeft: 9 }}>Search</Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
