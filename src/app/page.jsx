import Hero from '@/components/Hero';
import Products from '@/components/Products';
import React from 'react';

const HomePage = () => {
	return (
		<div className='container'>
			<Hero />
			<Products />
		</div>
	);
};

export default HomePage;
