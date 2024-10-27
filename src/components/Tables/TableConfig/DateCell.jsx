import { forwardRef } from "react"; // Importation de forwardRef pour passer les refs
import { Box, Center, Icon } from "@chakra-ui/react"; // Importation des composants de Chakra UI
import DatePicker from "react-datepicker"; // Importation du sélecteur de date
import "react-datepicker/dist/react-datepicker.css"; // Importation du style CSS pour le sélecteur de date
import CalendarIcon from "../../../assets/icons/CalendarIcon"; // Importation de l'icône de calendrier

// Composant personnalisé pour l'entrée de date
const DateCustomInput = forwardRef(({ value, onClick, clearDate }, ref) => (
  <Center ref={ref} onClick={onClick} cursor="pointer">
    {value ? ( // Vérifie si une date est sélectionnée
      <>
        {value} {/* Affiche la date au format local */}
        <Box
          pos="absolute"
          right={3}
          fontSize="md"
          color="red.300"
          onClick={(e) => {
            e.stopPropagation(); // Empêche l'événement de clic de se propager
            clearDate(); // Appelle la fonction pour effacer la date
          }}
        >
          &times; {/* Icône pour supprimer la date (croix) */}
        </Box>
      </>
    ) : (
      <Icon as={CalendarIcon} fontSize="xl" /> // Icône de calendrier lorsque aucune date n'est sélectionnée
    )}
  </Center>
));

// Composant principal pour afficher un sélecteur de date
const DateCell = ({ value, row, column, updateData }) => {
  return (
    <DatePicker
      wrapperClassName="date-wrapper" // Classe CSS pour le wrapper du sélecteur de date
      dateFormat="MMM d" // Format d'affichage de la date
      selected={value instanceof Date ? value : null} // Vérifie que la valeur est une instance de Date
      onChange={(date) => updateData(row.index, column.id, date)} // Met à jour la date sélectionnée
      customInput={
        <DateCustomInput
          clearDate={() => updateData(row.index, column.id, null)} // Passe la fonction pour effacer la date
          value={value} // Passe la date sélectionnée
        />
      }
    />
  );
};

export default DateCell; // Exporte le composant DateCell
