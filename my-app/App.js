import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  Box,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import { useFonts } from "expo-font";
import NativeBaseIcon from "./components/NativeBaseIcon";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const fullName = "Hossam sulleman";

export default function App() {
  let [fontsLoaded] = useFonts({
    FrancoisOne: require("./assets/fonts/FrancoisOne/FrancoisOne.ttf"),
    OpenSans: require("./assets/fonts/OpenSans/OpenSans.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans/OpenSansBold.ttf"),
    Shizuru: require("./assets/fonts/Shizuru/Shizuru.ttf"),
  });
  return (
    <NativeBaseProvider>
      <HStack justifyContent="space-between">
        <HStack alignItems="center">
          <Box h="12" w="12" mr="12">
            <Text>H</Text>
          </Box>
        </HStack>

        <HStack>
          <Text>Resume</Text>
        </HStack>
      </HStack>
      <Center flex="1">
        <VStack w="70%" alignItems="center" justifyContent="center" space={5}>
          <Text fontSize="4xl">👋 Hi, I am ${fullName}!</Text>
          <Text textAlign="center" fontSize="6xl">
            UX Designer creating unique and human centered digital experiences
          </Text>
          <Text fontSize="2xl">
            Currently designing experiences at Shout Networking
          </Text>
          <Text fontSize="5xl">My Work</Text>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
