import * as Yup from 'yup'

export const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};


export const savedValues = {
    name: 'John Doe',
    email: 'example@example.com',
    channel: 'Example Channel',
    comments: 'Welcome to Formik',
    address: '221 Baker Street',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};

export const onSubmit = (values, onSubmitProps) => {
    console.log('Form Data: ', values);
    console.log('Submit props: ',onSubmitProps);
    // This will update the submit button to false which in turn enable the submit button to work again
    onSubmitProps.setSubmitting(false)
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
    channel: Yup.string().required('Required'),
    comments: Yup.string().required('Required'),
})

export const validateComments = value => {
    let error;

    if(!value) {
        error = 'Required'
    }

    return error; 
}
