import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

//CSS
import '../../assets/css/Home.css';

const Exam = React.lazy(() => import('../Exam/index'));
const Kpis = React.lazy(() => import('../Kpis/index'));

const Loading = () => <p>Loading ...</p>;
const Home = () => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	return (
		<React.Suspense fallback={<Loading />}>
			<div className='home-wrapper'>
				<div className='sidebar-wrapper'>
					<Sidebar />
				</div>
				{isOpen ? (
					<div className='sidebar-wrapper-mob'>
						<Sidebar setIsOpen={() => setIsOpen(false)} />
					</div>
				) : (
					''
				)}
				<div className='main-routes'>
					<div className='user-info-bar'>
						<Header isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
					</div>
					<div className='routes-wrapper'>
						<Routes>
							<Route path='/' element={<Kpis />} />
							<Route path='/exams' element={<Exam />} />
						</Routes>
					</div>
				</div>
			</div>
		</React.Suspense>
	);
};
export default Home;
