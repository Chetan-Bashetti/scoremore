import { Spin } from 'antd';
import '../../assets/css/Loading.css';

const Loading = () => {
	return (
		<div className='loading-main'>
			<Spin size='large' />
		</div>
	);
};
export default Loading;
