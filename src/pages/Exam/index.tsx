import * as React from 'react';
import Exams from '../../components/LandingPageComponents/Exams';
//CSS
import '../../assets/css/Exams.css';

const Exam: React.FC = () => {
	return (
		<div className='exams-wrapper'>
			<Exams isAuth={true} />
		</div>
	);
};
export default Exam;
