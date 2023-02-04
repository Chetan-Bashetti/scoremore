import { MenuOutlined } from '@ant-design/icons';
import '../../assets/css/LandingPageStyles/LandingHeader.css';
import HeadingText from '../Text';

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
					<span className='header-label'>Login</span>
					<span className='header-label'>Sign-up</span>
					<span className='header-label'>Courses </span>
					<span className='header-label'>Contact-us</span>
				</div>
			</div>
			<div className='banner-content'>
				<HeadingText text="India's most trusted" />
				<HeadingText text='online examination' />
				<HeadingText text='platform' />
				<span className='banner-sub-heading'>
					Conducting affordable and quality examination all over India.
				</span>
				<button className='banner-button'>Take a demo test</button>
			</div>
		</div>
	);
};

export default LandingHeader;
