import { Tabs } from "expo-router";
import {  View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import clsx from "clsx";

export default function _Layout() {
  return (
    <Tabs 
     screenOptions={({ route })=> ({
         headerShown: false,
         tabBarShowLabel: false,
         tabBarStyle: {
            position:"absolute",
            bottom:0,
            left:0,
            right: 0,
            height: 70,
            backgroundColor: "#DFD0B8",
            borderRadius: 10,
         },
        
            tabBarIcon: ({ focused }: { focused: boolean })=>{
               let iconName : keyof typeof Ionicons.glyphMap;

         switch( route.name){
                  case "index":
              iconName = focused ? "home" : "home-outline";
              break;
            case "gallery":
              iconName = focused ? "images" : "images-outline";
              break;
            case "bookings":
              iconName = focused ? "calendar" : "calendar-outline";
              break;
            case "profile":
              iconName = focused ? "person" : "person-outline";
              break;
            default:
              iconName = "ellipse";

               }
               return (
                  <View 
                   className = {clsx (
                     "items-center justify-center",
                     focused ? "text-black" : "text-gray-700"
                   )}
                   >
                   <Ionicons
                    name = {iconName}
                    size={24}
                     color={focused ? "#000" : "#333"} />

                   </View>
               )
            }


         
     })}>
        <Tabs.Screen
         name = "index"
         options ={{
            title: "Home",
           
         }}
        />
        <Tabs.Screen
         name = "gallery"
         options ={{
            title: "Gallery",
            
         }}
        />
        <Tabs.Screen
         name = "bookings"
         options ={{
            title: "Bookings",
            
         }}
        />
        <Tabs.Screen
         name = "profile"
         options ={{
            title: "Profile",
            
         }}
        />
        <Tabs.Screen 
          name= "service"
          options={{
            href:null
          }} />
    </Tabs>
  );
}
