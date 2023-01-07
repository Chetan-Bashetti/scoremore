import React from 'react';
import { Typography } from 'antd';

// CSS
import '../../assets/css/Kpis.css';

const { Text } = Typography;

const Kpis: React.FC = () => {
	return (
		<div className='kpi-wrapper'>
			<Text className='auth-title-typography'>Kpis</Text>
		</div>
	);
};

export default Kpis;
