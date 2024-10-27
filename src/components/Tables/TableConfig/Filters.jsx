import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import SearchIcon from "../../../assets/icons/SearchIcon"; // Icône de recherche personnalisée
import FilterPopover from "./FilterPopover"; // Composant pour le popover de filtre

// Composant pour les filtres de recherche
const Filters = ({ columnFilters, setColumnFilters, filterPlaceholder, data }) => {
  // Récupère la valeur du filtre actuel, ou une chaîne vide si aucun filtre n'est appliqué
  const filterValue = columnFilters.find((f) => f.id === "filter")?.value || ""; 

  // Met à jour le filtre lorsqu'une nouvelle valeur est saisie
  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev.filter((f) => f.id !== id).concat({ id, value }) // Met à jour la liste des filtres
    );

  return (
    <HStack mb={6} spacing={3}> {/* Dispose les éléments horizontalement */}
      <InputGroup size="sm" maxW="12rem"> {/* Groupe d'entrée pour la recherche */}
        <InputLeftElement pointerEvents="none"> {/* Icône à gauche de l'input */}
          <Icon as={SearchIcon} /> {/* Icône de recherche */}
        </InputLeftElement>
        <Input
          type="text"
          variant="filled" // Style de remplissage
          placeholder={filterPlaceholder} // Placeholder dynamique
          borderRadius={5} // Arrondi des coins de l'input
          value={filterValue} // Valeur actuelle du filtre
          onChange={(e) => onFilterChange("filter", e.target.value)} // Gère la mise à jour du filtre
        />
      </InputGroup>
      {/* Composant pour le popover de filtre */}
      <FilterPopover
        data={data} // Données passées au popover
        renderItem={(item) => (
          <div>
            {/* Ici, vous pouvez définir comment chaque élément doit être rendu */}
            {item.name} - {item.position} 
          </div>
        )}
      />
    </HStack>
  );
};

export default Filters; // Exporte le composant Filters
