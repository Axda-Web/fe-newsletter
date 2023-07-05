import { useReducer, createContext, useContext, ReactNode } from "react";

export const EmailAddressContext = createContext<{
  emailAddress: string;
  emailAddressDispatch: React.Dispatch<Action>;
}>({ emailAddress: "", emailAddressDispatch: () => null });

type Action = {
  type: "SET_EMAIL";
  payload: string;
};

const emailAddressReducer = (state: string, action: Action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return action.payload;
    default:
      return state;
  }
};

export const useEmailAdress = () => {
  const { emailAddress } = useContext(EmailAddressContext);
  return emailAddress;
};

export const useEmailAddressDispatch = () => {
  const { emailAddressDispatch } = useContext(EmailAddressContext);
  return emailAddressDispatch;
};

const EmailAddressContextProvider = ({ children }: { children: ReactNode }) => {
  const [emailAddress, emailAddressDispatch] = useReducer(
    emailAddressReducer,
    ""
  );
  return (
    <EmailAddressContext.Provider
      value={{ emailAddress, emailAddressDispatch }}
    >
      {children}
    </EmailAddressContext.Provider>
  );
};

export default EmailAddressContextProvider;
