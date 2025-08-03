import { createContext, useContext, useState, type ReactNode } from "react";

interface OpenAddContactModelData {
  isOpen: boolean;
  handleTriggerOpen: () => void;
}

interface OpenAddContactModelProps {
  children: ReactNode;
}

const OpenAddContactModelContext =
  createContext<null | OpenAddContactModelData>(null);

const OpenAddContactModelProvider = ({
  children,
}: OpenAddContactModelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriggerOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <OpenAddContactModelContext value={{ isOpen, handleTriggerOpen }}>
        {children}
      </OpenAddContactModelContext>
    </>
  );
};

export default OpenAddContactModelProvider;

export const useOpenAddContactModelContext = () => {
  const context = useContext(OpenAddContactModelContext);
  if (!context) {
    throw new Error(
      "useOpenAddContactModelContext must be used within an OpenAddContactModelProvider"
    );
  }
  return context;
};
