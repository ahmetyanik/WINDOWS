import React, { useCallback, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { FormHelperText } from '@mui/material'
import { Button, Modal, Text } from '../../atoms'
import SelectItem from '../SelectItem'
import StyledDropzone from '../../pages/UploadCvPage/components/Dropzone'
import { useGetCountryCode, useReferCandidate } from '../../service/apis'
import { useNavigate } from 'react-router-dom'
import icon from '../../assets/svg/Color.svg'
import pdf from '../../assets/svg/Pdf.svg'
import docx from '../../assets/svg/Docx.svg'
import doc from '../../assets/svg/Doc.svg'
import {
  StyledContainer,
  SubContainer,
  Wrapper,
  StyledForm,
  StyledContainer1,
  StyledTextField,
} from './index.styles'


function ReferCandidate() {
  const referCandidateMutation = useReferCandidate()
  const navigate = useNavigate()
  const { data } = useGetCountryCode()

  const getPhoneCodes = data?.data ? data.data.map((code) => ({ name: code, id: code })) : []

  const initialValues = {
    firstName: '',
    lastName: '',
    position: '',
    linkedIn: '',
    locationId: null,
    email: '',
    countryCode: '',
    mobileNumber: '',
    documentPath: '',
  }
  const validationSchema = yup.object({
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your last name'),
    position: yup.string().required('Please enter your position'),
    linkedIn: yup.string().required('Please enter your linkedIn url'),
    locationId: yup.number().required('Please enter your location'),
    email: yup.string().email().required('Please enter your email'),
    countryCode: yup.string().required('Please select your country code'),
    mobileNumber: yup.string().required('Please enter your mobile number'),
    documentPath: yup.string(),
  })
  const [open, setOpen] = useState(false)
  const handleClickForModal = () => {
    setOpen(!open)
  }
  const content = () => {
    return(
      <>
        <span>Thank you!</span>
        <br/>
        <span>We've an email to the person you've referred.</span>
        <p>We will inform you when your referral joins the system</p>
      </>
    )
  }
  const onSubmit = (values) => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      position: values.position,
      linkedIn: values.linkedIn,
      locationId: parseInt(values.locationId),
      email: values.email,
      countryCode: values.countryCode,
      mobileNumber: values.mobileNumber,
      documentPath: values.documentPath,
    }
   

    referCandidateMutation.mutate(payload, {
      onSuccess: () => {
        setOpen(!open)  
       },
    })
    console.log('payload', payload)
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  })

  const icons = [icon, pdf, doc, docx]
  const [values, setValues] = useState({
    cv: null,
    letter: null,
  })
  const [index, setIndex] = useState({
    cv: 0,
    letter: 0,
  })

  const onDrop = useCallback(
    (file, name) => {
      if (file.length < 1) return
      const arr = file[0].name.split('.')
      const type = arr[arr.length - 1]

      setValues({ ...values, [name]: file[0] })
      if (type === 'pdf') {
        setIndex({ ...index, [name]: 1 })
      } else if (type === 'doc') {
        setIndex({ ...index, [name]: 2 })
      } else if (type === 'docx') {
        setIndex({ ...index, [name]: 3 })
      }
      console.log('values', values)
    },
    [values, index]
  )

  const handleDelete = (e, name) => {
    e.stopPropagation()
    setValues({ ...values, [name]: null })
  }
  return (
    <StyledContainer>
      <Text display="block" className="text-example" type="Headline1">
        Referals
      </Text>
      <SubContainer>
        <Text display="block" className="text-example" type="Headline3">
          Refer Candidate
        </Text>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledContainer className="flex">
            <Wrapper>
              <StyledContainer1>
                <StyledContainer1 className="containerBox">
                  <StyledTextField
                    name="firstName"
                    label="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    color="secondary"
                    error={formik.touched.firstName}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                  />
                  <StyledTextField
                    name="lastName"
                    label="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    color="secondary"
                    error={formik.touched.lastName}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                  />
                </StyledContainer1>
                <StyledContainer1>
                  <StyledTextField
                    name="position"
                    label="Position"
                    type="position"
                    value={formik.values.position}
                    onChange={formik.handleChange}
                    color="secondary"
                    error={formik.touched.position}
                    helperText={formik.touched.position && formik.errors.position}
                  />
                </StyledContainer1>
                <StyledContainer1>
                  <StyledTextField
                    name="linkedIn"
                    label="LinkedIn"
                    value={formik.values.linkedIn}
                    onChange={formik.handleChange}
                    color="secondary"
                    error={formik.touched.linkedIn}
                    helperText={formik.touched.linkedIn && formik.errors.linkedIn}
                  />
                </StyledContainer1>
                <StyledContainer1>
                  <StyledTextField
                    name="locationId"
                    label="Location"
                    value={formik.values.locationId}
                    onChange={formik.handleChange}
                    color="secondary"
                    error={formik.touched.locationId}
                    helperText={formik.touched.locationId && formik.errors.locationId}
                  />
                </StyledContainer1>
                <StyledContainer1>
                  <StyledTextField
                    name="email"
                    label="Email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    color="secondary"
                    error={formik.touched.email}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </StyledContainer1>
                <StyledContainer1 className="phone">
                  <SelectItem
                    defaultValue="44"
                    name="countryCode"
                    type="string"
                    label="Country Code"
                    className="countryCode"
                    variant="outlined"
                    value={formik.values.countryCode}
                    handleChange={formik.handleChange}
                    color="secondary"
                    menuItems={getPhoneCodes}
                  />
                  <FormHelperText error> {formik.errors.countyCode}</FormHelperText>
                  <StyledTextField
                    name="mobileNumber"
                    label="Mobile"
                    type="string"
                    value={formik.values.mobileNumber}
                    onChange={formik.handleChange}
                    color="secondary"
                    error={formik.touched.mobileNumber}
                    helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                  />
                </StyledContainer1>
              </StyledContainer1>
            </Wrapper>
            <Wrapper>
              <StyledContainer1>
                <StyledContainer1>
                  <StyledTextField
                    name="documentPath"
                    label="Document Name (Optional)"
                    type="text"
                    value={formik.values.documentPath}
                    onChange={formik.handleChange}
                    color="secondary"
                    error={formik.touched.documentPath}
                    helperText={formik.touched.documentPath && formik.errors.documentPath}
                  />
                </StyledContainer1>
                <StyledContainer1>
                  <StyledDropzone
                    file={values.cv}
                    name="cv"
                    handleDelete={handleDelete}
                    onDrop={onDrop}
                    icon={icons[index.cv]}
                  />
                </StyledContainer1>
              </StyledContainer1>
            </Wrapper>
          </StyledContainer>
          <StyledContainer className="buttonDiv">
            <Button variant="contained" color="secondary" type="submit" label='REFER'>
              REFER
            </Button>
          </StyledContainer>
        </StyledForm>
      </SubContainer>
      <Modal handleModalOpen={handleClickForModal} open={open} handleModalButton={() => navigate("/referrals")} btnName={"go to referrals"}>
        {content()}
       </Modal>
    </StyledContainer>
  )
}

export default ReferCandidate
