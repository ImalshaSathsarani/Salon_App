import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return <Stack>
     <Stack.Screen
      name = "(tabs)"
      options ={{
        headerShown: false,
      }} 
      />
      <Stack.Screen 
      name = "profile/editProfile"
      options ={{
        headerShown: false,
      }} 
      />
       <Stack.Screen 
      name = "profile/changePassword"
      options ={{
        headerShown: false,
      }} 
      />

       <Stack.Screen 
      name = "profile/myBookings"
      options ={{
        headerShown: false,
      }} 
      />

      <Stack.Screen 
      name = "profile/settings"
      options ={{
        headerShown: false,
      }} 
      />

       <Stack.Screen 
      name = "profile/help"
      options ={{
        headerShown: false,
      }} 
      />


  </Stack>;
}
