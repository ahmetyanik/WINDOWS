import React, { useEffect } from 'react'
import { Text } from '../../../atoms'
import { useNotifications } from '../../../redux/hooks'
import TableComponent from '../../Table'
import AddFilterButton from './AddFilterButton'
import MarkAsReadButton from './MarkAsReadButton'

const Notifications = () => {
  const { getNotifications } = useNotifications()

  useEffect(() => {
    getNotifications()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Text display="block" className="text-example" type="Headline1">
        Notifications
      </Text>

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '30px',
        }}
      >
        <AddFilterButton />
        <MarkAsReadButton />
      </div>

      <TableComponent
        tableHeaders={['NOTIFICATIONS', 'DATE', 'DETAILS']}
        tableCells={[
          ['Hücre1', 'Hücre1', 'Hücre1'],
          ['Hücre2', 'Hücre2', 'Hücre2'],
        ]}
      />
    </div>
  )
}

export default Notifications
