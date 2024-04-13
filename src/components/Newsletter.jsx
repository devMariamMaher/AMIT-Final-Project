import React from 'react'
import { Field, Form, Formik } from 'formik'

export const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h3>Subscribe Our Newsletter</h3>
      <div className="emailForm">
        <Formik>
          <Form>
            <Field type="email" name="email" placeholder='Enter email address'/>
            <button type='submit'>Subscribe</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
