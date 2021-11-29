import React from 'react';
import FormikContainer from './components/FormikControl/FormikContainer';
import RegistrationForm from './components/Form/RegistrationForm';
import LoginForm from './components/Form/LoginForm';
import EnrollmentForm from './components/Form/EnrollmentForm'
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<EnrollmentForm />
			{/* <FormikContainer /> */}
			{/* <RegistrationForm /> */}
			{/* <LoginForm /> */}
		</div>
	);
};

export default App;
