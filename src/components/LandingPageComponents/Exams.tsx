import HeadingText from '../Text';
import '../../assets/css/LandingPageStyles/Exams.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const exams = [
	{
		thumb: 'gk.jpeg',
		title: 'General knowladge',
		prize: '1200',
		desc: 'Includes general knowladge questions'
	},
	{
		thumb: 'it.webp',
		title: 'Information technology',
		prize: '1200',
		desc: 'Includes general knowladge questions'
	},
	{
		thumb: 'history.jpeg',
		title: 'General knowladge',
		prize: '1200',
		desc: 'Includes general knowladge questions'
	},
	{
		thumb: 'ca.webp',
		title: 'Current affairs',
		prize: '1200',
		desc: 'Includes general knowladge questions'
	}
];

const Exams = () => {
	return (
		<div className='exams-main'>
			<HeadingText text='Exams' />
			<div className='exams-list'>
				{exams.map((eachExam, id) => (
					<div className='exam' key={id}>
						<img
							src={require(`../../assets/images/${eachExam.thumb}`)}
							alt={eachExam.title}
							className='exam-image'
						/>
						<div className='exam-prizing'>
							<div className='exam-title'>{eachExam.title}</div>
							<div className='exam-fees'>₹ {eachExam.prize}/- </div>
						</div>
						<div className='exam-desc'>{eachExam.desc}</div>
						<Link to='/'>
							<Button
								type='primary'
								className='auth-btn'
								style={{ width: '100%', fontWeight: 600 }}
							>
								Start now
							</Button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Exams;
