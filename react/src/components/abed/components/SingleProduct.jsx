import { useParams} from 'react-router-dom';
const SingleProduct = () =>{
    const { id } =useParams();
    console.log(`item clicked${id}`)

    
    
    return (
            <>
            <h1>Single product page</h1>
            </>
    )
    }

export default SingleProduct;