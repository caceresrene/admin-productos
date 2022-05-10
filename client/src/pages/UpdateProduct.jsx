import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
	let navigate = useNavigate();
	const { id } = useParams();

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		const apiCall = async () => {
			const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);
			setName(data.name);
			setPrice(data.price);
			setDescription(data.description);
		};
		apiCall();
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();
		await axios.put(`http://localhost:8000/api/products/${id}`, {
			name,
			price,
			description,
		});
		navigate('/');
	};

	return (
		<main className='max-w-2xl mx-auto my-8'>
			<form className='flex flex-col items-center gap-2' onSubmit={handleSubmit}>
				<h1 className='font-bold text-2xl'>Product Manager</h1>
				<div className='space-x-4'>
					<label htmlFor='name'>Name</label>
					<input
						className='border border-gray-500 rounded px-1'
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='space-x-4'>
					<label htmlFor='price'>price</label>
					<input
						className='border border-gray-500 rounded px-1'
						type='number'
						name='price'
						id='price'
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<textarea
					className='p-2 border border-gray-500 rounded'
					name='description'
					id='description'
					cols='30'
					rows='10'
					placeholder='description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
				<button className='border border-gray-500 rounded w-64 hover:bg-gray-500 hover:text-white'>
					Update
				</button>
			</form>
			<div className='text-center my-4'>
				<a className='hover:cursor-pointer underline' onClick={() => navigate('/')}>
					go back
				</a>
			</div>
		</main>
	);
};

export default UpdateProduct;
