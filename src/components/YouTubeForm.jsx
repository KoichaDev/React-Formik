import React from 'react';
import { useFormik } from 'formik';
import { initialValues, onSubmit, validationSchema } from './validate-youtube-form';

const YouTubeForm = () => {
	const formik = useFormik({
		initialValues, // initial values and change Handler
		onSubmit, //Submit the form
		validationSchema, // Validating by using Yup packages
	});

	console.log('Visited Fields: ', formik.touched);

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className='form-control'>
				<label htmlFor='name'>Name</label>
				<input type='text' id='name' name='name' {...formik.getFieldProps('name')} />
				{formik.touched.name && formik.errors.name ? <p className='error'>{formik.errors.name}</p> : null}
			</div>

			<div className='form-control'>
				<label htmlFor='email'>E-mail</label>
				<input type='email' id='email' name='email' {...formik.getFieldProps('email')} />
				{formik.touched.email && formik.errors.email ? <p className='error'>{formik.errors.email}</p> : null}
			</div>

			<div className='form-control'>
				<label htmlFor='channel'>Channel</label>
				<input type='text' id='channel' name='channel' {...formik.getFieldProps('channel')} />
				{formik.touched.channel && formik.errors.channel ? <p className='error'>{formik.errors.channel}</p> : null}
			</div>

			<button type='submit'>Submit</button>
		</form>
	);
};

export default YouTubeForm;
