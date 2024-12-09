import { useState } from 'react';
export const useToggleBtn = () => {
  const [showLogIn, setShowLogIn] = useState(false);
  const handleShowLogIn = () => {
    setShowLogIn(true);
  };
  const handleHideLogIn = () => {
    setShowLogIn(false);
  };
  return { handleShowLogIn, showLogIn, handleHideLogIn };
};
