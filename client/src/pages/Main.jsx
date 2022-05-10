import React from 'react';
import AllProducts from '../components/AllProducts';
import CreateForm from '../components/CreateForm';

const Main = () => {
	return (
		<main className='max-w-2xl mx-auto my-8'>
			<CreateForm />
			<AllProducts />
		</main>
	);
};

export default Main;
