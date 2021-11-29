import React from 'react';
import { Field, ErrorMessage } from 'formik';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextError from './TextError';

const DatePicker = (props) => {
	const { label, name, ...rest } = props;
	return (
		<div className='form-control'>
			<label htmlFor={name}>{label}</label>
			<Field name={name}>
				{({ form, field }) => {
					// This object let us programmatically set a field value in the forming state
					const { setFieldValue } = form;
					const { value } = field;

					return (
						<DateView
							id={name}
							{...field}
							{...rest}
							selected={value}
							onChange={(value) => setFieldValue(name, value)}
						/>
					);
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default DatePicker;
