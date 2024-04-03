import { 
    List, 
    ListItem, 
    Typography, 
    Box,
    LinearProgress,
    Pagination
} from "@mui/material"

interface TagsListProps {
    data: any;
    page: string|null;
    pagesize: string|null;
    MAX_NUM_OF_PAGES: number;
    handleChange: (paramName: string, paramValue: string) => void;
    isFetching: boolean;
}

export const TagsList: React.FC<TagsListProps> = ({data, page, pagesize, MAX_NUM_OF_PAGES, handleChange, isFetching}) => {
    return (
        <>
            <List sx={{mb: 1}}>
                {data.items.map((item: any) => (
                    <ListItem key={item.name} alignItems="center">
                        <Typography>
                            <Box component="span" fontWeight='bold'>{item.name}</Box> has <Box component="span" fontWeight='bold'>{item.count}</Box> associated posts
                        </Typography>
                    </ListItem>
                ))}
            </List>
            {isFetching && <LinearProgress />}
            <Pagination
                color="primary" 
                count={(Math.ceil(data?.total/Number(pagesize) < MAX_NUM_OF_PAGES ? Math.ceil(data?.total/Number(pagesize)) : MAX_NUM_OF_PAGES))} 
                page={Number(page)} 
                onChange={(e, value) => handleChange("page", String(value))} 
                sx={{mt: 1, justifyContent: "center"}}
            />
        </>
    )
}
    
