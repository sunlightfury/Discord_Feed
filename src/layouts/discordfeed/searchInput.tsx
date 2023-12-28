import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 4,
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(1),
    marginLeft: 0,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 2), // Adjust padding for mobile
    paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Adjust left padding for mobile
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1, 40, 1, 0), // Reset padding for larger screens
      paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Reset left padding for larger screens
    },
  },
}));

const SearchInput = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
    </Search>
  );
};

export default SearchInput;
