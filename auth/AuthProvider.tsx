import {
	PropsWithChildren,
	createContext,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';

type AuthUser = { type: 'login' | 'register' | 'main' };

export interface IAuthContext {
	user: AuthUser;
	setUser: Dispatch<SetStateAction<AuthUser>>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<AuthUser>({ type: 'login' });

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
