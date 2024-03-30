import { useSearchParams } from "react-router-dom";
import { Container, Typography, CircularProgress, Alert, AlertTitle } from '@mui/material';
import { TagsList } from './components/TagsList';
import { SearchForm } from './components/SearchForm';
import { 
  useQuery, 
  keepPreviousData 
} from "@tanstack/react-query"
import { getTags } from "./api/tags";

function App() {
  const [searchParams, setSearchParams] = useSearchParams({
    pagesize: "10",
    sort: "popular",
    order: "desc",
    page: "1"
  });
  const pagesize = searchParams.get("pagesize");
  const sort = searchParams.get("sort");
  const order = searchParams.get("order");
  const page = searchParams.get("page");
  const MAX_NUM_OF_PAGES = 25; /* The maximum page number that will be returned for anonymous API access (no access token or app key) is 25 */

  const { isPending, isError, error, data, isFetching, refetch  } = useQuery({
    queryKey: ["tags", page ],
    queryFn: () => getTags(page, pagesize, order, sort),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  })

  const handleChange = (paramName: string, paramValue: string) => {
    setSearchParams(prev => {
      prev.set(paramName, paramValue || "");
      return prev;
    }, { replace: true})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  }

  return (
    <div className="App">
      <Container>
        <Typography variant='h3' component="h1" align="center" marginTop={4} marginBottom={8} >Stackexchange tags API browser</Typography>
        <SearchForm 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          pagesize = {pagesize} 
          sort = {sort}
          order = {order}
        />
        <Container 
            sx={{
                mt: 4,
                width: "fit-content",
            }}
        >
          {isPending ? (
              <CircularProgress />
            ) : isError ? (
              <Alert severity="error"><AlertTitle>Error</AlertTitle> {error.message}</Alert>
            ) : (data.error_id) ? (
              <Alert severity="error"><AlertTitle>Error {data.error_id} {data.error_name}</AlertTitle>{data.error_message}</Alert>
            ) : (
              <TagsList 
                data={data} 
                page={page} 
                pagesize={pagesize} 
                MAX_NUM_OF_PAGES={MAX_NUM_OF_PAGES} 
                handleChange={handleChange} 
                isFetching={isFetching}
              />
            )
          }
        </Container>
      </Container>
    </div>
  );
}

export default App;
