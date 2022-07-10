import { createContext, useContext, useState, ReactNode, FC } from 'react';

const AppContext = createContext<string>('');

type Props = {
  children:  ReactNode;
}

export const LanguageContext: FC<Props> = ({ children }) => {
  const [languageApi, setLanguageApi] = useState<string>('http://localhost:3000/api/languages/pl')

  return (
    <AppContext.Provider value={languageApi}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}