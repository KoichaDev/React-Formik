import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
	const dropDownOptions = [
		{ key: 'Select an option', value: '' },
		{ key: 'Option 1', value: 'option1' },
		{ key: 'Option 2', value: 'option2' },
		{ key: 'Option 3', value: 'option3' },
	];

	const radioOptions = [
		{ key: 'Option 1', value: 'option1' },
		{ key: 'Option 2', value: 'option2' },
		{ key: 'Option 3', value: 'option3' },
	];

	const initialValues = {
		email: '',
		description: '',
		selectOption: '',
		radioOption: '',
	};
	const validationSchema = Yup.object({
		email: Yup.string().required('Required'),
		description: Yup.string().required('Required'),
		selectOption: Yup.string().required('Required'),
		radioOption: Yup.string().required('Required'),
	});

	const onSubmitHandler = (values) => console.log('Form data: ', values);

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitHandler}>
			{(formik) => {
				return (
					<Form>
						<FormikControl control='input' type='email' label='Email' name='email' />

						<FormikControl control='textarea' label='Description' name='description' />

						<FormikControl control='select' label='Select a topic' name='selectOption' options={dropDownOptions} />

						<FormikControl control='radio' label='Radio topic' name='radioOption' options={radioOptions} />

						<button type='submit'>Submit</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default FormikContainer;
