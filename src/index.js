  import React from "react";
  import ReactDOM from "react-dom/client"; // Utiliser ReactDOM.createRoot pour la version 18+
  import { HashRouter, Routes, Route, Navigate } from "react-router-dom"; // Importer Routes et Navigate

  import AuthLayout from "layouts/Auth.js";
  import axios from "axios";
  import AdminLayout from "./layouts/Admin.js";
  import RTLLayout from "layouts/RTL.js"; // Chakra imports
  import { ChakraProvider } from "@chakra-ui/react";
  // Custom Chakra theme
  import theme from "./theme/theme.js";
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

  // Créer un root pour la nouvelle version de ReactDOM
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <ChakraProvider theme={theme} resetCss={false} position="relative">
      <HashRouter>
        <Routes>
          <Route path={`/auth/*`} element={<AuthLayout />} />
          <Route path={`/admin/*`} element={<AdminLayout />} /> {/* Utilisez /* pour rendre les sous-routes */}
          <Route path={`/rtl`} element={<RTLLayout />} />
          <Route path={`/`} element={<Navigate to="/admin/dashboard" />} /> {/* Utiliser Navigate au lieu de Redirect */}
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
