import React from "react";
import { Flex, useColorModeValue, Text } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import EmployeeTable from "../../components/Tables/Employe/EmployeeTable"; // Assurez-vous que le chemin est correct
import { employeeData } from "variables/general"; // Assurez-vous que cela pointe vers le bon fichier
import { useReactTable } from "@tanstack/react-table";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Table des Employés
          </Text>
        </CardHeader>
        <CardBody>
          <EmployeeTable employeeData={employeeData} />
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
