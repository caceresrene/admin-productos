import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';

const CreateForm = () => {
	let navigate = useNavigate();

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { data } = await axios.post('http://localhost:8000/api/products', {
			name,
			price,
			description,
		});
		navigate(`/${data._id}`);
	};

	return (
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
				Create
			</button>
		</form>
	);
};

export default CreateForm;
