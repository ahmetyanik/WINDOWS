import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Link } from 'react-router-dom'
import { useNotifications } from '../../redux/hooks'
import { useEffect } from 'react'

function NotificationIconWithBadge() {
  const { notifications, getNotifications } = useNotifications()

  useEffect(() => {
    getNotifications()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <Link to={'/notifications'}>
        <Badge badgeContent={notifications.length} color="primary">
          <NotificationsIcon color="action" />
        </Badge>
      </Link>
    </div>
  )
}

export default NotificationIconWithBadge
