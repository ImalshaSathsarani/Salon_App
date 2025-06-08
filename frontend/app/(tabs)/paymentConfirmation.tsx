import { Feather } from "@expo/vector-icons";
import { Link ,useRouter} from "expo-router";
import {Image,ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PaymentConfirmation() {

  const router = useRouter();
  
  return (
    <ScrollView
      className="flex-1  bg-primary"
        contentContainerStyle={{ paddingTop: 64, paddingBottom: 40, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
    >
        <View className = "flex-row items-center justify-between pl-5 w-full">
            <Link href="/paymentMethod" asChild>
            <TouchableOpacity className = "w-12 h-12 rounded-full bg-secondary justify-center items-center">
                <Feather name="arrow-left" size={24} color="#000000"/>
            </TouchableOpacity>
            </Link>
           <Text className="text-4xl  text-accent ">Payment Confirmation</Text>
           <View className = "w-12 h-12" /> {/* Dummy spacer to balance the row layout */}
        </View>

        <View className = "w-12 h-12" />
        <View className="w-11/12 flex-row justify-center items-center mt-6 space-x-4">
          <Image
            source={require('../../assets/icons/success.png')}
            style={{ width: 100, height: 100 }}
          />
        </View>

        <View className="flex-row items-center">
              <Text className="text-xl text-accent">Payment Successful</Text>
        </View>
        
        <View className="flex-row items-center mt-2">
              <Text className = "text-secondary ">Total amount paid my Mastercard </Text>       
        </View>
        <View className="flex-row items-center">
                  <Text className = "text-secondary ">Please help us with our product review</Text>
        </View>
        <View className = "w-12 h-12" />

        
        <View className= "flex-1 w-[300px] bg-[#DFD0B8] p-5 h-[200px] rounded-3xl">
          <View className="flex-row mt-2">
              <Text className = "text-accent justify-between w-4/5 ml-2 ">ABC </Text>    
              <Text className = "text-accent">$50.00</Text>       
          </View>
          <View className="flex-row mt-2">
              <Text className = "text-accent justify-between w-4/5 ml-2">XYZ </Text>    
              <Text className = "text-accent ">$30.00</Text>       
          </View>
          <View className="flex-row mt-2">
              <Text className = "text-accent justify-between w-4/5 ml-2">Service Charge </Text>    
              <Text className = "text-accent ">$50.00</Text>       
          </View>
          <View className="flex-row mt-2">
              <Text className = "text-accent justify-between w-4/5 ml-2">Subtotal </Text>    
              <Text className = "text-accent ">$50.00</Text>       
          </View>

          <View className = "w-full mt-5 bg-secondary h-[1px]" style={{ backgroundColor: "#000" }}/>
          
          <View className="flex-row mt-2">
              <Text className = "text-accent justify-between w-4/5 ml-2">Total </Text>    
              <Text className = "text-accent ">$160.00</Text>       
          </View>

        </View>
        
        <View className = "w-12 h-12" /> 
        <TouchableOpacity
            className="mt-4 px-12 py-3 rounded-full"
            style={{ backgroundColor: '#3A0519' }}
            onPress={() => router.push("/")}
          >
          <Text className="text-white text-2xl font-semibold">Back to Home</Text>
          </TouchableOpacity>
      </ScrollView>
  );
}