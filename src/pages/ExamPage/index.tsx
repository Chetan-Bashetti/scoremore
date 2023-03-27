import React from 'react';
import { Button } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../assets/css/ExamPage.css';
import { PlayCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Loading from '../../components/Loading';
import Instructions from '../../components/Instructions';

const configValue: string = process.env.RAZORPAY_API_KEY as string;

const ExamPage = () => {
	const [days, setDays] = React.useState<string>('');
	const [hours, setHours] = React.useState<string>('');
	const [minutes, setMinutes] = React.useState<string>('');
	const [seconds, setSeconds] = React.useState<string>('');
	const [isTimer, setTimer] = React.useState<boolean>(false);
	const [loader, setLoader] = React.useState(false);
	const [isInfoVisisble, setIsInfoVisible] = React.useState(false);
	const { id } = useParams();

	React.useEffect(() => {
		setLoader(true);
		var countDownDate = new Date('Feb 15, 2023 22:00:00').getTime();

		// Update the count down every 1 second
		var timer = setInterval(function () {
			// Get today's date and time
			var now = new Date().getTime();

			// Find the distance between now and the count down date
			var distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			var totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
			var totalHours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var totalMinutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			var totalSeconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Output the result in an element with id="demo"
			if (distance > 0) {
				if (totalDays.toString().length === 1) {
					let allDays = '0' + totalDays;
					setDays(allDays);
				} else {
					setDays(checkIsSingleVal(totalDays));
				}
				setHours(checkIsSingleVal(totalHours));
				setMinutes(checkIsSingleVal(totalMinutes));
				setSeconds(checkIsSingleVal(totalSeconds));
				setTimer(true);
				setLoader(false);
			}
			// If the count down is over, write some text
			if (distance < 0) {
				clearInterval(timer);
				setTimer(false);
				setLoader(false);
			}
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	const checkIsSingleVal = (val: number): string => {
		if (val.toString().length === 1) {
			return '0' + val;
		} else {
			return val.toString();
		}
	};

	const chekoutHandler = async (amount: number) => {
		let {
			data: { orderDetails }
		} = await axios.post('http://localhost:8080/api/checkout', {
			amount: amount
		});
		console.log(orderDetails);

		const options = {
			key_id: configValue, // Enter the Key ID generated from the Dashboard
			amount: orderDetails.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			currency: 'INR',
			name: 'Chetan Bashetti',
			description: 'Test Transaction',
			image:
				'https://avatars.githubusercontent.com/u/61494015?s=400&u=20edbd01dbd904f9b856b045443ba6d695a7c996&v=4',
			order_id: orderDetails.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			handler: (response: object) => {
				console.log(response, 'respones');
				axios.post('http://localhost:8080/api/makePayment', {
					data: { ...response, exam_id: id }
				});
			},
			hidden: {
				contact: false,
				email: true
			},
			prefill: {
				name: 'Chetan Bashetti',
				email: 'chetankb619@gmail.com',
				contact: '8495011619'
			},
			notes: {
				address: 'Tecnacy Office'
			},
			theme: {
				color: '#172570'
			}
		};
		var rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	return loader ? (
		<Loading />
	) : (
		<div className='exam-page-main'>
			<div className='exam-details-wrapper'>
				<div className='exam'>
					<div className='exam-details'>
						<img
							src={require('../../assets/images/history.jpeg')}
							alt='exam-thumb'
							className='exam-thum-image'
						/>
						<div className='exam-title-info'>
							<div className='exam-title'>Exam title</div>
							<div className='exam-desc'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
								mollitia, molestiae quas vel sint commodi repudiandae
								consequuntur voluptatum laborum numquam blanditiis harum
								quisquam eius sed odit fugiat iusto fuga praesentium optio,
								eaque rerum! Provident similique accusantium nemo autem.
								Veritatis obcaecati tenetur iure eius earum ut molestias
								architecto voluptate aliquam nihil, eveniet aliquid culpa
								officia aut! Impedit sit sunt quaerat
							</div>
							<div className='exam-actions'>
								<div>
									{isTimer ? (
										<div>
											<div className='exam-calander'>Exam starts in</div>
											<div className='exam-timer'>
												{days?.length > 0 ? (
													<div className='each-ticker'>
														<div className='ticker'>{days}</div>
														<div className='ticker-label'>days</div>
													</div>
												) : (
													''
												)}
												<div className='ticker-saperate'>:</div>
												<div className='each-ticker'>
													<div className='ticker'>{hours}</div>
													<div className='ticker-label'>hours</div>
												</div>
												<div className='ticker-saperate'>:</div>
												<div className='each-ticker'>
													<div className='ticker'>{minutes}</div>
													<div className='ticker-label'>min</div>
												</div>
												<div className='ticker-saperate'>:</div>
												<div className='each-ticker'>
													<div className='ticker'>{seconds}</div>
													<div className='ticker-label'> secs</div>
												</div>
											</div>
										</div>
									) : (
										<div></div>
									)}
								</div>
								<div className='exam-button-actions'>
									<Button
										type='primary'
										disabled={isTimer}
										style={{ height: '65%' }}
										onClick={() => chekoutHandler(1)}
									>
										<PlayCircleOutlined />
										Paynow
									</Button>
									<div className='exam-button-info'>
										<InfoCircleOutlined style={{ fontSize: '0.6em' }} />
										<div className='exam-note'>
											Link will be available once timer is disabled and payment
											is recieved
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='inst-wrap'>
				{isInfoVisisble ? <Instructions /> : ''}
				<div className='inst-actions'>
					<div className='inst-text'>Instructions</div>

					<Button
						className='info-button'
						onMouseOver={() => setIsInfoVisible(true)}
						onMouseOut={() => setIsInfoVisible(false)}
						style={{}}
					>
						<InfoCircleOutlined />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ExamPage;
