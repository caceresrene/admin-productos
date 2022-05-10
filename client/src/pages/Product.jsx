import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
	const [product, setProduct] = useState({});
	let navigate = useNavigate();
	let { id } = useParams();

	useEffect(() => {
		try {
			const apiCall = async () => {
				const { data } = await axios(`http://localhost:8000/api/products/${id}`);
				setProduct(data);
			};
			apiCall();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className='max-w-2xl mx-auto my-8 flex flex-col items-center'>
			<h1 className='text-2xl font-bold'>{product.name}</h1>
			<p>Price: {product.price}$</p>
			<p>{product.description}</p>
			<button onClick={() => navigate('/')} className='underline hover:text-blue-500'>go back</button>
		</div>
	);
};

export default Product;
