import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Progress,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import avatar5 from "assets/img/avatars/avatar5.png";
import bgProfile from "assets/img/BackgroundCard1.png";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCube,
  FaEnvelope,
  FaIdCard,
  FaMapMarkerAlt,
  FaPhone,
  FaShieldAlt,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

function Profile() {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");

  const iconBoxInside = useColorModeValue("white", "white");
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconRed = useColorModeValue("red.500", "red.500");

  return (
    <Flex direction='column'>
      <Box
        mb={{ sm: "205px", md: "75px", xl: "70px" }}
        borderRadius='15px'
        px='0px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        align='center'
      >
        <Box
          bgImage={bgProfile}
          w='100%'
          h='300px'
          borderRadius='25px'
          bgPosition='50%'
          bgRepeat='no-repeat'
          position='relative'
          display='flex'
          justifyContent='center'
        >
          <Flex
            direction={{ sm: "column", md: "row" }}
            mx='1.5rem'
            maxH='330px'
            w={{ sm: "90%", xl: "95%" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            align='center'
            backdropFilter='saturate(200%) blur(50px)'
            position='absolute'
            boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.02)'
            border='2px solid'
            borderColor={borderProfileColor}
            bg={bgProfile}
            p='24px'
            borderRadius='20px'
            transform={{
              sm: "translateY(45%)",
              md: "translateY(110%)",
              lg: "translateY(160%)",
            }}
          >
            <Flex
              align='center'
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
            >
              <Avatar
                me={{ md: "22px" }}
                src={avatar5}
                w='80px'
                h='80px'
                borderRadius='15px'
              />
              <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color={textColor}
                  fontWeight='bold'
                  ms={{ sm: "8px", md: "0px" }}
                >
                  Jean Dupont
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={emailColor}
                  fontWeight='semibold'
                >
                  Agent de sécurité publique
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}
            >
              <Button p='0px' bg='transparent' variant='no-effects'>
                <Flex
                  align='center'
                  w={{ sm: "100%", lg: "135px" }}
                  bg={colorMode === "dark" ? "navy.900" : "#fff"}
                  borderRadius='8px'
                  justifyContent='center'
                  py='10px'
                  boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.06)'
                  cursor='pointer'
                >
                  <Icon color={textColor} as={FaCube} me='6px' />
                  <Text fontSize='xs' color={textColor} fontWeight='bold'>
                    APERÇU
                  </Text>
                </Flex>
              </Button>
              <Button p='0px' bg='transparent' variant='no-effects'>
                <Flex
                  align='center'
                  w={{ lg: "135px" }}
                  borderRadius='15px'
                  justifyContent='center'
                  py='10px'
                  mx={{ lg: "1rem" }}
                  cursor='pointer'
                >
                  <Icon color={textColor} as={IoDocumentsSharp} me='6px' />
                  <Text fontSize='xs' color={textColor} fontWeight='bold'>
                    DOCUMENTS
                  </Text>
                </Flex>
              </Button>
              <Button p='0px' bg='transparent' variant='no-effects'>
                <Flex
                  align='center'
                  w={{ lg: "135px" }}
                  borderRadius='15px'
                  justifyContent='center'
                  py='10px'
                  cursor='pointer'
                >
                  <Icon color={textColor} as={FaIdCard} me='6px' />
                  <Text fontSize='xs' color={textColor} fontWeight='bold'>
                    IDENTITÉ
                  </Text>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        <Card p='16px'>
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Informations Personnelles
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column'>
              <Flex align='center' mb='18px'>
                <Icon as={FaIdCard} me='4px' color={iconBlue} />
                <Text
                  fontSize='sm'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'
                >
                  Nom complet:{" "}
                </Text>
                <Text fontSize='sm' color='gray.400' fontWeight='400'>
                  Jean Dupont
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Icon as={FaPhone} me='4px' color={iconBlue} />
                <Text
                  fontSize='sm'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'
                >
                  Téléphone:{" "}
                </Text>
                <Text fontSize='sm' color='gray.400' fontWeight='400'>
                  +33 6 12 34 56 78
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Icon as={FaEnvelope} me='4px' color={iconBlue} />
                <Text
                  fontSize='sm'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'
                >
                  Email:{" "}
                </Text>
                <Text fontSize='sm' color='gray.400' fontWeight='400'>
                  jean.dupont@srsp.fr
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Icon as={FaMapMarkerAlt} me='4px' color={iconBlue} />
                <Text
                  fontSize='sm'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'
                >
                  Adresse:{" "}
                </Text>
                <Text fontSize='sm' color='gray.400' fontWeight='400'>
                  123 Rue de la Paix, 75001 Paris
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Card p='16px'>
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Informations Professionnelles
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column'>
              <Flex align='center' mb='18px'>
                <Icon as={FaBriefcase} me='4px' color={iconTeal} />
                <Text
                  fontSize='sm'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'
                >
                  Poste actuel:{" "}
                </Text>
                <Text fontSize='sm' color='gray.400' fontWeight='400'>
                  Agent de sécurité publique
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Icon as={FaCalendarAlt} me='4px' color={iconTeal} />
                <Text
                  fontSize='sm'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'
                >
                  Date d'entrée:{" "}
                </Text>
                <Text fontSize='sm' color='gray.400' fontWeight='400'>
                  15 mars 2015
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Icon as={FaShieldAlt} me='4px' color={iconTeal} />
                <Text
                  fontSize='sm'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'
                >
                  Statut:{" "}
                </Text>
                <Text fontSize='sm' color='gray.400' fontWeight='400'>
                  Actif
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Icon as={FaCube} me='4px' color={iconTeal} />
                <Text
                  fontSize='sm'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'
                >
                  Spécialité:{" "}
                </Text>
                <Text fontSize='sm' color='gray.400' fontWeight='400'>
                  Gestion de crise
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Card p='16px'>
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Statistiques
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <SimpleGrid columns={2} gap='20px'>
              <Stat>
                <Flex>
                  <StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='.1rem'>
                    Années de service
                  </StatLabel>
                  <Flex align='center'>
                    <Icon as={FaCalendarAlt} color={iconRed} w='15px' h='15px' />
                  </Flex>
                </Flex>
                <StatNumber fontSize='lg' color={textColor}>
                  8
                </StatNumber>
                <Box my='.5rem'>
                  <Progress colorScheme='red' size='xs' value={80} borderRadius='15px' />
                </Box>
              </Stat>
              <Stat>
                <Flex>
                  <StatLabel fontSize='sm' color='gray.400' fontWeight='bold' pb='.1rem'>
                    Missions réussies
                  </StatLabel>
                  <Flex align='center'>
                    <Icon as={FaShieldAlt} color={iconBlue} w='15px' h='15px' />
                  </Flex>
                </Flex>
                <StatNumber fontSize='lg' color={textColor}>
                  95%
                </StatNumber>
                <Box my='.5rem'>
                  <Progress colorScheme='blue' size='xs' value={95} borderRadius='15px' />
                </Box>
              </Stat>
            </SimpleGrid>
          </CardBody>
        </Card>
      </Grid>
      <Card p='16px' my='24px'>
        <CardHeader p='12px 5px' mb='12px'>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            Résumé Professionnel
          </Text>
        </CardHeader>
        <CardBody px='5px'>
          <Text fontSize='md' color='gray.400' fontWeight='400'>
            Agent SRSP depuis 2015, spécialisé dans la gestion de projets de sécurité publique.
            Expérience dans la coordination d'équipes multidisciplinaires et la mise en œuvre de
            protocoles de sécurité avancés. Compétences clés en gestion de crise, communication
            d'urgence et analyse de risques. Reconnu pour son leadership et sa capacité à prendre
            des décisions rapides dans des situations critiques.
          </Text>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Profile;