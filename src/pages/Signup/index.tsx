import React from 'react';
import {
	UserOutlined,
	UnlockOutlined,
	PhoneOutlined,
	MailOutlined
} from '@ant-design/icons';
import { Input, Button, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';

// CSS
import '../../assets/css/Auth.css';
import CustomLink from '../../components/Link';
import axios from 'axios';

const { Text } = Typography;

const Signup: React.FC = () => {
	const [messageApi, contextHolder] = message.useMessage();
	let navigate = useNavigate();

	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');

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

	const handleSignUp = async () => {
		let isValid = true;
		if (name === '') {
			isValid = false;
			error('User name is mandatory');
			return;
		}

		if (email === '') {
			isValid = false;
			error('Email is mandatory');
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

		if (phone === '') {
			error('Phone is mandatory');
			isValid = false;
			return;
		}

		if (phone.length < 9) {
			error('Invalid phone Number');
			isValid = false;
			return;
		}

		if (password === '') {
			error('Password is mandatory');
			isValid = false;
			return;
		}

		if (password !== confirmPassword) {
			error('Password does not match');
			isValid = false;
			return;
		}

		if (isValid) {
			try {
				let res = await axios.post('http://localhost:8080/user/register', {
					userName: name,
					email,
					phone,
					password,
					isAdmin: false
				});
				success('User added successfully');
				navigate('/login');
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
				<Text className='auth-sub-typography'>Register to know more</Text>
				<Input
					className='auth-textfield'
					size='large'
					placeholder='Enter your Name'
					prefix={<UserOutlined />}
					value={name}
					onChange={(e) => handleOnChange(e, setName)}
				/>
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
					placeholder='Enter your Phone number'
					prefix={<PhoneOutlined />}
					value={phone}
					maxLength={10}
					onChange={(e) => {
						const reg = new RegExp('^[0-9]+$');
						if (reg.test(e.target.value)) {
							handleOnChange(e, setPhone);
						} else {
							setPhone('');
						}
					}}
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
				<Input
					className='auth-textfield'
					size='large'
					placeholder='Confirm your password'
					prefix={<UnlockOutlined />}
					type='password'
					value={confirmPassword}
					onChange={(e) => handleOnChange(e, setConfirmPassword)}
				/>

				<Button
					type='primary'
					className='auth-btn'
					onClick={() => handleSignUp()}
				>
					Sign up
				</Button>

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
