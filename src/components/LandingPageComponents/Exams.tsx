import HeadingText from '../Text';
import '../../assets/css/LandingPageStyles/Exams.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const exams = [
	{
		examId: '123asdhkh123kh123',
		thumb: 'gk.jpeg',
		title: 'General knowladge',
		prize: '1200',
		desc: 'Includes general knowladge questions'
	},
	{
		examId: '123asdhk6666h123kh123',
		thumb: 'it.webp',
		title: 'Information technology',
		prize: '1200',
		desc: 'Includes general knowladge questions'
	},
	{
		examId: '123asdhk132h123kh123',
		thumb: 'history.jpeg',
		title: 'General knowladge',
		prize: '1200',
		desc: 'Includes general knowladge questions'
	},
	{
		examId: '123asdhkhqqqqsdf123kh123',
		thumb: 'ca.webp',
		title: 'Current affairs',
		prize: '1200',
		desc: 'Includes general knowladge questions'
	}
];

const Exams = () => {
	return (
		<div className='exams-main'>
			<div style={{ margin: '2em 0' }}>
				<HeadingText text='Exams' />
			</div>
			<div className='exams-list'>
				{exams.map((eachExam) => (
					<div className='exam' key={eachExam.examId}>
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
						<Link to={`/auth/exam/${eachExam.examId}`}>
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
