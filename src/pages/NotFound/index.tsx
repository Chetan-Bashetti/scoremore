import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/css/NotFound.css';

const { Text } = Typography;

const NotFound = () => {
	return (
		<div className='not-found-wrapper'>
			<Text className='basic-header'>Sorry invalid search key !!</Text>
			<Link to='/'>
				<Button type='primary' className='auth-btn'>
					Home
				</Button>
			</Link>
		</div>
	);
};
export default NotFound;
