import React from 'react';
import { Button } from 'antd';
// import { useParams } from 'react-router-dom';
import '../../assets/css/ExamPage.css';
import { PlayCircleOutlined } from '@ant-design/icons';

const ExamPage = () => {
	const [days, setDays] = React.useState<string>('');
	const [hours, setHours] = React.useState<string>('');
	const [minutes, setMinutes] = React.useState<string>('');
	const [seconds, setSeconds] = React.useState<string>('');
	const [isTimer, setTimer] = React.useState<boolean>(false);
	// const { id } = useParams();

	React.useEffect(() => {
		var countDownDate = new Date('Feb 8, 2023 22:00:00').getTime();

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
			}
			// If the count down is over, write some text
			if (distance < 0) {
				clearInterval(timer);
				setTimer(false);
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
	return (
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
									) : (
										<div>write the exa</div>
									)}
								</div>
								<div>
									<Button type='primary' disabled={isTimer}>
										<PlayCircleOutlined />
										Start the test
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='instructions'>
				<div className='instructions-wrapper'>
					<div className='exam-title'>Instructions</div>
					<ol>
						<li style={{ margin: '0.5em 0' }}>
							Exam starts at 10:00 PM on 8th Jan, Kindly visit the page at the
							same time.
						</li>
						<li style={{ margin: '0.5em 0' }}>
							Pay 10 rupees and stay on same page (apprximately for 10 seconds
							for some people).
						</li>
						<li style={{ margin: '0.5em 0' }}>
							On successful payment, you will be redirected to question papers.
						</li>
						<li style={{ margin: '0.5em 0' }}>
							Answer all questions and submit before 10:30 PM (30 minutes for 20
							questions).
						</li>
						<li style={{ margin: '0.5em 0' }}>
							You will receive your results on your WhatsApp number at the
							earlist & Top 3 scorers will get mega prizes [Other scorers will
							be awarded with monetory rewards as per their ranking).
						</li>
						<li style={{ margin: '0.5em 0' }}>
							For more information please contact us on Chetan: 8495011619,
							Prasad: 9060003575
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default ExamPage;
