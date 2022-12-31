import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Field } from './Field';
import { ArrowLink } from '../../ArrowLink';
import { customersAPI } from '../../../../api';
import { toast } from 'react-toastify';

const initialValues = {
  name: '',
  email: '',
  msg: '',
}

export type ContactUsFormValuesType = typeof initialValues;

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  msg: Yup.string()
    .max(500, 'Must be 500 characters or less')
    .required('Required'),
})

export const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      let resp = await customersAPI.add(values);
      
      if (resp) {
        resetForm();
        toast.success('Success! We will contact you soon.', {

        })
      } else {
        toast.error('Somenthing went wrong :(. Please, try again later.', {

        })
      }
    },
  });

  return <form className='max-md:mt-14' onSubmit={formik.handleSubmit}>
    <Field name='name' value={formik.values.name} onChange={formik.handleChange} label='Name' touched={formik.touched.name} error={formik.errors.name} />
    <Field name='email' value={formik.values.email} onChange={formik.handleChange} label='Email' touched={formik.touched.email} error={formik.errors.email} type='email' />
    <Field name='msg' value={formik.values.msg} onChange={formik.handleChange} label='Message' touched={formik.touched.msg} error={formik.errors.msg} as='textarea' />

    <button className="mt-14" type='submit'>
      <ArrowLink>Get in touch</ArrowLink>
    </button>
  </form>
};