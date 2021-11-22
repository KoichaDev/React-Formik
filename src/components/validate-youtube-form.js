
export const initialValues = {
    name: '',
    email: '',
    channel: '',
};

export const onSubmit = (values) => {
    console.log('Form Data: ', values);
};

export const validate = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';

        // Checking if the email is empty
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format';
    }

    return errors;
}