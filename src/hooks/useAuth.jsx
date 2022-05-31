import Cookie from 'js-cookie';
import endPoints from '@services/api';
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function useAuth() {
	return useContext(AuthContext);
}

function useProvideAuth() {
	const [user, setUser] = useState(null);

	const signIn = async (email, password) => {
		const response = await fetch(endPoints.auth.login, {
			method: 'POST',
			headers: {
				accept: '*/*',
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({ email, password }),
		});
		const data = await response.json();
		// console.log(data);
		if (data) {
			const token = data.access_token;
			Cookie.set('token', token, { expires: 5 });

			const response = await fetch(endPoints.auth.profile, {
				method: 'GET',
				headers: {
					authorization: `Bearer ${token}`,
				},
			});
			const user = await response.json();
			setUser(user);
		}
	};

	return {
		user,
		signIn,
	};
}

function ProviderAuth({ children }) {
	const auth = useProvideAuth();
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { ProviderAuth, useAuth, useProvideAuth };
