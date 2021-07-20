export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths= data.map(ninja => {
        return {
            params: { id: ninja.id.toString()}
        }
    })
    return {
        paths, 
        fallback: false  // 404 page redirect for wrong url
    }
}

const Details = () => {
    return ( 
        <div>
            <h1>Details</h1>
            <h2></h2>
        </div>
     );
}
 
export default Details;