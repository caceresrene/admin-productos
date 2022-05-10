import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import Product from './pages/Product';
import UpdateProduct from './pages/UpdateProduct';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/:id' element={<Product />} />
				<Route path='/edit/:id' element={<UpdateProduct />} />
			</Routes>
		</Router>
	);
}

export default App;
