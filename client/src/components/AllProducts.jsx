import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AllProducts = () => {
	let navigate = useNavigate();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		try {
			const apiCall = async () => {
				const { data } = await axios.get('http://localhost:8000/api/products');
				setProducts(data);
			};
			apiCall();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className='text-center my-8'>
			<h1 className='text-2xl font-bold'>All Products</h1>
			{products.map((p, index) => (
				<a
					className='hover:cursor-pointer underline'
					key={index}
					onClick={() => navigate(`/${p._id}`)}
				>
					{p.name}
				</a>
			))}
		</div>
	);
};

export default AllProducts;
