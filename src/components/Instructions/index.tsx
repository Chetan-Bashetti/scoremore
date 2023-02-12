const Instructions: React.FC = () => {
	return (
		<div className='instructions'>
			<div className='instructions-wrapper'>
				<div className='exam-title'>Instructions</div>
				<ol>
					<li style={{ margin: '0.9em 0', fontSize: '0.8em' }}>
						Exam starts at 10:00 PM on 8th Jan, Kindly visit the page at the
						same time.
					</li>
					<li style={{ margin: '0.9em 0', fontSize: '0.8em' }}>
						Pay 10 rupees and stay on same page (apprximately for 10 seconds for
						some people).
					</li>
					<li style={{ margin: '0.9em 0', fontSize: '0.8em' }}>
						On successful payment, you will be redirected to question papers.
					</li>
					<li style={{ margin: '0.9em 0', fontSize: '0.8em' }}>
						Answer all questions and submit before 10:30 PM (30 minutes for 20
						questions).
					</li>
					<li style={{ margin: '0.9em 0', fontSize: '0.8em' }}>
						You will receive your results on your WhatsApp number at the earlist
						& Top 3 scorers will get mega prizes [Other scorers will be awarded
						with monetory rewards as per their ranking).
					</li>
					<li style={{ margin: '0.9em 0', fontSize: '0.8em' }}>
						For more information please contact us on Chetan: 8495011619,
						Prasad: 9060003575
					</li>
				</ol>
			</div>
		</div>
	);
};

export default Instructions;
