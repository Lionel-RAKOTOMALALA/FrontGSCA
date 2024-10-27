import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

// Composant pour afficher et modifier le statut d'un élément
const StatusCell = ({ status, onStatusChange, statusOptions }) => {
  const { name, color } = status || {}; // Récupère le nom et la couleur du statut

  return (
    <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
      <MenuButton
        h="100%"
        w="100%"
        textAlign="left"
        p={1.5}
        bg={color || "transparent"}
        color="gray.900"
      >
        {name} {/* Affiche le nom du statut */}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onStatusChange(null)}>
          <ColorIcon color="red.400" mr={3} /> {/* Icône pour "Aucun" */}
          None {/* Texte pour l'option "Aucun" */}
        </MenuItem>
        {statusOptions.map((statusOption) => (
          <MenuItem
            onClick={() => onStatusChange(statusOption)} // Appelle la fonction pour mettre à jour le statut
            key={statusOption.id} // Clé unique pour chaque élément
          >
            <ColorIcon color={statusOption.color} mr={3} /> {/* Icône colorée pour le statut */}
            {statusOption.name} {/* Affiche le nom du statut */}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

// Composant pour afficher un carré coloré
const ColorIcon = ({ color, ...props }) => (
  <Box w="12px" h="12px" bg={color} borderRadius="3px" {...props} />
);

export default StatusCell;
