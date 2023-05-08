import HeadingText from '../Text';
import '../../assets/css/LandingPageStyles/Exams.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading';

type ExamProps = {
	isAuth: boolean;
};

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

type ExamData = {
	name: string;
	price: string;
	type: string;
	_id: string;
	expireDateTime: string;
	description: string;
};

const Exams: React.FC<ExamProps> = ({ isAuth }) => {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [allExams, setAllExams] = React.useState<ExamData[]>([]);
	useEffect(() => {
		setIsLoading(true);
		getUser();
	}, []);

	const getUser = async () => {
		try {
			let res = await axios.get('http://localhost:8080/exam/', {});
			setAllExams(res.data.data);
			setIsLoading(false);
		} catch (err: any) {
			setIsLoading(false);
		}
	};

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<div className='exams-main' id='landing-exams'>
					{!isAuth && (
						<div style={{ margin: '2em 0' }}>
							<HeadingText text='Exams' />
						</div>
					)}
					<div className='exams-list'>
						{allExams?.map((eachExam) => (
							<div className='exam-component' key={eachExam._id}>
								<img
									src={require(`../../assets/images/gk.jpeg`)}
									alt={eachExam.name}
									className='exam-image'
								/>
								<div className='exam-prizing'>
									<div className='exam-title'>{eachExam.name}</div>
									<div className='exam-fees'>₹ {eachExam.price}/- </div>
								</div>
								<div className='exam-desc'>{eachExam.description}</div>
								{isAuth ? (
									<Link to={`/auth/exam/${eachExam._id}`}>
										<Button
											type='primary'
											className='auth-btn'
											style={{ fontWeight: 600 }}
										>
											Start now
										</Button>
									</Link>
								) : (
									<Link to='/login'>
										<Button
											type='primary'
											className='auth-btn'
											style={{ fontWeight: 500 }}
										>
											Login to start the exam
										</Button>
									</Link>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Exams;
