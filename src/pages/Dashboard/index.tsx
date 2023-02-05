import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../NotFound';

const Home = React.lazy(() => import('../Home/index'));
const Login = React.lazy(() => import('../Login/index'));
const Signup = React.lazy(() => import('../Signup/index'));
const Kpis = React.lazy(() => import('../Kpis/index'));
const Exams = React.lazy(() => import('../Exam/index'));
const LandingPage = React.lazy(() => import('../LandingPage/index'));
const ExamPage = React.lazy(() => import('../ExamPage/index'));
const Loading = React.lazy(() => import('../../components/Loading/index'));
const Dashboard = () => {
	return (
		<React.Suspense fallback={<Loading />}>
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
		</React.Suspense>
	);
};
export default Dashboard;
