import { createContext, useContext } from 'react';

const PageContext = createContext();

const PageContextProvider = PageContext.Provider;

const usePage = () => useContext(PageContext);

export { usePage, PageContextProvider };
