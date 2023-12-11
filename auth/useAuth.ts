import { useContext } from 'react';
import AuthContext, { IAuthContext } from './AuthProvider';

export default () => {
	const { user, setUser } = useContext(AuthContext) as IAuthContext;

	const logIn = (authUser: any) => {
		setUser(authUser);
	};

	const logOut = () => {
		setUser({ type: 'login' });
	};

	return {
		user,
		setUser,
		logIn,
		logOut,
	};
};
