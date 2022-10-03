import { useEffect } from 'react'
import { ImCross } from 'react-icons/im'
import {
  StyledBody,
  StyledTextField,
  StyledGridLine,
  StyledButton,
  StyledOverline,
  StyledHeadline,
  StyledSubtitle,
  StyledSelectItem,
  StyledButtonBody,
  StyledGridItem,
  StyledAddedScroll,
} from './index.styles'

const SuggestedElements = ({
  selectList,
  selectLabel,
  inputPlaceHolder,
  overline,
  subtitle,
  headline,
  formik,
  suggestedList,
  isPosition = false,
  role,
}) => {
  // const [addCounter, setAddCounter] = useState(1)

  // const handleAddClick = () => {
  //   let suggested = formik.values.suggestedListFormik
  //   suggested.push({ id: '12' + addCounter, name: formik.values.add })
  //   formik.setValues({ ...formik.values, suggestedListFormik: suggested })
  //   setAddCounter(addCounter + 1)
  // }

  useEffect(() => {
    if (suggestedList) {
      formik.setValues({
        ...formik.values,
        suggestedListFormik: suggestedList,
      })
    }
    if (selectList) {
      formik.setValues({
        ...formik.values,
        selectList: selectList,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectList])

  const handleIconClick = (item) => {
    if (formik.values.addedItemsFormik) {
      let added = formik.values.addedItemsFormik
      let suggested = formik.values.suggestedListFormik ? formik.values.suggestedListFormik : []
      for (var i = 0; i < added.length; i++) {
        if (added[i].position.id === item.id) {
          added.splice(i, 1)
        }
      }
      added
        ? formik.setValues({ ...formik.values, addedItemsFormik: [...added] })
        : formik.setValues({ ...formik.values, addedItemsFormik: [] })
      suggested.push(item)
      formik.setValues({ ...formik.values, suggestedListFormik: [...suggested] })
    }
  }

  const handleButtonClick = (item) => {
    if (formik.values.suggestedListFormik) {
      let suggested = formik.values.suggestedListFormik
      let added = formik.values.addedItemsFormik ? formik.values.addedItemsFormik : []
      for (let i = 0; i < suggested.length; i++) {
        if (suggested[i].name === item.name) {
          suggested.splice(i, 1)
        }
      }
      suggested
        ? formik.setValues({ ...formik.values, suggestedListFormik: [...suggested] })
        : formik.setValues({ ...formik.values, suggestedListFormik: [] })
      added.push({ position: item, experienceYears: selectList[2] })

      formik.setValues({ ...formik.values, addedItemsFormik: [...added] })
    }
  }

  const handleSelectChange = (e, id, index) => {
    let added = formik.values.addedItemsFormik
    const selectListItem = selectList.filter((item) => item.id === e.target.value)[0]
    if (added[index].position.id === id) {
      added[index].experienceYears = selectListItem
    }
    formik.setValues({ ...formik.values, addedItemsFormik: [...added] })
  }

  if(!formik){ return <></>}
  return (
    <StyledBody>
      {headline && <StyledHeadline type="Headline1">{headline}</StyledHeadline>}
      {subtitle && <StyledSubtitle type="Subtitle1">{subtitle}</StyledSubtitle>}
      <StyledGridLine className="searchLine">
        <StyledTextField
          type="text"
          name="add"
          value={formik.values.add}
          onChange={formik.handleChange}
          error={formik.touched.add && Boolean(formik.errors.add)}
          helperText={formik.touched.add && formik.errors.add}
          placeholder={inputPlaceHolder}
          disabled={isPosition && formik.values.addedItemsFormik.length >= 5}
        />
      </StyledGridLine>
      <StyledOverline type="Body1">{overline}</StyledOverline>
      <StyledButtonBody>
        {formik.values.suggestedListFormik
          ?.filter((i) => i.name.includes(formik.values.add))
          .map((item, index) =>
            formik.values.seeMore ? (
              <StyledButton
                key={index}
                className="listedButton"
                variant="contained"
                onClick={() => handleButtonClick(item)}
                disabled={isPosition && formik.values.addedItemsFormik.length >= 5}
              >
                {item.name}
              </StyledButton>
            ) : (
              index < 13 && (
                <StyledButton
                  key={index}
                  className="listedButton"
                  variant="contained"
                  onClick={() => handleButtonClick(item)}
                  disabled={isPosition && formik.values.addedItemsFormik.length >= 5 ? true : false}
                >
                  {item.name}
                </StyledButton>
              )
            )
          )}
        {formik.values.suggestedListFormik.length >= 14 && (
          <StyledButton
            className="link"
            onClick={() => {
              formik.setValues({ ...formik.values, seeMore: !formik.values.seeMore })
            }}
          >
            {formik.values.seeMore ? 'See Less >' : 'See More >'}
          </StyledButton>
        )}
      </StyledButtonBody>
      <StyledAddedScroll>
        {formik.values.addedItemsFormik?.map(({ position, experienceYears }, index) => (
          <StyledGridLine className="addedLine" key={index}>
            <StyledGridItem>
              <StyledButton
                className="added"
                variant="contained"
                endIcon={<ImCross className="icon" onClick={() => handleIconClick(position)} />}
              >
                {position.name}
              </StyledButton>
            </StyledGridItem>
            {role === 'candidate' ? (
              <StyledGridItem>
                <StyledSelectItem
                  className="select-item"
                  menuItems={formik.values.selectList}
                  value={experienceYears.id}
                  label={selectLabel}
                  handleChange={(e) => handleSelectChange(e, position.id, index)}
                />
              </StyledGridItem>
            ) : null}
          </StyledGridLine>
        ))}
      </StyledAddedScroll>
    </StyledBody>
  )
}

export default SuggestedElements
