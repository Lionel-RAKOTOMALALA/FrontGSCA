import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

// Composant pour afficher et modifier le statut d'un élément
const StatusCell = ({ status, onStatusChange, statusOptions }) => {
  // Récupère le nom et la couleur du statut passé en props
  const { name, color } = status || {}; 

  return (
    // Menu pour sélectionner un statut
    <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
      {/* Bouton du menu qui affiche le nom et la couleur du statut actuel */}
      <MenuButton
        h="100%" // Hauteur à 100%
        w="100%" // Largeur à 100%
        textAlign="left" // Alignement du texte à gauche
        p={1.5} // Padding
        bg={color || "transparent"} // Fond du bouton, utilise la couleur du statut ou transparent si aucune couleur
        color="gray.900" // Couleur du texte
      >
        {name} {/* Affiche le nom du statut */}
      </MenuButton>
      <MenuList>
        {/* Option pour sélectionner "Aucun" statut */}
        <MenuItem onClick={() => onStatusChange(null)}>
          <ColorIcon color="red.400" mr={3} /> {/* Icône pour "Aucun" avec une couleur rouge */}
          None {/* Texte pour l'option "Aucun" */}
        </MenuItem>
        {/* Boucle à travers les options de statut pour générer des éléments de menu */}
        {statusOptions.map((statusOption) => (
          <MenuItem
            onClick={() => onStatusChange(statusOption)} // Appelle la fonction pour mettre à jour le statut avec la nouvelle option
            key={statusOption.id} // Clé unique pour chaque élément du menu
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
  // Utilise un Box de Chakra UI pour créer un carré coloré
  <Box w="12px" h="12px" bg={color} borderRadius="3px" {...props} />
);

export default StatusCell; // Exporte le composant StatusCell
