import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
	const initialValues = {
		email: '',
	};
	const validationSchema = Yup.object({
		email: Yup.string().required('required'),
	});

	const onSubmitHandler = (values) => console.log('Form data: ', values);

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitHandler}>
			{(formik) => {
				return (
					<Form>
						<FormikControl control='input' type='email' label='Email' name='email' />
						<button type='submit'>Submit</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default FormikContainer;
