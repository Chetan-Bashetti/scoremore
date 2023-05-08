import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../NotFound';

import Home from '../Home/index';
import Login from '../Login/index';
import Signup from '../Signup/index';
import Kpis from '../Kpis/index';
import Exams from '../Exam/index';
import LandingPage from '../LandingPage';
import ExamPage from '../ExamPage/index';

const Dashboard = () => {
	return (
		<Routes>
			<Route path='/auth' element={<Home />}>
				<Route index element={<Kpis />} />
				<Route path='exams' element={<Exams />} />
				<Route path='exam/:id' element={<ExamPage />} />
			</Route>
			<Route path='/' element={<LandingPage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};
export default Dashboard;
