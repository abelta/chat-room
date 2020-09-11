/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useModal } from 'react-modal-hook';
import LoginModal from './LoginModal';

export default () => {
  const { data: currentUser } = useQuery('login');

  const [showLogin, hideLogin] = useModal(() => <LoginModal />);

  useEffect(
    () => {
      if (!currentUser) showLogin();
      if (currentUser) hideLogin();
    },
    [currentUser],
  )

  return (<></>);
}
