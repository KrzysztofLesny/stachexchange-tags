import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

interface SearchFormProps {
    handleChange: (paramName: string, paramValue: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
    pagesize: string|null;
    sort: string|null;
    order: string|null;
    page: string|null;
}

export const SearchForm: React.FC<SearchFormProps> = ({handleChange, handleSubmit, pagesize, sort, order, page}) => {
    return (
        <Grid
          container
          spacing={3}
          alignItems="center"
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid item xs={12} sm={6} md={3}>
            <TextField
                id="outlined-number"
                label="Number"
                type="number"
                variant="outlined"
                fullWidth
                value={page}
                onChange={e => handleChange("page", String(e.target.value) || "")}
            />
            <TextField 
                id="tags-per-page" 
                label="Tags per page" 
                variant="outlined" 
                fullWidth 
                value={pagesize} 
                onChange={e => handleChange("pagesize", e.target.value || "")}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel id="sort-by-label">Sort by:</InputLabel>
              <Select
                labelId="sort-by-label"
                id="sort-by"
                value={sort}
                label="Sort by"
                onChange={e => handleChange("sort", e.target.value || "")}
              >
                <MenuItem value={"popular"}>Popularity</MenuItem>
                <MenuItem value={"activity"}>Activity</MenuItem>
                <MenuItem value={"name"}>Name</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel id="order-by-label">Order by:</InputLabel>
              <Select
                labelId="order-by-label"
                id="order-by"
                value={order}
                label="Order by"
                onChange={e => handleChange("order", e.target.value || "")}
              >
                <MenuItem value={"desc"}>Descending</MenuItem>
                <MenuItem value={"asc"}>Ascending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth type="submit">Get tags</Button>
          </Grid>
        </Grid>
    )
}