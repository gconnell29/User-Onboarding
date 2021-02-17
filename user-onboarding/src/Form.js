import React from 'react'

function Form() {

  return (
    <>
      <h1>Onboarding Form</h1>
      <form>
        <label className='name_label'> Name
          <input
            name='name'
            type='checkbox'
            />
        </label>
        <label className='email_label'> Email
          <input
            name='email'
            type='checkbox'
            />
        </label>
        <label className='password_label'> Password
          <input
            name='password'
            type='checkbox'
            />
        </label>
        <label className='tos_label'> Terms of Service
          <input
            name='tos'
            type='checkbox'
            />
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default Form;