import { Button, Input } from 'antd';
import { useState } from 'react';
import '../../assets/css/LandingPageStyles/Contactus.css';
import HeadingText from '../Text';

const Contactus = () => {
	const [name, setName] = useState<string>('');

	const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleSendMessage = () => {
		window.open(
			`https://wa.me/+919060003573?text=Hi, this is ${name}, I wanted to raise a query`,
			'_blank'
		);
	};

	return (
		<div className='contact-us-main' id='landing-contact-us'>
			<div style={{ margin: '2em 0' }}>
				<HeadingText text='Conatct us' />
			</div>
			<div className='form-wrapper'>
				<Input
					className='message-input'
					value={name}
					onChange={(e) => handleMessage(e)}
					placeholder='enter your name here'
				/>
				<Button
					type='primary'
					className='send-button'
					onClick={() => handleSendMessage()}
					disabled={name === ''}
				>
					Send
				</Button>
			</div>
		</div>
	);
};
export default Contactus;
