import React from 'react';
import { useFormik } from 'formik';

const YouTubeForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			channel: '',
		},
		onSubmit: (values) => {
			console.log('Form Data: ', values);
		},
	});

	// console.log('Form Values', formik.values);

	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor='name'>Name</label>
			<input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

			<label htmlFor='email'>E-mail</label>
			<input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

			<label htmlFor='channel'>Channel</label>
			<input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />

			<button type="submit">Submit</button>
		</form>
	);
};

export default YouTubeForm;
