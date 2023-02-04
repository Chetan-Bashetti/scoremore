import React from 'react';
import { useLocation } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import '../../assets/css/Header.css';

interface Props {
	setIsOpen: Function;
	isOpen: boolean;
}

const Header: React.FC<Props> = ({ setIsOpen, isOpen }) => {
	const location = useLocation();
	return (
		<div className='header-wrapper'>
			<div className='header-page-info'>
				{location.pathname === '/auth'
					? 'Dashboard'
					: location.pathname.split('/auth')[1]}
			</div>
			<div className='header-icon-holder'>
				{isOpen ? (
					<CloseOutlined
						style={{ fontSize: '1.5em' }}
						onClick={() => setIsOpen()}
					/>
				) : (
					<MenuOutlined
						style={{ fontSize: '1.5em' }}
						onClick={() => setIsOpen()}
					/>
				)}
			</div>
			<div className='sidebar-profile'>
				<img
					className='user-image'
					src={require('../../assets/images/man.jpeg')}
					alt='user-placeholder'
				/>
				<div className='user-greetings'>
					<div>
						Welcome, <span className='user-name'>Chetan</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
