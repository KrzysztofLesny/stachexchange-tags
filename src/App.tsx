import './App.css';
import { useSearchParams } from "react-router-dom";
import { Container, Typography, Box, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import React from 'react';

function App() {
  const [searchParams, setSearchParams] = useSearchParams({
    pagesize: "25",
    sort: "popular",
    order: "desc"
  });

  const handleChange = (paramName: string, paramValue: string) => {
    setSearchParams(prev => {
      prev.set(paramName, paramValue || "");
      return prev;
    }, { replace: true})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form submited");
    return true;
  }

  return (
    <div className="App">
      <Container>
        <Typography variant='h3' component="h1" align="center">Stackexchange tags API browser</Typography>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField id="tags-per-page" label="Tags per page" variant="outlined" value={searchParams.get("pagesize")}/>
          <FormControl fullWidth>
            <InputLabel id="sort-by-label">Sort by:</InputLabel>
            <Select
              labelId="sort-by-label"
              id="sort-by"
              value={searchParams.get("sort")}
              label="Sort by"
              onChange={e => handleChange("sort", e.target.value || "")}
            >
              <MenuItem value={"popular"}>Popularity</MenuItem>
              <MenuItem value={"activity"}>Activity</MenuItem>
              <MenuItem value={"name"}>Name</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="order-by-label">Order by:</InputLabel>
            <Select
              labelId="order-by-label"
              id="order-by"
              value={searchParams.get("order")}
              label="Order by"
              onChange={e => handleChange("order", e.target.value || "")}
            >
              <MenuItem value={"desc"}>Descending</MenuItem>
              <MenuItem value={"asc"}>Ascending</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" type="submit">Get tags</Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
