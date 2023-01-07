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
				<Text className='auth-title-typography'>Welcome to Scoremore.com</Text>
				<Text className='auth-sub-typography'>Register to know more</Text>
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
				<Input
					className='auth-textfield'
					size='large'
					placeholder='Confirm your password'
					prefix={<UnlockOutlined />}
					type='password'
				/>
				<Link to='/login'>
					<Button type='primary' className='auth-btn'>
						Sign up
					</Button>
				</Link>

				<div className='auth-footer'>
					<Text className='auth-sub-typography text'>
						Already have an account?
					</Text>
					<CustomLink link='/login' text='Login' />
				</div>
			</div>
		</div>
	);
};

export default Signup;
