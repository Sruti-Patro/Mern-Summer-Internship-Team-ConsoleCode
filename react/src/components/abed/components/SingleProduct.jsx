import { useParams} from 'react-router-dom';
const SingleProduct = () =>{
    const { id } =useParams();
    console.log({id})

    
    return (
            <>
            <h1>Singlepage</h1>
            </>
    )
    }

export default SingleProduct;