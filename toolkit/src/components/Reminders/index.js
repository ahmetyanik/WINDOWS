import * as React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { StyledContainer, ColorContainer } from './index.styles'
import moment from 'moment'
import { PickersDay } from '@mui/x-date-pickers'
import Text from '../../atoms/Text'

export default function Reminders() {
  // const interviewDates = getInterviewDates();
  // const closingJobDates = getClosingJobDates();
  // const eventDates = getEventDates();
  const closingJobDates = ['14-09-2022']
  const interviewDates = ['11-09-2022','28-09-2022']
  const eventDates = ['28-09-2022','10-09-2022']

  const datesAll = [...closingJobDates, ...interviewDates, ...eventDates];
  const selectedDates =[];

  for (let i = 0; i < datesAll.length; i++ ){
    for(let j = i + 1; j < datesAll.length; j++){
      if(datesAll[i]===datesAll[j]){
        !selectedDates.includes(datesAll[i]) &&  selectedDates.push(datesAll[i]);
      }
    }
  }
console.log(selectedDates);
  return (
    <StyledContainer>
      <div className="reminders_title">Reminders</div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          className='datepicker'
          orientation="landscape"
          renderDay={(day) => {
            const currentDay = moment(day).format('DD-MM-YYYY')
            let selectedMuiClass = ''

            
            if (closingJobDates.includes(currentDay)) {
              selectedMuiClass = 'Mui-selected-closingJobDates'
            }
            if (interviewDates.includes(currentDay)) {
              selectedMuiClass = 'Mui-selected-interviewDates'
            }
            if (eventDates.includes(currentDay)) {
              selectedMuiClass = 'Mui-selected-eventDates'
            }
            if (selectedDates.includes(currentDay)) {
              selectedMuiClass = 'Mui-selected-hover'
            }
           

            return <PickersDay className={selectedMuiClass} day={day} />
          }}
        />
      </LocalizationProvider>
      <div className="reminders_footer">
        <div className="container">
          <ColorContainer backgroundColor="#18A0FB"></ColorContainer>
          <Text display="block" type="Body1">
            Interview
          </Text>
        </div>
        <div className="container">
          <ColorContainer backgroundColor="#FB1826"></ColorContainer>
          <Text display="block" type="Body1">
            Closing Job Date
          </Text>
        </div>
        <div className="container">
          <ColorContainer backgroundColor="#FBBB18"></ColorContainer>
          <Text display="block" type="Body1">
             Events/Referals Contract
          </Text>
        </div>
      </div>
    </StyledContainer>
  )
}
