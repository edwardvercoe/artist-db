import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const genres = [
  'House',
  'Techno',
  'Disco',
  'Hip Hop',
  'Trap'
];



export default function GenreSelect({genre, setGenre}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setGenre(event.target.value);
  };


  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Genre</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={genre}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (
            <div >
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} variant="outlined" color="primary" />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {genres.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={genre.indexOf(name) > -1} />
              <ListItemText primary={name} />
              
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
