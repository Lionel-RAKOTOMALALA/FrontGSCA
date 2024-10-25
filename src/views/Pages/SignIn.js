import React from "react";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  Image,
  Container,
  Checkbox,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import signInImage from "assets/img/HotelDesFinancesBg.jpg";

import { FaGoogle, FaApple } from "react-icons/fa"; // Import Google and Apple icons



function Login() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const primaryColor = useColorModeValue("teal.500", "teal.300");
  const secondaryColor = useColorModeValue("teal.600", "teal.400");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.700", "white");
  const ButtonColor = useColorModeValue("blue.500", "blue.500");
  const HoverColor = useColorModeValue("blue.400", "blue.600") ;

  return (
    <Flex h="100vh" w="100vw" overflow="hidden">
      <Box position="relative" w="100%" h="100%">
        <Image
          src={signInImage}
          alt="Background"
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="blackAlpha.600"
          p={8}
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"  // Optionnel pour centrer le texte à l'intérieur du Box
        >
          <Box
            position="absolute"
            top="50%"
            left="20%"
            transform="translate(-50%, -50%)"
            w="100%"
            maxW="600px"
            
          >
            <Text fontSize="6xl" color={ButtonColor} fontWeight="bold" mb={6}>
              BIENVENU
            </Text>
            <Text color="white" fontSize="xl" maxW="600px">
              Nous sommes ravis de vous accueillir sur notre plateforme.
              Connectez-vous pour accéder à votre compte et profiter de nos services.
            </Text>
          </Box>

        </Box>


        {/* Section de connexion */}
        <Flex
          position="absolute"
          top={0}
          right={0}
          w={["100%", "100%", "50%", "40%"]}
          h="100%"
          bg="white"
          opacity={0.9}
          justifyContent="center"
          alignItems="center"
        >
          <Container maxW="sm" p={8}>
            <VStack spacing={8} align="stretch">
              <Box alignSelf="center" mb={6}>
                <Image
                  src={signInImage}
                  alt="Logo"
                  w="100px"
                  h="100px"
                  objectFit="cover"
                  borderRadius="full"
                />
              </Box>

              <FormControl>
                <FormLabel color={textColor}>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Entrez votre email"
                  borderColor="gray.300"
                  _hover={{ borderColor: borderColor }}
                  _focus={{ borderColor: borderColor, boxShadow: `0 0 0 1px ${primaryColor}` }}
                />
              </FormControl>
              <FormControl>
                <FormLabel color={textColor}>Mot de passe</FormLabel>
                <Input
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  borderColor="gray.300"
                  _hover={{ borderColor: borderColor }}
                  _focus={{ borderColor: borderColor, boxShadow: `0 0 0 1px ${primaryColor}` }}
                />
              </FormControl>
              <Button colorScheme="teal" size="lg" bg={ButtonColor} _hover={{ bg: HoverColor }}>
                Se connecter
              </Button>
              <Flex justify="space-between" align="center">
                <Checkbox colorScheme="teal">Se souvenir de moi</Checkbox>
                <Link color={ButtonColor  } fontSize="sm">
                  Mot de passe oublié ?
                </Link>
              </Flex>
              <Text color={textColor} textAlign="center">
                Vous n'avez pas de compte ?{" "}
                <Link color={ButtonColor}>S'inscrire</Link>
              </Text>
              <Text color={textColor} textAlign="center" fontWeight="bold">
                Ou
              </Text>
              <Flex justify="center" gap={4}>
              <Button
                leftIcon={<FaGoogle />}
                variant="outline"
                color={ButtonColor}
              >
                Google
              </Button>
              <Button
                leftIcon={<FaApple />}
                variant="outline"
                color={ButtonColor}
              >
                Apple
              </Button>
            </Flex>
            </VStack>
          </Container>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Login;
