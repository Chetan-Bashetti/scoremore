import React from 'react';
import { useLocation } from 'react-router-dom';

//CSS
import '../../assets/css/Sidebar.css';
import CustomLink from '../Link';

interface Props {
	setIsOpen?: Function;
}

const Sidebar: React.FC<Props> = ({ setIsOpen }) => {
	const location = useLocation();
	return (
		<div className='sidebar-container'>
			<div className='logo-text'>Scoremore.com</div>
			<div className='routes'>
				<div
					className={location.pathname === '/' ? 'route active' : 'route'}
					onClick={() => setIsOpen && setIsOpen()}
				>
					<CustomLink
						link='/'
						text='Dashboard'
						style={{
							margin: '0px',
							width: '-webkit-fill-available',
							color: location.pathname === '/' ? 'white' : 'black',
							padding: '1em'
						}}
					/>
				</div>
				<div
					className={location.pathname === '/exams' ? 'route active' : 'route'}
					onClick={() => setIsOpen && setIsOpen()}
				>
					<CustomLink
						link='/exams'
						text='Exams'
						style={{
							margin: '0px',
							width: '-webkit-fill-available',
							color: location.pathname === '/exams' ? 'white' : 'black',
							padding: '1em'
						}}
					/>
				</div>
				<div className='route'>
					<CustomLink
						link='/login'
						text='Logout'
						style={{
							margin: '0px',
							width: '-webkit-fill-available',
							padding: '1em',
							color: 'black'
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
