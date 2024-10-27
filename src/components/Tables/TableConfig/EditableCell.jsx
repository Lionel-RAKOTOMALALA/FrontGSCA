import { Input } from "@chakra-ui/react"; // Importation du composant Input de Chakra UI
import { useEffect, useState } from "react"; // Importation des hooks useEffect et useState de React

// Composant pour afficher une cellule éditable
const EditableCell = ({ value: initialValue, onChange }) => {
  // État local pour stocker la valeur de la cellule
  const [value, setValue] = useState(initialValue);

  // Fonction appelée lorsque l'input perd le focus (onBlur)
  const onBlur = () => {
    onChange(value); // Appelle la fonction onChange pour mettre à jour la valeur dans le composant parent
  };

  // Synchronise la valeur initiale avec la valeur locale lorsque initialValue change
  useEffect(() => {
    setValue(initialValue); // Met à jour l'état local si la valeur initiale change
  }, [initialValue]);

  return (
    <Input
      value={value} // La valeur de l'input est liée à l'état local
      onChange={(e) => setValue(e.target.value)} // Met à jour l'état local lors de la saisie
      onBlur={onBlur} // Appelle onBlur lorsque l'input perd le focus
      variant="filled" // Variante de style pour le champ de saisie
      size="sm" // Taille du champ de saisie
      w="85%" // Largeur du champ de saisie
      overflow="hidden" // Cache le débordement
      textOverflow="ellipsis" // Affiche des points de suspension si le texte déborde
      whiteSpace="nowrap" // Empêche le texte de se diviser sur plusieurs lignes
    />
  );
};

export default EditableCell; // Exporte le composant EditableCell
