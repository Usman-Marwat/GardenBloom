import {
	PropsWithChildren,
	createContext,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';

export interface IAuthContext {
	user: { name?: string };
	setUser: Dispatch<SetStateAction<{}>>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState({});

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
