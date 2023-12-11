import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button, TextInput } from 'react-native-paper';
import Animated, { FadeInDown } from 'react-native-reanimated';
import useAuth from '../auth/useAuth';
import { pf, ph, pw } from '../constants/Dimensions';

export default function Register() {
	const { setUser } = useAuth();

	return (
		<Animated.View style={{ flex: 1 }} entering={FadeInDown.duration(1000)}>
			<KeyboardAwareScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.container}
			>
				<Image
					style={styles.logo}
					source={require('../assets/images/icon.png')}
				/>
				<TextInput
					mode="flat"
					label="User Name"
					style={{ marginTop: 30 }}
					activeUnderlineColor="#303030"
					contentStyle={{ backgroundColor: '#F8F8F8' }}
					autoCapitalize="none"
					keyboardType="email-address"
				/>
				<TextInput
					mode="flat"
					label="Phone"
					style={{ marginTop: 20 }}
					activeUnderlineColor="#303030"
					contentStyle={{ backgroundColor: '#F8F8F8' }}
					autoCapitalize="none"
					keyboardType="email-address"
				/>
				<TextInput
					mode="flat"
					label="Address"
					style={{ marginTop: 20 }}
					activeUnderlineColor="#303030"
					contentStyle={{ backgroundColor: '#F8F8F8' }}
					autoCapitalize="none"
					keyboardType="email-address"
				/>
				<TextInput
					mode="flat"
					label="Email"
					style={{ marginTop: 20 }}
					activeUnderlineColor="#303030"
					contentStyle={{ backgroundColor: '#F8F8F8' }}
					autoCapitalize="none"
					keyboardType="email-address"
				/>
				<TextInput
					mode="flat"
					label="Password"
					secureTextEntry
					style={{ marginTop: 20 }}
					activeUnderlineColor="#303030"
					contentStyle={{ backgroundColor: '#F8F8F8' }}
					autoCapitalize="none"
					keyboardType="visible-password"
				/>
				<Button
					icon="account"
					mode="contained"
					onPress={() => setUser({ type: 'login' })}
					buttonColor="green"
					style={{ marginTop: 30 }}
				>
					Register
				</Button>
				<Button
					mode="text"
					textColor="grey"
					onPress={() => setUser({ type: 'login' })}
					style={{ marginTop: 10 }}
				>
					Already have an account?
				</Button>
			</KeyboardAwareScrollView>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: pw(5),
	},
	errorText: {
		color: 'red',
		textAlign: 'center',
		fontSize: pf(2.3),
	},
	logo: {
		width: pw(90),
		height: ph(35),
		alignSelf: 'center',
		marginTop: ph(10),
	},
});
