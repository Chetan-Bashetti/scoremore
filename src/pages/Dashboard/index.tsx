import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../Home/index'));
const Login = React.lazy(() => import('../Login/index'));
const Signup = React.lazy(() => import('../Signup/index'));
const Kpis = React.lazy(() => import('../Kpis/index'));
const Exams = React.lazy(() => import('../Exam/index'));

const Loading = () => <p>Loading ...</p>;
const Dashboard = () => {
	return (
		<React.Suspense fallback={<Loading />}>
			<Routes>
				<Route path='/' element={<Home />}>
					<Route index element={<Kpis />} />
					<Route path='exams' element={<Exams />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</React.Suspense>
	);
};
export default Dashboard;
