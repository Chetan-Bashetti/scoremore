import React from 'react';
import { UnlockOutlined, MailOutlined } from '@ant-design/icons';
import { Input, Button, Typography, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// CSS
import '../../assets/css/Auth.css';
import CustomLink from '../../components/Link';

const { Text } = Typography;

const Signup: React.FC = () => {
	const [messageApi, contextHolder] = message.useMessage();
	let navigate = useNavigate();

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const success = (content: string) => {
		messageApi.open({
			type: 'success',
			content
		});
	};

	const error = (content: string) => {
		messageApi.open({
			type: 'error',
			content
		});
	};

	const handleOnChange = (
		e: React.ChangeEvent<{ value: unknown }>,
		setState: any
	) => {
		let value: string = e.target.value as string;
		setState(value);
	};

	const handleLogin = async () => {
		let isValid = true;
		if (email === '') {
			isValid = false;
			error('Email is mandatory');
			return;
		}

		if (email.length) {
			let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
			if (regex.test(email)) {
				isValid = true;
			} else {
				isValid = false;
				error('Invalid Email');
				return;
			}
		}

		if (password === '') {
			error('Password is mandatory');
			isValid = false;
			return;
		}
		if (isValid) {
			try {
				let res = await axios.post('http://localhost:8080/user/login', {
					email,
					password
				});
				success('User added successfully');
				localStorage.setItem('user', JSON.stringify(res.data));
				navigate('/auth');
			} catch (e: any) {
				error(e?.response?.data?.message);
			}
		}
	};

	return (
		<div className='auth-wrapper'>
			{contextHolder}
			<div className='auth-components'>
				<Text className='auth-title-typography'>Welcome to ScoreMore.com</Text>
				<Text className='auth-sub-typography'>Login to explore more</Text>
				<Input
					className='auth-textfield'
					size='large'
					placeholder='Enter your email'
					prefix={<MailOutlined />}
					value={email}
					onChange={(e) => handleOnChange(e, setEmail)}
				/>
				<Input
					className='auth-textfield'
					size='large'
					placeholder='Enter your password'
					prefix={<UnlockOutlined />}
					type='password'
					value={password}
					onChange={(e) => handleOnChange(e, setPassword)}
				/>
				<Button
					type='primary'
					className='auth-btn'
					onClick={() => handleLogin()}
				>
					Login
				</Button>
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
