import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const {width, height} =Dimensions.get("window");
export default function EditProfile() {
  return (
    <>
    <SafeAreaView className = "flex-1 bg-primary">
        <ScrollView
        contentContainerStyle={{paddingTop:15, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        className = "flex-1 px-4"
    >
        <View className = "flex-row items-center justify-between mt-4 mb-2 w-full">
            <Link href="/profile" asChild>
            <TouchableOpacity className = "w-12 h-12 rounded-full bg-secondary justify-center items-center">
                <Feather name="arrow-left" size={24} color="#000000"/>
            </TouchableOpacity>
            </Link>
           <Text className="text-5xl font-semibold text-accent ">Edit Profile</Text>
           <View className = "w-12 h-12" /> {/* Dummy spacer to balance the row layout */}
        </View>
        

        <View className = "relative mt-2 items-center">
            <Image source={require('../../assets/images/profile.jpg')} className=" rounded-full border-4 border-accent"
            style = {{
              width: width*0.3,
              height: width*0.3,
              marginTop:20
            }} />

            <TouchableOpacity className = "absolute bottom-0 right-[35%] w-10 h-10 bg-secondary rounded-full justify-center items-center border-2 border-primary">
                <Feather name="camera" size={22} color="#000000" />
            </TouchableOpacity>
        </View>
        

        <Text className = "text-xl text-accent mt-4 text-center">Abc Perera</Text>
      <Text className = "text-sm text-secondary text-center ">@abcperera</Text>

      <View className = "w-full my-6 bg-secondary h-[1px] "/>

      
      <View className="w-full space-y-4 flex-1 justify-center">
         <View className = " border border-secondary rounded-xl px-4 py-2 mb-3">
       <Text className = "text-secondary mb-1">Full Name</Text>
       <TextInput
       placeholder="Abc Perera"
       className= "text-accent"
       />
      </View>
      
       <View className="flex-row  space-x-4 mb-3">
        <View className = "flex-1 border border-secondary rounded-xl px-4 py-2">
            <Text className = "text-secondary mb-1">Gender</Text>
            <TextInput
           placeholder = "Female"
           className="text-accent"/>
        </View>

        <View className = "flex-1 border border-secondary rounded-xl px-4 py-2 ml-2">
            <Text className = "text-secondary mb-1">Birthday</Text>
            
        <TextInput 
            placeholder="01/01/2003"
            className="text-accent"/>
        </View> 
        </View>
        


       <View className= " border border-secondary rounded-xl px-4 py-2 mb-3">
        <Text className = "text-secondary mb-1">Phone Number</Text>
        <TextInput 
          placeholder="0123456789"
          keyboardType="phone-pad"
          className="text-accent"/>

       </View>

        <View className= "border border-secondary rounded-xl px-4 py-2 mb-3">
        <Text className = "text-secondary mb-1">Email</Text>
        <TextInput 
          placeholder="abcperera@email.com"
          keyboardType="email-address"
          className= "text-accent"/>

       </View>

        <View className= "border border-secondary rounded-xl px-4 py-2">
        <Text className = "text-secondary mb-1">User name</Text>
        <TextInput 
          placeholder="@abcperera"
          keyboardType="default"
          className="text-accent"/>

       </View>
      </View>
      


        <View className = "w-full bg-secondary h-[1px] my-6"/>

        <TouchableOpacity
        className = "mt-4 px-12 py-3  rounded-full self-center"
        style={{ backgroundColor: '#3A0519' }}>
             <Text className = "text-white text-xl font-semibold">Save</Text>

        </TouchableOpacity>
           

     
    </ScrollView>
    </SafeAreaView>
   
    </>
  );
}
