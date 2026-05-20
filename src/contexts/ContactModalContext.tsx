import { createContext, useContext, useState, ReactNode } from "react";

export interface ContactModalOpenContext {
  eventCategory?: string;
  expectedAttendees?: string;
  additionalDetails?: string;
}

interface ContactModalContextType {
  isOpen: boolean;
  modalContext: ContactModalOpenContext | null;
  openContactModal: (context?: ContactModalOpenContext) => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContext, setModalContext] = useState<ContactModalOpenContext | null>(null);

  const openContactModal = (context: ContactModalOpenContext = {}) => {
    setModalContext(context);
    setIsOpen(true);
  };
  const closeContactModal = () => {
    setIsOpen(false);
    setModalContext(null);
  };

  return (
    <ContactModalContext.Provider value={{ isOpen, modalContext, openContactModal, closeContactModal }}>
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
};
