import React from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import '../../assets/css/Header.css';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';

interface Props {
	setIsOpen: Function;
	isOpen: boolean;
}

const Header: React.FC<Props> = ({ setIsOpen, isOpen }) => {
	const {
		userData
	}: {
		isLoggedIn: boolean;
		userData: any;
	} = useIsLoggedIn();

	return (
		<div className='header-wrapper'>
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
						Welcome, <span className='user-name'>{userData.userName}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
