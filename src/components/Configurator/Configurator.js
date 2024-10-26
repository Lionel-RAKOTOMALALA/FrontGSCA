// Imports Chakra
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HSeparator } from "components/Separator/Separator";
import React, { useState } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function ConfigurateurSite(props) {
  const {
    sidebarVariant,
    setSidebarVariant,
    secondary,
    isOpen,
    onClose,
    fixed,
    ...rest
  } = props;
  const [switched, setSwitched] = useState(props.isChecked);

  const { colorMode, toggleColorMode } = useColorMode();

  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "white"
  );
  let colorButton = useColorModeValue("white", "gray.700");
  const secondaryButtonBg = useColorModeValue("white", "transparent");
  const secondaryButtonBorder = useColorModeValue("gray.700", "white");
  const secondaryButtonColor = useColorModeValue("gray.700", "white");
  const bgDrawer = useColorModeValue("white", "navy.800");
  const settingsRef = React.useRef();

  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement="right"
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}
      >
        <DrawerContent bg={bgDrawer}>
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton />
            <Text fontSize="xl" fontWeight="bold" mt="16px">
              Configurateur de Site
            </Text>
            <Text fontSize="md" mb="16px">
              Personnalisez votre tableau de bord.
            </Text>
            <HSeparator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
              <Flex justifyContent="space-between" mb="16px">
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Barre de navigation fixe
                </Text>
                <Switch
                  colorScheme="blue"
                  isChecked={switched}
                  onChange={() => {
                    props.onSwitch(!switched);
                    setSwitched(!switched);
                  }}
                />
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                mb="24px"
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Mode Sombre/Clair
                </Text>
                <Button
                  onClick={toggleColorMode}
                  color={colorMode === "light" ? "Sombre" : "Clair"}
                >
                  Basculer vers {colorMode === "light" ? "Sombre" : "Clair"}
                </Button>
              </Flex>

              <HSeparator />
              <Box mt="24px">
                <Box>
                  <Link
                    href="https://votresite.com/configuration"
                    w="100%"
                    mb="16px"
                  >
                    <Button
                      w="100%"
                      bg={bgButton}
                      color={colorButton}
                      _hover={{ opacity: 0.8 }}
                    >
                      En savoir plus
                    </Button>
                  </Link>
                </Box>
              </Box>
              <Flex mt="24px" justifyContent="center">
                <Link href="https://www.facebook.com" isExternal>
                  <FaFacebook size="20px" color="#3b5998" />
                </Link>
                <Link href="https://www.twitter.com" isExternal ml="20px">
                  <FaTwitter size="20px" color="#1DA1F2" />
                </Link>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
