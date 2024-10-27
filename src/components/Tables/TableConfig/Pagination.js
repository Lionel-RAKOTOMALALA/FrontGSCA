import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

// Composant pour la pagination
const Pagination = ({
  pageIndex,
  pageOptions,
  nextPage,
  previousPage,
  canNextPage,
  canPreviousPage
}) => (
  <Flex justifyContent="space-between" alignItems="center" mt={4}>
    <Button onClick={previousPage} disabled={!canPreviousPage}>
      {"<"} {/* Flèche vers la page précédente */}
    </Button>
    <Text>Page {pageIndex + 1} sur {pageOptions.length}</Text> {/* Affiche la page actuelle */}
    <Button onClick={nextPage} disabled={!canNextPage}>
      {">"} {/* Flèche vers la page suivante */}
    </Button>
  </Flex>
);

export default Pagination;
