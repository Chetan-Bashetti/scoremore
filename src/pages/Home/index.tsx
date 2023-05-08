import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

//CSS
import '../../assets/css/NotFound.css';
import '../../assets/css/Home.css';

import useIsLoggedIn from '../../hooks/useIsLoggedIn';
import Loading from '../../components/Loading';
import { Button } from 'antd';

const Exam = React.lazy(() => import('../Exam/index'));
const Kpis = React.lazy(() => import('../Kpis/index'));
const ExamPage = React.lazy(() => import('../ExamPage/index'));

const Home = () => {
	const { isLoading, isLoggedIn } = useIsLoggedIn();

	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const [isValidUser, setIsValidUser] = React.useState(false);

	let navigate = useNavigate();

	React.useEffect(() => {
		setIsValidUser(isLoggedIn);
	}, [isLoggedIn]);

	const authinticateUser = () => {
		navigate('/login');
	};

	return (
		<React.Suspense fallback={<Loading />}>
			{isLoading ? (
				<Loading />
			) : (
				<div className='home-wrapper'>
					{isValidUser ? (
						<div className='home-wrapper'>
							<div className='sidebar-wrapper'></div>
							{isOpen ? (
								<div className='sidebar-wrapper-mob'>
									<Sidebar
										setIsOpen={() => setIsOpen(false)}
										routes={[
											{
												text: 'Dashboard',
												pathName: '/auth',
												link: '/auth'
											},
											{
												text: 'Exams',
												pathName: '/exams',
												link: 'exams'
											},
											{
												text: 'Log out',
												pathName: '/login',
												link: '/login'
											}
										]}
									/>
								</div>
							) : (
								''
							)}
							<div className='main-routes'>
								<div className='user-info-bar'>
									<Header
										isOpen={isOpen}
										setIsOpen={() => setIsOpen(!isOpen)}
									/>
								</div>
								<div className='routes-wrapper'>
									<Routes>
										<Route path='/' index element={<Kpis />} />
										<Route path='exams' element={<Exam />} />
										<Route path='/exam/:id' element={<ExamPage />} />
									</Routes>
								</div>
							</div>
						</div>
					) : (
						<div className='login-warning'>
							<div className='warning-text'>
								You are not authorized to view this page! Please login
							</div>
							<Button
								onClick={() => authinticateUser()}
								type='primary'
								className='auth-btn'
								style={{ width: 100 }}
							>
								Login
							</Button>
						</div>
					)}
				</div>
			)}
		</React.Suspense>
	);
};
export default Home;
