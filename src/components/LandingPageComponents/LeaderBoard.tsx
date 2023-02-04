import HeadingText from '../Text';
import '../../assets/css/LandingPageStyles/LeaderBoard.css';
import '../../assets/css/LandingPageStyles/Winners.css';

const LeaderBoard = () => {
	return (
		<div className='leader-board-main'>
			<div className='leader-board-heading'>
				<HeadingText text='Leader board' />
			</div>
			<div className='leader-board-wrapper'>
				<div className='each-board'>
					<div className='board'>
						<div className='board-details'>
							<div>
								<img
									src={require('../../assets/images/prasadk.png')}
									alt='user'
									className='winner-image-sub'
								/>
							</div>
							<div className='winner-name-sub'>Prasad Kumbar</div>
						</div>
						<div className='rank rank2'>2</div>
					</div>
				</div>
				<div className='each-board'>
					<div className='board'>
						<div className='board-details'>
							<div>
								<img
									src={require('../../assets/images/chetan-kb.jpg')}
									alt='user'
									className='winner-image-sub'
								/>
							</div>
							<div className='winner-name-sub'>Chetan Bashetti</div>
						</div>
						<div className='rank rank1'>1</div>
					</div>
				</div>
				<div className='each-board'>
					<div className='board'>
						<div className='board-details'>
							<div>
								<img
									src={require('../../assets/images/akashkb.png')}
									alt='user'
									className='winner-image-sub'
								/>
							</div>
							<div className='winner-name-sub'>Akash Bashetti</div>
						</div>
						<div className='rank rank3'>3</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeaderBoard;
