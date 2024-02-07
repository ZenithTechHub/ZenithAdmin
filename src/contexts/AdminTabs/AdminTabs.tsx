import React from "react";

export type AdminTabsContextObject = {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type AdminTabsProviderProps = {
  children: React.ReactNode;
};

export const AdminTabsContext = React.createContext<AdminTabsContextObject>(
  {} as AdminTabsContextObject,
);

export const AdminTabsProvider = ({ children }: AdminTabsProviderProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  return (
    <AdminTabsContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
      }}
    >
      {children}
    </AdminTabsContext.Provider>
  );
};
