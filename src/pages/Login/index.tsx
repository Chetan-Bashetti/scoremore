import React from 'react';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import { Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

// CSS
import '../../assets/css/Auth.css';
import CustomLink from '../../components/Link';

const { Text } = Typography;

const Signup: React.FC = () => {
	return (
		<div className='auth-wrapper'>
			<div className='auth-components'>
				<Text className='auth-title-typography'>Welcome to ScoreMore.com</Text>
				<Text className='auth-sub-typography'>Login to explore more</Text>
				<Input
					className='auth-textfield'
					size='large'
					placeholder='Enter your email'
					prefix={<UserOutlined />}
				/>
				<Input
					className='auth-textfield'
					size='large'
					placeholder='Enter your password'
					prefix={<UnlockOutlined />}
					type='password'
				/>
				<Link to='/'>
					<Button type='primary' className='auth-btn'>
						Login
					</Button>
				</Link>

				<div className='auth-footer'>
					<Text className='auth-sub-typography text'>
						Dosen't have an account?
					</Text>
					<CustomLink link='/signup' text='Sign up' />
				</div>
			</div>
		</div>
	);
};

export default Signup;
