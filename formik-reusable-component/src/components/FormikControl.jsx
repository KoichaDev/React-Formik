import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

const FormikControl = (props) => {
	const { control, ...rest } = props;

	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'textarea':
			return <TextArea {...rest} />;
		case 'select':
			return <Select {...rest} />;
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
