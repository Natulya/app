import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { createTodoFormValidationSchema } from './validator'

const initialValues = {
  title: '',
  description: '',
  img: '',
  tags: '',
  deadLine: new Date(new Date().setDate(new Date().getDate() + 7)),
}

export function TodosCreate() {
  const submitHandler = (values) => {
    console.log({ values })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createTodoFormValidationSchema}
      onSubmit={submitHandler}
    >
      <Form className="d-flex flex-column">
        <Field name="title" placeholder="Title" type="text" />
        <ErrorMessage className="error" component="p" name="title" />

        <Field name="description" placeholder="Description" type="text" />
        <ErrorMessage className="error" component="p" name="description" />

        <Field name="img" placeholder="img url" type="text" />
        <ErrorMessage className="error" component="p" name="img" />

        <Field name="tags" placeholder="Tags" type="text" />
        <ErrorMessage className="error" component="p" name="tags" />

        <Field name="deadLine" type="date" />
        <ErrorMessage className="error" component="p" name="deadLine" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
