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

	const handleDelete = async (_id) => {
		await axios.delete(`http://localhost:8000/api/products/${_id}`);
		// Update products state
		let updatedProducts = products.filter((product) => product._id != _id);
		setProducts(updatedProducts);
	};

	return (
		<div className='text-center my-8 max-w-md mx-auto'>
			<h1 className='text-2xl font-bold'>All Products</h1>
			{products.map((p, index) => (
				<div key={index} className='grid grid-cols-3 gap-2 my-2'>
					<a
						className='hover:cursor-pointer underline hover:text-blue-500'
						onClick={() => navigate(`/${p._id}`)}
					>
						{p.name}
					</a>
					<button
						onClick={() => navigate(`/edit/${p._id}`)}
						className='bg-amber-500 rounded text-white hover:bg-amber-400'
					>
						Edit
					</button>
					<button
						onClick={() => handleDelete(p._id)}
						className='bg-red-500 rounded text-white hover:bg-red-400'
					>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default AllProducts;
