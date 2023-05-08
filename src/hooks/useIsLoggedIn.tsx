import React, { useEffect } from 'react';

const useIsLoggedIn = () => {
	let [isLoggedIn, setIsLoggedIn] = React.useState(false);
	let [isLoading, setIsLoading] = React.useState(false);
	let [userData, setUserData] = React.useState({});

	useEffect(() => {
		setIsLoading(true);
		let data = localStorage.getItem('user') ?? '{}';
		let user = JSON.parse(data);
		if (Object.keys(user).length) {
			setIsLoggedIn(true);
			setUserData(user);
		}
		setIsLoading(false);
	}, []);

	return { isLoggedIn, isLoading, userData };
};

export default useIsLoggedIn;
