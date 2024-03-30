import { useSearchParams } from "react-router-dom";
import { Container, Typography } from '@mui/material';
import { TagsList } from './components/TagsList';
import { SearchForm } from './components/SearchForm';

function App() {
  const [searchParams, setSearchParams] = useSearchParams({
    pagesize: "10",
    sort: "popular",
    order: "desc",
    page: "1"
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
  }

  return (
    <div className="App">
      <Container>
        <Typography variant='h3' component="h1" align="center" marginTop={4} marginBottom={8} >Stackexchange tags API browser</Typography>
        <SearchForm 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          pagesize = {searchParams.get("pagesize")} 
          sort = {searchParams.get("sort")}
          order = {searchParams.get("order")}
          page = {searchParams.get("page")}
        />
        <TagsList 
          pagesize = {searchParams.get("pagesize")} 
          sort = {searchParams.get("sort")}
          order = {searchParams.get("order")}
          page = {searchParams.get("page")}
        />
      </Container>
    </div>
  );
}

export default App;
