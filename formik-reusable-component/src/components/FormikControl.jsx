import React from 'react';
import Input from './Input';

const FormikControl = (props) => {
	const { control, ...rest } = props;

	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'textarea':
			break;
		case 'select':
			break;
		case 'radio':
			break;
		case 'checkbox':
			break;
		case 'date':
			break;
		default:
			return null;
	}

	return null;
};

export default FormikControl;
