import { forwardRef } from "react";
import { Box, Center, Icon } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../../../assets/icons/CalendarIcon";

// Composant personnalisé pour l'entrée de date
const DateCustomInput = forwardRef(({ value, onClick, clearDate }, ref) => (
  <Center ref={ref} onClick={onClick} cursor="pointer">
    {value ? (
      <>
        {value}
        <Box
          pos="absolute"
          right={3}
          fontSize="md"
          color="red.300"
          onClick={(e) => {
            e.stopPropagation(); // Empêche la propagation du clic
            clearDate(); // Appelle la fonction pour effacer la date
          }}
        >
          &times; {/* Icône pour supprimer la date */}
        </Box>
      </>
    ) : (
      <Icon as={CalendarIcon} fontSize="xl" /> // Icône de calendrier
    )}
  </Center>
));

// Composant principal pour afficher un sélecteur de date
const DateCell = ({ value, onChange, clearDate }) => (
  <DatePicker
    wrapperClassName="date-wrapper"
    dateFormat="MMM d"
    selected={value} // Date sélectionnée
    onChange={onChange} // Fonction de mise à jour de la date
    customInput={
      <DateCustomInput
        clearDate={clearDate} // Fonction pour effacer la date
      />
    }
  />
);

export default DateCell;
