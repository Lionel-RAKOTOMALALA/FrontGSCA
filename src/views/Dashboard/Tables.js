import React from "react";
import { Flex, useColorModeValue, Text, Button } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import EmployeeTable from "../../components/Tables/Employe/EmployeeTable"; // Assurez-vous que le chemin est correct
import { employeeData } from "variables/general"; // Assurez-vous que cela pointe vers le bon fichier

function Tables() {
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  const cardBg = useColorModeValue("white", "navy.800");
  const cardShadow = useColorModeValue(
    "0px 3px 5px rgba(0, 0, 0, 0.02)",
    "0px 3px 5px rgba(255, 255, 255, 0.02)"
  );
  const cardBgGradient = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
  );

  // Couleurs spécifiques au bouton en fonction du mode
  const buttonBg = useColorModeValue("blue.500", "white");
  const buttonColor = useColorModeValue("white", "blue.500");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card
        p="0px"
        maxW={{ sm: "320px", md: "100%" }}
        bg={cardBg}
        boxShadow={cardShadow}
        overflowX={{ sm: "scroll", xl: "hidden" }}
      >
        <Flex align="center" justify="space-between" p="22px">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            Informations sur les Employés
          </Text>
          <Button 
            variant="primary" 
            maxH="30px" 
            color={buttonColor} 
            bg={buttonBg}
            _hover={{ bg: useColorModeValue("blue.600", "gray.100") }}
          >
            Ajouter
          </Button>
        </Flex>
        <CardBody bg={cardBg}>
          <EmployeeTable employeeData={employeeData} />
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
