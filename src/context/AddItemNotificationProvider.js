import React, { createContext, useState, useEffect } from 'react';

const defaultState = {
  open: false,
  productId: null,
  alreadyInCart: false
};

export const NotificationContext = createContext(defaultState);

export const NotificationProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  const showNotification = ({productId, alreadyInCart}) => {
    setState({ ...state, open: true, productId: productId, alreadyInCart: alreadyInCart});
  };

  const closeNotification = () => {
    setState({ ...state, open: false});
  };

  useEffect(() => {
    if (state?.open === true) {
      setTimeout(() => {
        closeNotification();
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <NotificationContext.Provider
      value={{
        state,
        setState,
        showNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
