import { createContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const AuthInfo = {
    test: "Messsage",
  };

  return (
    <>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
