import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

// Composant pour la pagination
const Pagination = ({
  pageIndex, // Index de la page actuelle
  pageOptions, // Options de pagination, c'est-à-dire le nombre total de pages
  nextPage, // Fonction pour passer à la page suivante
  previousPage, // Fonction pour revenir à la page précédente
  canNextPage, // Indicateur pour savoir si une page suivante est disponible
  canPreviousPage // Indicateur pour savoir si une page précédente est disponible
}) => (
  // Utilise un Flex pour disposer les éléments horizontalement
  <Flex justifyContent="space-between" alignItems="center" mt={4}>
    {/* Bouton pour aller à la page précédente */}
    <Button onClick={previousPage} disabled={!canPreviousPage}>
      {"<"} {/* Flèche vers la page précédente */}
    </Button>
    
    {/* Affiche la page actuelle et le nombre total de pages */}
    <Text>Page {pageIndex + 1} sur {pageOptions.length}</Text> {/* Affiche la page actuelle */}
    
    {/* Bouton pour aller à la page suivante */}
    <Button onClick={nextPage} disabled={!canNextPage}>
      {">"} {/* Flèche vers la page suivante */}
    </Button>
  </Flex>
);

export default Pagination; // Exporte le composant Pagination
