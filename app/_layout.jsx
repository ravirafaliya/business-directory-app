import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/clerk-expo";

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SignedIn>

      <SignedOut>
        <Text>Logout</Text>
      </SignedOut>
    </ClerkProvider>
  );
}
