import React from 'react';
import { useLocation } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';

//CSS
import '../../assets/css/Sidebar.css';
import CustomLink from '../Link';

interface EachRote {
	pathName: string;
	link: string;
	text: string;
}
interface Props {
	setIsOpen?: Function;
	mode?: string;
	routes: EachRote[];
}

const Sidebar: React.FC<Props> = ({ setIsOpen, mode, routes }) => {
	const location = useLocation();
	return (
		<div
			className='sidebar-container'
			style={{ background: mode === 'landing' ? '#f7f6f4' : 'white' }}
		>
			<div
				className='sidebar-close-wrapper'
				onClick={() => setIsOpen && setIsOpen()}
			>
				<CloseOutlined className='close-icon' />
			</div>
			<div className='logo-text'>ScoreMore.com</div>
			<div className='routes'>
				{routes.map((eachLink, id) => (
					<div
						className={
							location.pathname === eachLink.pathName ? 'route active' : 'route'
						}
						onClick={() => setIsOpen && setIsOpen()}
					>
						<CustomLink
							link={eachLink.link}
							text={eachLink.text}
							style={{
								margin: '0px',
								width: '-webkit-fill-available',
								color:
									location.pathname === eachLink.pathName ? 'white' : 'black',
								padding: '1em'
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
