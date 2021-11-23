import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { initialValues, onSubmit, validationSchema } from './validate-youtube-form';

const YouTubeForm = () => {

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			<Form>
				<div className='form-control'>
					<label htmlFor='name'>Name</label>
					<Field type='text' id='name' name='name' />
					<ErrorMessage name='name' />
				</div>

				<div className='form-control'>
					<label htmlFor='email'>E-mail</label>
					<Field type='email' id='email' name='email' />
					<ErrorMessage name='email' />
				</div>

				<div className='form-control'>
					<label htmlFor='channel'>Channel</label>
					<Field type='text' id='channel' name='channel' />
					<ErrorMessage name='channel' />
				</div>

				<button type='submit'>Submit</button>
			</Form>
		</Formik>
	);
};

export default YouTubeForm;
