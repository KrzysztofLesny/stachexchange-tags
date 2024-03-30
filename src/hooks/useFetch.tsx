/*
import { useQuery } from "@tanstack/react-query"

interface TagsListProps {
    pagesize: string|null;
    sort: string|null;
    order: string|null;
}

export const useFetch: React.FC<TagsListProps> = ({pagesize, sort, order}) {

    return { isPending, isError, error, data } = useQuery({
        queryKey: ["tags"],
        queryFn: () =>
          fetch(`https://api.stackexchange.com/2.3/tags?page=1&pagesize=${pagesize}&order=${order}&sort=${sort}&site=stackoverflow`).then(
            (res) => res.json(),
          ),
      })
}
/-*/
export {}