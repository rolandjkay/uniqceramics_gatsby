import React from 'react';

import InventoryProvider from './src/context/InventoryProvider';
import { NotificationProvider } from './src/context/AddItemNotificationProvider';

export const wrapRootElement = ({ element }) => (
    <NotificationProvider>
      <InventoryProvider>
        {element}
      </InventoryProvider>
    </NotificationProvider>
);
