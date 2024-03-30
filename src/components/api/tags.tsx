export const getTags = async (page: string|null, pagesize: string|null, order: string|null, sort: string|null): Promise<any> => {
    return fetch(`https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pagesize}&order=${order}&sort=${sort}&site=stackoverflow&filter=!nNPvSNVZJS`).then((res) => res.json())
}