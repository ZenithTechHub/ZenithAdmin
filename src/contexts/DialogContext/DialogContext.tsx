import React from "react";

type BasicModal = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DialogContextObject = {
  "modal-new-product": BasicModal;
  "modal-delete-product": BasicModal;
  "popover-product": BasicModal;
};

export type DialogContextProviderProps = {
  children: React.ReactNode;
};

export const DialogContext = React.createContext<DialogContextObject>(
  {} as DialogContextObject,
);

export const DialogContextProvider = ({
  children,
}: DialogContextProviderProps) => {
  const [modalDeleteProduct, setModalDeleteProduct] =
    React.useState<boolean>(false);
  const [modalNewProduct, setModalNewProduct] = React.useState<boolean>(false);
  const [popoverProduct, setPopoverProduct] = React.useState<boolean>(false);

  return (
    <DialogContext.Provider
      value={{
        "modal-delete-product": {
          open: modalDeleteProduct,
          setOpen: setModalDeleteProduct,
        },
        "modal-new-product": {
          open: modalNewProduct,
          setOpen: setModalNewProduct,
        },
        "popover-product": { open: popoverProduct, setOpen: setPopoverProduct },
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
