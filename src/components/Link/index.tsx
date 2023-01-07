import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Link.css';

interface Props {
	link: string;
	text: string;
	style?: object;
}

const CustomLink: React.FC<Props> = ({ text, link, style }) => {
	return (
		<Link to={link} className='auth-link' style={style}>
			{text}
		</Link>
	);
};

export default CustomLink;
