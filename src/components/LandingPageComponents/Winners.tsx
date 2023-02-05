import HeadingText from '../Text';
import '../../assets/css/LandingPageStyles/Winners.css';

const winners = [
	{
		thumb: 'chetan-kb.jpg',
		name: 'Chetan Bashetti',
		rank: '1st'
	},
	{
		thumb: 'prasadk.png',
		name: 'Prasad Kumbar',
		rank: '2nd'
	},
	{
		thumb: 'akashkb.png',
		name: 'Akash Bashetti',
		rank: '3rd'
	},
	{
		thumb: 'man.jpeg',
		name: 'Pramod Kumbar',
		rank: '4th'
	},
	{
		thumb: 'man.jpeg',
		name: 'Ajit K',
		rank: '5th'
	},
	{
		thumb: 'man.jpeg',
		name: 'Raghu S',
		rank: '6th'
	},
	{
		thumb: 'man.jpeg',
		name: 'Ganesh Achar',
		rank: '7th'
	},
	{
		thumb: 'man.jpeg',
		name: 'Ankit Hegde',
		rank: '8th'
	},
	{
		thumb: 'man.jpeg',
		name: 'Palak Trivedi',
		rank: '9th'
	},
	{
		thumb: 'man.jpeg',
		name: 'Akash Kadiya',
		rank: '10th'
	}
];

const Winners = () => {
	return (
		<div className='winners-main'>
			<div style={{ margin: '2em 0' }}>
				<HeadingText text='Winners' />
			</div>
			<div className='winners-list'>
				{winners.slice(0, 3).map((eacWinner, id) => (
					<div className='winner' key={id}>
						<img
							src={require(`../../assets/images/${eacWinner.thumb}`)}
							alt={eacWinner.name}
							className='winner-image'
						/>
						<div className='winner-prizing'>
							<div className='winner-name'>{eacWinner.name}</div>
							<div className='winner-fees'>{eacWinner.rank}</div>
						</div>
					</div>
				))}
			</div>
			<div className='winners-list'>
				{winners.slice(3, winners.length).map((eacWinner, id) => (
					<div className='winner-sub' key={id}>
						<img
							src={require(`../../assets/images/${eacWinner.thumb}`)}
							alt={eacWinner.name}
							className='winner-image-sub'
						/>
						<div className='winner-prizing'>
							<div className='winner-name-sub'>{eacWinner.name}</div>
							<div className='winner-fees-sub'>{eacWinner.rank}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Winners;
