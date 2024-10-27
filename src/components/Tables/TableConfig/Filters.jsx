import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import SearchIcon from "../../../assets/icons/SearchIcon";
import FilterPopover from "./FilterPopover";

// Composant pour les filtres de recherche
const Filters = ({ columnFilters, setColumnFilters, filterPlaceholder, data }) => {
  const filterValue = columnFilters.find((f) => f.id === "filter")?.value || ""; // Filtre actuel

  // Met à jour le filtre
  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev.filter((f) => f.id !== id).concat({ id, value })
    );

  return (
    <HStack mb={6} spacing={3}>
      <InputGroup size="sm" maxW="12rem">
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          type="text"
          variant="filled"
          placeholder={filterPlaceholder} // Placeholder dynamique
          borderRadius={5}
          value={filterValue}
          onChange={(e) => onFilterChange("filter", e.target.value)} // Gère la mise à jour du filtre
        />
      </InputGroup>
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

export default Filters;
