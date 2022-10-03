import { Stepper as StepperComp, Step, StepLabel } from '@mui/material'
import { useNavigate } from 'react-router'
import { StyledBox } from './index.styles'
const steps = [
  { active: false, step: '1', label: 'Personal Info', to: '/personal' },
  {
    active: false,
    step: '2',
    label: 'Upload CV',
    to: '/uploadcv',
  },
  {
    active: false,
    step: '3',
    label: 'Position',
    to: '/position',
  },
  {
    active: false,
    step: '4',
    label: 'Skill Set',
    to: '/skills',
  },
  {
    active: false,
    step: '5',
    label: 'Industry',
    to: '/industry',
  },
  {
    active: false,
    step: '6',
    label: 'Language',
    to: '/language',
  },
  {
    active: false,
    step: '7',
    label: 'Experience',
    to: '/experiences',
  },
  {
    active: false,
    step: '8',
    label: 'Education',
    to: '/educations',
  },
  {
    active: false,
    step: '9',
    label: 'Preferences',
    to: '/preferences',
  },
]

const Stepper = ({ step }) => {
  const navigate = useNavigate()
  return (
    <StyledBox>
      <StepperComp activeStep={step} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label} onClick={() => navigate(step.to)}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </StepperComp>
    </StyledBox>
  )
}
export default Stepper
