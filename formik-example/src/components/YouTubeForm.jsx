import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import { initialValues, savedValues, onSubmit, validationSchema, validateComments } from './validate-youtube-form';
import TextError from './TextError';

const YouTubeForm = () => {
	const [formValues, setFormValues] = useState(null);

	return (
		<Formik
			initialValues={formValues || initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			enableReinitialize //this props decides if your form can change initial values after the form has been initialized once
			// validateOnMount // since this is a boolean prop, we don't need reallt need to set is equal to true. Formik will run against all field valdiation and populate each object
			// validateOnChange={false} // Instructing formik to not run the validation function on change event
			// validateOnBlur={false} // Validation will never run even on a blur event
		>
			{(formik) => {
				console.log(formik);
				return (
					<Form>
						<div className='form-control'>
							<label htmlFor='name'>Name</label>
							<Field type='text' id='name' name='name' />
							<ErrorMessage name='name' as='div' className='error' />
						</div>

						<div className='form-control'>
							<label htmlFor='email'>E-mail</label>
							<Field type='email' id='email' name='email' />
							{/* This is alternative solution to do if we want to have more refined control */}
							<ErrorMessage name='email'>{(errorMessage) => <div className='error'>{errorMessage}</div>}</ErrorMessage>
						</div>

						<div className='form-control'>
							<label htmlFor='channel'>Channel</label>
							<Field type='text' id='channel' name='channel' placeholder='YouTube channel name' />
							<ErrorMessage name='channel' />
						</div>

						<div className='form-control'>
							<label htmlFor='comments'>Comments</label>
							<Field as='textarea' id='comments' name='comments' validate={validateComments} />
							<ErrorMessage name='comments' component={TextError} />
						</div>

						<div className='form-control'>
							<label htmlFor='address'>Address</label>
							<FastField name='address'>
								{(props) => {
									console.log('Field render');
									const { field, form, meta } = props;
									return (
										<div>
											<input type='text' id='address' {...field} />
											{meta.touched && meta.error ? <div>{meta.error}</div> : null}
										</div>
									);
								}}
							</FastField>
						</div>

						<div className='form-control'>
							<label htmlFor='facebook-profile'>Facebook Profile</label>
							{/* This is important to write social.facebook on the name props. This is because we are dealing with the nested object */}
							<Field type='text' id='facebook-profile' name='social.facebook' />
						</div>

						<div className='form-control'>
							<label htmlFor='twitter-profile'>Twitter Profile</label>
							<Field type='text' id='twitter-profile' name='social.twitter' />
						</div>

						<div className='form-control'>
							<label htmlFor='primary-phone'>Primary Phone</label>
							<Field type='text' id='primary-phone' name='phoneNumbers[0]' />
						</div>

						<div className='form-control'>
							<label htmlFor='secondary-phone'>Secondary Phone</label>
							<Field type='text' id='secondary-phone' name='phoneNumbers[1]' />
						</div>

						<div className='form-control'>
							<label htmlFor='list-phone-numbers'>List of phone numbers</label>
							<FieldArray name='phNumbers'>
								{(fieldArrayProps) => {
									const {
										push,
										remove,
										form: {
											values: { phNumbers },
										},
									} = fieldArrayProps;

									console.log('Form Errors: ', fieldArrayProps.form.errors);
									return (
										<div>
											{phNumbers.map((phNumber, index) => {
												return (
													<div key={index}>
														<Field name={`phNumbers[${index}]`} />
														{index > 0 && (
															<button type='button' onClick={() => remove(index)}>
																-
															</button>
														)}
														<button type='button' onClick={() => push(index)}>
															{' '}
															+{' '}
														</button>
													</div>
												);
											})}
										</div>
									);
								}}
							</FieldArray>
						</div>

						{/* <button type='button' onClick={() => formik.validateField('comments')}>
							Validate Comments
						</button>
						<button type='button' onClick={() => formik.validateForm('')}>
							Validate All
						</button>

						<button type='button' onClick={() => formik.setFieldTouched('comments')}>
							Visit comments
						</button>
						<button
							type='button'
							onClick={() =>
								formik.setTouched({
									name: true,
									email: true,
									channel: true,
									comments: true,
								})
							}>
							Visit Fields
						</button> */}

						<button type='button' onClick={() => setFormValues(savedValues)}>
							Load Saved Data
						</button>

						<button type='reset' onClick={() => setFormValues(initialValues)}>Reset</button>

						{/*
						 formik.isValid indicates if our form is valid or not
						 formik.isSubmitting indicates wheather the form is currently being submitted or not
						*/}
						<button type='submit' disabled={!formik.isValid || formik.isSubmitting}>
							Submit
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default YouTubeForm;
