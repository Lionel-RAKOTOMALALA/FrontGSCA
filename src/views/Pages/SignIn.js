import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  Image,
  Container,
  Checkbox,
  Link,
  useColorModeValue,
  HStack,
  Icon,
  Switch,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import signInImage from "assets/img/HotelDesFinancesBg.jpg";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const primaryColor = useColorModeValue("teal.500", "teal.300");
  const secondaryColor = useColorModeValue("teal.600", "teal.400");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.700", "white");
  const ButtonColor = useColorModeValue("blue.500", "blue.500");
  const HoverColor = useColorModeValue("blue.400", "blue.600");
  const bgForm = useColorModeValue("white", "gray.900");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("transparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");

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
          bg="blackAlpha.700"
          p={8}
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
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
            <Text color="whiteAlpha.900" fontSize="xl" maxW="600px">
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
          bg={bgForm}
          opacity={0.95}
          justifyContent="center"
          alignItems="center"
        >
          <Container maxW="sm" p={8}>
            <VStack spacing={4} align="stretch">
              <Box alignSelf="center" mb={4}>
                <Image
                  src={signInImage}
                  alt="Logo"
                  w="100px"
                  h="100px"
                  objectFit="cover"
                  borderRadius="full"
                />
              </Box>

              <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={4}>
                Se connecter avec
              </Text>

              <HStack spacing="15px" justify="center" mb="4">
                <Flex
                  justify="center"
                  align="center"
                  w="75px"
                  h="75px"
                  borderRadius="8px"
                  cursor="pointer"
                  transition="all .25s ease"
                  bg={bgIcons}
                  _hover={{ bg: bgIconsHover }}
                >
                  <Link href="#">
                    <Icon as={FaFacebook} color={colorIcons} w="30px" h="30px" />
                  </Link>
                </Flex>
                <Flex
                  justify="center"
                  align="center"
                  w="75px"
                  h="75px"
                  borderRadius="8px"
                  cursor="pointer"
                  transition="all .25s ease"
                  bg={bgIcons}
                  _hover={{ bg: bgIconsHover }}
                >
                  <Link href="#">
                    <Icon as={FaApple} color={colorIcons} w="30px" h="30px" />
                  </Link>
                </Flex>
                <Flex
                  justify="center"
                  align="center"
                  w="75px"
                  h="75px"
                  borderRadius="8px"
                  cursor="pointer"
                  transition="all .25s ease"
                  bg={bgIcons}
                  _hover={{ bg: bgIconsHover }}
                >
                  <Link href="#">
                    <Icon as={FaGoogle} color={colorIcons} w="30px" h="30px" />
                  </Link>
                </Flex>
              </HStack>

              <Text fontSize="lg" color="gray.500" fontWeight="bold" textAlign="center" mb={0}>
                ou
              </Text>

              <FormControl>
                <FormLabel fontSize="sm" fontWeight="normal">Email</FormLabel>
                <Input type="email" placeholder="Votre email" mb={3} size="lg" />
                <FormLabel fontSize="sm" fontWeight="normal">Mot de passe</FormLabel>
                <InputGroup size="lg" mb={3}>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Votre mot de passe"
                  />
                  <InputRightElement h="full">
                    <Button
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <FormControl display="flex" alignItems="center" mb={3}>
                  <Switch id="remember-login" colorScheme="blue" me="10px" />
                  <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                    Se souvenir de moi
                  </FormLabel>
                </FormControl>
                <Button fontSize="10px" fontWeight="bold" w="100%" h="45" mb={3} bg={ButtonColor} _hover={{ bg: HoverColor }}>
                  SE CONNECTER
                </Button>
              </FormControl>

              <Flex justifyContent="center" alignItems="center" maxW="100%" mt="0px">
                <Text color={textColor} fontWeight="medium">
                  Vous n'avez pas de compte ?
                  <Link color={titleColor} as="span" ms="5px" href="#" fontWeight="bold">
                    S'inscrire
                  </Link>
                </Text>
              </Flex>
            </VStack>
          </Container>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Login;
