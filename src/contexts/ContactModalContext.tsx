import { createContext, useContext, useRef, useState, ReactNode } from "react";

export interface ContactModalOpenContext {
  eventCategory?: string;
  expectedAttendees?: string;
  additionalDetails?: string;
}

interface ContactModalContextType {
  isOpen: boolean;
  modalContext: ContactModalOpenContext | null;
  openContactModal: (context?: ContactModalOpenContext | unknown) => void;
  closeContactModal: () => void;
  restoreContactModalFocus: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

const isContactContext = (v: unknown): v is ContactModalOpenContext =>
  !!v && typeof v === "object" && !("nativeEvent" in (v as object));

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContext, setModalContext] = useState<ContactModalOpenContext | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const openContactModal = (context?: ContactModalOpenContext | unknown) => {
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setModalContext(isContactContext(context) ? context : {});
    setIsOpen(true);
  };
  const closeContactModal = () => {
    setIsOpen(false);
    setModalContext(null);
  };
  const restoreContactModalFocus = () => {
    const returnFocusTo = returnFocusRef.current;
    returnFocusRef.current = null;
    if (returnFocusTo?.isConnected) returnFocusTo.focus();
  };

  return (
    <ContactModalContext.Provider
      value={{ isOpen, modalContext, openContactModal, closeContactModal, restoreContactModalFocus }}
    >
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
