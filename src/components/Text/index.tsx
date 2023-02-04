import React from 'react';
import '../../assets/css/Text.css';

interface Props {
	text: string;
}

const HeadingText: React.FC<Props> = ({ text }) => {
	return <div className='header-all'>{text}</div>;
};
export default HeadingText;
