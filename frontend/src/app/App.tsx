import { Center, Spinner, Text, VStack } from '@chakra-ui/react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Add from '../pages/Add'
import Login from '../pages/login'
import Profile from 'pages/Profile';
import Signup from 'pages/Signup';

const App = (): JSX.Element => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/add-obj' element={<Add />}/>
				<Route path="/profile" element={<Profile />}/>
				<Route path="/profile/signup" element={<Signup />}/>
				<Route path="/profile/login" element={<Login />}/>
			</Routes>
		</BrowserRouter>
	</>
);

export default App;
