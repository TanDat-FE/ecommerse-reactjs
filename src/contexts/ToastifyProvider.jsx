import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";

export const ToasContext = createContext();

export default function ToastifyProvider({ children }) {
  const value = { toast };
  return (
    <ToasContext.Provider value={value}>
      {children}
      <ToastContainer />
    </ToasContext.Provider>
  );
}
