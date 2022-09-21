import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { StyledContainer, StyledForm, AtomicButton } from './index.styles'
import { Text, TextField } from '../../atoms'
// import git from '../../assets/svg/git.svg'
// import google from '../../assets/svg/google.svg'
// import linkedin from '../../assets/svg/linkedin.svg'
import Button from '@mui/material/Button'
import { FormGroup } from '@mui/material'
import { useLogin } from '../../service/apis'
import { get } from 'lodash'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginIndex = () => {
  const navigate = useNavigate()
  const loginMutation = useLogin()
  const initialValues = {
    email: '',
    password: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().required('Please enter your password').min(5, 'dsdsadsd'),
  })

  const onSubmit = (values) => {
    loginMutation.mutate(values, {
      onSuccess: ({ data }) => {
        const token = get(data, 'token', '')
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(data))
        toast.success('Logged in successfully.')
        const roleOnlyUser = data?.roles?.length <= 1
        if (token && roleOnlyUser) navigate('/chooseRole')
        if (token && !roleOnlyUser) navigate('/dashboard')
      },
      onError: (error) => {
        console.log('🚀 ~ file: index.js ~ line 32 ~ onSubmit ~ error', error)
        toast.error('An error occured during logging in. Error message: ' + error.message)
      },
    })
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  return (
    <StyledContainer>
      <Text type="Headline1" className="text-login">
        <b> Login </b>
      </Text>
      <StyledForm className="form-input" onSubmit={formik.handleSubmit}>
        <TextField
          type="email"
          className="form-control"
          id="email"
          label="Email/Phone"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          color="secondary"
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          type="password"
          id="password"
          label="Password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          color="secondary"
          helperText={formik.touched.password && formik.errors.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />

        <FormGroup className="form-group">
          {/*
          <FormControlLabel
            control={<Checkbox color="secondary" checked={formik.values.checkbox} />}
            label="Remember Me"
            name="checkbox"
            onChange={formik.handleChange}
          />
          <FormHelperText error>{formik.errors.checkbox}</FormHelperText>
          <AtomicButton
            variant="text"
            type="button"
            handleClick={() => navigate('/text')}
            label="Forgot password?"
          />
          */}
          <AtomicButton className="login" variant="contained" type="submit" label="LOGIN" />
        </FormGroup>
      </StyledForm>
      <StyledForm>
        {/* <Text type="Body2" className="text-check login-font">
          OR
        </Text>
        <Text className="login-font" type="Body2">
          Login With
        </Text>
        <div className="social-form">
          <div>
            <StyledImage src={git} onClick={() => navigate('/text')} className="social-logo" />
            <div className="b-git">GitHub</div>
          </div>
          <div>
            <StyledImage src={google} onClick={() => navigate('/text')} className="social-logo" />
            <div className="b-google">Google</div>
          </div>
          <div>
            <StyledImage src={linkedin} onClick={() => navigate('/text')} className="social-logo" />
            <div className="b-linkedin">LinkedIn</div>
          </div>
        </div>
             */}
        <Text type="Body2" className="text-signUp login-font">
          Need An Account? <Button onClick={() => navigate('/register')}>SIGN UP</Button>
        </Text>
      </StyledForm>
    </StyledContainer>
  )
}
export default LoginIndex
