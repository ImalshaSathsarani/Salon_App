import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ChangePassword() {
  return (
    <View
      className="flex-1 pt-16 items-center bg-primary"
    >
        <View className = " flex-row justify-between items-center w-full px-4">
            <Link href = "/profile" asChild>
            <TouchableOpacity className = "w-12 h-12 rounded-full bg-secondary justify-center items-center">
               <Feather name="arrow-left" size = {24} color = "#000000"/>
            </TouchableOpacity>
            </Link>

        <Text className="text-4xl  text-accent ml-5">Change Password</Text>
        <View className = "w-12 h-12"/>

        </View>

     {/* Profile Image */}
                
            
        <Image source = {require('../../assets/images/profile.jpg')} className = "w-32 h-32 rounded-full border-4 border-accent mt-4"/>
        
    {/* User Info Section */}
        
        <Text className = "text-3xl text-accent mt-4">Abc Perera</Text>
        <Text className = "text-1xl text-secondary ">@abcperera</Text>


        {/* Divider */}
         <View className = "w-4/5 mt-4 mb-9 bg-secondary h-[1px]"/>

              <View className = "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
               <Text className= "text-secondary">Current Password</Text>
               <TextInput
                   placeholder = ""/>
           </View>

           <View className = "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
               <Text className= "text-secondary">New Password</Text>
               <TextInput
                   placeholder = ""/>
           </View>

           <View className = "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
               <Text className= "text-secondary">Confirm New Password</Text>
               <TextInput
                   placeholder = ""/>
           </View>


        <View className = "w-4/5 mt-14 mb-4 bg-secondary h-[1px]"/>

         <TouchableOpacity
        className = "mt-5 px-12 py-3  rounded-full"
        style={{ backgroundColor: '#3A0519' }}>
             <Text className = "text-white text-2xl font-semibold">Change</Text>

        </TouchableOpacity>

    </View>
  );
}
