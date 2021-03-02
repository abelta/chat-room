import React, { useEffect } from 'react'
import { useModal } from 'react-modal-hook'
import { useCurrentUser } from 'hooks'
import LoginModal from './LoginModal'

export default () => {
  const currentUser = useCurrentUser()

  const [showLogin, hideLogin] = useModal(() => <LoginModal />)

  useEffect(() => {
    if (!currentUser) showLogin()
    if (currentUser) hideLogin()
  }, [currentUser])

  return <></>
}
