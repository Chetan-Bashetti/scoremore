import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../../assets/css/LandingPageStyles/LandingHeader.css';
import HeadingText from '../Text';

const styles = {
	link: {
		color: '#1e90ff',
		textDecoration: 'none'
	}
};
interface Props {
	setIsOpen: React.MouseEventHandler<HTMLButtonElement>;
}

const LandingHeader: React.FC<Props> = ({ setIsOpen }) => {
	return (
		<div className='landing-page-main'>
			<div className='landing-nav-bar-mob'>
				<MenuOutlined style={{ fontSize: '1.5em' }} onClick={setIsOpen} />
				<div className='logo'>ScoreMore.com</div>
			</div>
			<div className='landing-nav-bar'>
				<div className='logo'>ScoreMore.com</div>
				<div>
					<span className='header-label'>
						<Link to='/login' style={styles.link}>
							Login
						</Link>
					</span>
					<span className='header-label'>
						<Link to='/signup' style={styles.link}>
							Signup
						</Link>
					</span>
					<span className='header-label'>
						<a href='#landing-exams' style={styles.link}>
							Exams
						</a>
					</span>
					<span className='header-label'>
						<a href='#landing-contact-us' style={styles.link}>
							Contact-us
						</a>
					</span>
				</div>
			</div>
			<div className='banner-content'>
				<HeadingText text="India's most trusted" bold={true} />
				<HeadingText text='online examination' bold={true} />
				<HeadingText text='platform' bold={true} />
				<span className='banner-sub-heading'>
					Conducting affordable and quality examination all over India.
				</span>
				<button className='banner-button'>Take a demo test</button>
			</div>
		</div>
	);
};

export default LandingHeader;
