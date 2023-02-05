import React from 'react';
import '../../assets/css/Text.css';

interface Props {
	text: string;
	bold?: boolean;
}

const HeadingText: React.FC<Props> = ({ text, bold }) => {
	return <div className={bold ? 'header-all bold' : 'header-all'}>{text}</div>;
};
export default HeadingText;
