import React from 'react';

export const ActiveLinkContext = React.createContext({
    activeLink: '',
    setActiveLink: (id: string) => {},
});