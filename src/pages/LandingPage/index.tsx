import React from 'react';
import Sidebar from '../../components/Sidebar';
import '../../assets/css/LandingPage.css';

const LandingHeader = React.lazy(
	() => import('../../components/LandingPageComponents/LandingHeader')
);
const Cources = React.lazy(
	() => import('../../components/LandingPageComponents/Exams')
);
const Winners = React.lazy(
	() => import('../../components/LandingPageComponents/Winners')
);
const LeaderBoard = React.lazy(
	() => import('../../components/LandingPageComponents/LeaderBoard')
);

const LandingPage = () => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const resetSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='ladingpage-wrapper'>
			{isOpen ? (
				<div className='sidebar-wrapper-mob'>
					<Sidebar
						setIsOpen={resetSidebar}
						mode='landing'
						routes={[
							{
								text: 'Login',
								pathName: '/login',
								link: 'login'
							},
							{
								text: 'Sign up',
								pathName: '/login',
								link: '/signup'
							}
						]}
					/>
				</div>
			) : (
				''
			)}
			<div
				style={{
					display: 'flex',
					flex: 1,
					flexDirection: 'column',
					width: '100%',
					overflowX: 'hidden'
				}}
			>
				<LandingHeader setIsOpen={resetSidebar} />
				<Cources />
				<Winners />
				<LeaderBoard />
			</div>
		</div>
	);
};

export default LandingPage;
