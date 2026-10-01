                                        // Week-1 Exercise

const BASEURL = "https://jsonplaceholder.typicode.com";
const getjson = async(path) => {
    const response = await fetch(`${BASEURL}${path}`);
    if (!response.ok){
        throw new Error(`Request to ${path} failed with status ${response.status}`);
    }
    return response.json
}
    export const fetchAll = async () => {
        const [users,posts,todos] = await Promise.all([
            getjson ("/users"),
            getjson ("/posts"),
            getjson ("/todos"),
        ]);
    
        return {users,posts,todos};
    };