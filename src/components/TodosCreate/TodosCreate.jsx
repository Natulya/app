import { useMutation } from '@tanstack/react-query'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import { prepareData } from './helpers/utils'
import { createTodoFormValidationSchema } from './helpers/validator'

const initialValues = {
  title: '',
  description: '',
  img: '',
  tags: '',
  deadLine: new Date(new Date().setDate(new Date().getDate() + 7)),
}

export function TodosCreate() {
  const navigate = useNavigate()

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data) => fetch('http://localhost:3005/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
  })

  const submitHandler = async (values) => {
    const preparedData = prepareData(values)
    const response = await mutateAsync(preparedData)
    // navigate('/todos')
    navigate(`/todos/${response.id}`)
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

        <button disabled={isLoading} type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
