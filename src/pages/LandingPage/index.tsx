import React from 'react';
// import Sidebar from '../../components/Sidebar';
import '../../assets/css/LandingPage.css';
import Loading from '../../components/Loading';

const Sidebar = React.lazy(() => import('../../components/Sidebar'));

const LandingHeader = React.lazy(
	() => import('../../components/LandingPageComponents/LandingHeader')
);
const Exams = React.lazy(
	() => import('../../components/LandingPageComponents/Exams')
);
const Winners = React.lazy(
	() => import('../../components/LandingPageComponents/Winners')
);
const LeaderBoard = React.lazy(
	() => import('../../components/LandingPageComponents/LeaderBoard')
);
const Footer = React.lazy(
	() => import('../../components/LandingPageComponents/Footer')
);
const Contactus = React.lazy(
	() => import('../../components/LandingPageComponents/Contactus')
);

const LandingPage = () => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const resetSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<React.Suspense fallback={<Loading />}>
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
					<Exams isAuth={false} />
					<Winners />
					<LeaderBoard />
					<Contactus />
					<Footer />
				</div>
			</div>
		</React.Suspense>
	);
};

export default LandingPage;
