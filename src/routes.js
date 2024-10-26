// importation
import React, { Component } from 'react';

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Tableau de bord",
    icon: <HomeIcon color='inherit' />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tableaux",
    icon: <StatsIcon color='inherit' />,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Facturation",
    icon: <CreditIcon color='inherit' />,
    layout: "/admin",
  },
  {
    path: "/support-page", // Remplacez le chemin si nécessaire
    name: "Assistance",
    icon: <SupportIcon color='inherit' />,
    layout: "/admin", // Changement de layout
  },
  {
    name: "Mon Espace Personnel",  
    category: "user",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profil",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        layout: "/admin",
      },
    ],
  },
];

export default dashRoutes;
