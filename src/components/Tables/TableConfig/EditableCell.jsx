import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// Composant pour afficher une cellule éditable
const EditableCell = ({ value: initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue); // État local pour la valeur

  // Appelle la fonction onChange lors du flou de l'entrée
  const onBlur = () => {
    onChange(value); // Met à jour la valeur dans le composant parent
  };

  // Synchronise la valeur initiale si elle change
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)} // Met à jour l'état local
      onBlur={onBlur} // Gère le flou
      variant="filled"
      size="sm"
      w="85%"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    />
  );
};

export default EditableCell;
