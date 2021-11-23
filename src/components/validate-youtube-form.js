import * as Yup from 'yup'

export const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
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

export const validationSchema = Yup.object({
    name: Yup.string().required('Required name!'),
    email: Yup.string().email('Invalid Email format').required('Required'),
    channel: Yup.string().required('Required')
})