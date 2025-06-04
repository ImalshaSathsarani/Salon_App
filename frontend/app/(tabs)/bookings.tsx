import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View ,Dimensions,
  useWindowDimensions,
  SafeAreaView} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function Bookings() {

  const [selectedService, setSelectedService] = useState("abc");
  const { width } = useWindowDimensions();

  const containerWidth = width * 0.9; 
  const spacerSize = width * 0.1;
  return (

      <SafeAreaView style={{ flex: 1, backgroundColor: "#F0F0F0" }}>

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
             <Text className="text-5xl  text-accent ">Booking Form</Text>
             <View className = "w-12 h-12" /> {/* Dummy spacer to balance the row layout */}
          </View>

          <View className = "w-12 h-12" />
          
          <View className="w-4/5 mt-2 border border-secondary rounded-xl px-4 py-2">
            <Text className="text-2xl">Services</Text>
            <Picker
              selectedValue={selectedService}
              onValueChange={(itemValue) => setSelectedService(itemValue)}
              dropdownIconColor="#000000"
              style={{ color: "black" }}
            >
              <Picker.Item label="Abc" value="abc" />
              <Picker.Item label="Xyz" value="xyz" />
              <Picker.Item label="Pqr" value="pqr" />
            </Picker>
          </View>


      <View className = "w-12 h-6" />
      <View className = "w-4/5 mt-5 bg-secondary h-[1px]"/>
        
        
        <View className = "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
         <Text className = "text-secondary ">Full Name</Text>
         <TextInput
         placeholder="Abc Perera"
         />
        </View>
        
         
         <View className= "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
          <Text className = "text-secondary">Phone Number</Text>
          <TextInput 
            placeholder="0123456789"
            keyboardType="phone-pad"/>
  
         </View>
  
          <View className= "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
          <Text className = "text-secondary">Date</Text>
          <TextInput 
            placeholder="22/06/2025"/>
  
         </View>
  
          <View className= "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
          <Text className = "text-secondary">Time</Text>
          <TextInput 
            placeholder="9.00 a.m"/>
  
         </View>
  
  
          <View className = "w-4/5 mt-5 bg-secondary h-[1px]"/>
  
          <TouchableOpacity
          className = "mt-4 px-12 py-3  rounded-full"
          style={{ backgroundColor: '#3A0519' }}>
               <Text className = "text-white text-2xl font-semibold">Submit</Text>
  
          </TouchableOpacity>
       
      </ScrollView>
      </SafeAreaView>
    );
}
 