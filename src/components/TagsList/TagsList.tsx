import { 
    List, 
    ListItem, 
    Typography, 
    Box, 
    Alert, 
    Container, 
    AlertTitle, 
    Pagination, 
    CircularProgress, 
    LinearProgress 
} from "@mui/material"
import { 
    useQuery, 
    keepPreviousData 
} from "@tanstack/react-query"
import { useState } from "react";

interface TagsListProps {
    pagesize: string|null;
    sort: string|null;
    order: string|null;
    page: string|null;
}

/*
https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pagesize}&order=${order}&sort=${sort}&site=stackoverflow&filter=!nNPvSNVZJS

https://swapi.dev/api/people/?page=${page}
*/

export const TagsList: React.FC<TagsListProps> = ({pagesize, sort, order, page}) => {
    const [p, setP] = useState(1);
    const MAX_NUM_OF_PAGES = 25; /* The maximum page number that will be returned for anonymous API access (no access token or app key) is 25 */

    const { isPending, isError, error, data, isFetching  } = useQuery({
        queryKey: ["tags", { page, pagesize, sort, order }],
        queryFn: () =>
          fetch(`https://swapi.dev/api/people/?page=${Number(page)}`)
            .then((res) => res.json()),
        placeholderData: keepPreviousData,
    })

    return (
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
                <>
                    <List sx={{mb: 1}}>
                        {data.results.map((item: any) => (
                            <ListItem key={item.name} alignItems="center">
                                <Typography>
                                    <Box component="span" fontWeight='bold'>{item.name}</Box> has <Box component="span" fontWeight='bold'>{item.heith}</Box> associated posts
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                    {isFetching && <LinearProgress />}
                    <Pagination
                        color="primary" 
                        count={(Math.ceil(data.total/Number(pagesize)) < MAX_NUM_OF_PAGES ? Math.ceil(data.total/Number(pagesize)) : MAX_NUM_OF_PAGES)} 
                        page={p} 
                        onChange={(e, value) => setP(value)} 
                        sx={{mt: 1, justifyContent: "center"}}
                    />
                    
                </>
            )}
        </Container>
    )
}