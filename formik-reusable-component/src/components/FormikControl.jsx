import React from 'react';

const FormikControl = (props) => {
	const { control } = props;

	switch (control) {
		case 'input':
			break;
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
