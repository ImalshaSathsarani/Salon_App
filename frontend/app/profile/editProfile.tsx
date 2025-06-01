import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function EditProfile() {
  return (
    <ScrollView
      className="flex-1  bg-primary"
        contentContainerStyle={{ paddingTop: 64, paddingBottom: 40, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
    >
        <View className = "flex-row items-center justify-between pl-5 w-full">
            <Link href="/profile" asChild>
            <TouchableOpacity className = "w-12 h-12 rounded-full bg-secondary justify-center items-center">
                <Feather name="arrow-left" size={24} color="#000000"/>
            </TouchableOpacity>
            </Link>
           <Text className="text-5xl  text-accent ">Edit Profile</Text>
           <View className = "w-12 h-12" /> {/* Dummy spacer to balance the row layout */}
        </View>
        

        <View className = "relative mt-4">
            <Image source={require('../../assets/images/profile.jpg')} className="w-32 h-32 rounded-full border-4 border-accent mt-4" />

            <TouchableOpacity className = "absolute bottom-0 right-0 w-10 h-10 bg-secondary rounded-full justify-center items-center border-2 border-primary">
                <Feather name="camera" size={22} color="accent" />
            </TouchableOpacity>
        </View>
        

        <Text className = "text-3xl text-accent mt-4">Abc Perera</Text>
      <Text className = "text-1xl text-secondary ">@abcperera</Text>

      <View className = "w-4/5 mt-4 bg-secondary h-[1px]"/>

      
      <View className = "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
       <Text className = "text-secondary ">Full Name</Text>
       <TextInput
       placeholder="Abc Perera"
       />
      </View>
      
       <View className="flex-row w-4/5 space-x-4 mt-4">
        <View className = "flex-1 border border-secondary rounded-xl px-4 py-2">
            <Text className = "text-secondary">Gender</Text>
            <TextInput
           placeholder = "Female"/>
        </View>

        <View className = "flex-1 border border-secondary rounded-xl px-4 py-2 ml-2">
            <Text className = "text-secondary">Birthday</Text>
            
        <TextInput 
            placeholder="01/01/2003"/>
        </View> 
        </View>
        


       <View className= "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
        <Text className = "text-secondary">Phone Number</Text>
        <TextInput 
          placeholder="0123456789"
          keyboardType="phone-pad"/>

       </View>

        <View className= "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
        <Text className = "text-secondary">Email</Text>
        <TextInput 
          placeholder="abcperera@email.com"
          keyboardType="email-address"/>

       </View>

        <View className= "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
        <Text className = "text-secondary">User name</Text>
        <TextInput 
          placeholder="@abcperera"
          keyboardType="default"/>

       </View>


        <View className = "w-4/5 mt-5 bg-secondary h-[1px]"/>

        <TouchableOpacity
        className = "mt-4 px-12 py-3  rounded-full"
        style={{ backgroundColor: '#3A0519' }}>
             <Text className = "text-white text-2xl font-semibold">Save</Text>

        </TouchableOpacity>
           

     
    </ScrollView>
  );
}
