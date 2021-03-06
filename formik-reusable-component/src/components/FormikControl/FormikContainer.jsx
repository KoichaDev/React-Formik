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

	const checkboxOptions = [
		{ key: 'Option 1', value: 'checkboxOption1' },
		{ key: 'Option 2', value: 'checkboxOption2' },
		{ key: 'Option 3', value: 'checkboxOption3' },
	];

	const initialValues = {
		email: '',
		description: '',
		selectOption: '',
		radioOption: '',
		checkboxOption: [],
		birthDate: null,
	};
	const validationSchema = Yup.object({
		email: Yup.string().required('Required'),
		description: Yup.string().required('Required'),
		selectOption: Yup.string().required('Required'),
		radioOption: Yup.string().required('Required'),
		checkboxOption: Yup.array().min(1, 'Required').required('Required'),
		birthDate: Yup.date().required('Required').nullable()
	});

	const onSubmitHandler = (values) => {
		console.log('Form data: ', values);
		// We want to make the date as string value. When trying to reinitialize the form of saved data
		// The application is going to break. This is why we haave to make JSON parse to convert all date to JavaScript Date
		// and then stringify
		console.log('Saved data', JSON.parse(JSON.stringify(values)));
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmitHandler}>
			{(formik) => {
				return (
					<Form>
						<FormikControl control='input' type='email' label='Email' name='email' />

						<FormikControl control='textarea' label='Description' name='description' />

						<FormikControl
							control='select'
							label='Select a topic'
							name='selectOption'
							options={dropDownOptions}
						/>

						<FormikControl
							control='radio'
							label='Radio topic'
							name='radioOption'
							options={radioOptions}
						/>

						<FormikControl
							control='checkbox'
							label='Checkbox topics'
							name='checkboxOption'
							options={checkboxOptions}
						/>

						<FormikControl
							control='date'
							label='Pick a date'
							name='birthDate'
						/>

						<button type='submit'>Submit</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default FormikContainer;
