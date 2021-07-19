import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { isOpenDetailsModal } from "../localStorageType/type";

const ItemDetailsProvider = React.createContext();

export function useItemDetails() {
  return useContext(ItemDetailsProvider);
}

function ItemDetailsContext({ children }) {
  const [isOpenModal, setIsOpenModal] = useLocalStorage(isOpenDetailsModal, {
    isOpen: false,
    item: {},
  });

  function handleOpenModal(item) {
    setIsOpenModal({
      isOpen: true,
      item: item,
    });
  }
  function handleCloseModal() {
    setIsOpenModal({
      isOpenModal: false,
      item: isOpenModal.item,
    });
  }

  return (
    <ItemDetailsProvider.Provider
      value={{ isOpenModal, handleCloseModal, handleOpenModal }}
    >
      {children}
    </ItemDetailsProvider.Provider>
  );
}

export default ItemDetailsContext;
