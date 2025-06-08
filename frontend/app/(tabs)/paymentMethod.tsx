import { Feather } from "@expo/vector-icons";
import { Link ,useRouter} from "expo-router";
import {Image,ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';


export default function PaymentMethod() {

   const router = useRouter();
  return (
    <ScrollView
      className="flex-1  bg-primary"
        contentContainerStyle={{ paddingTop: 64, paddingBottom: 40, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
    >
        <View className = "flex-row items-center justify-between pl-5 w-full">
            <Link href="/bookings" asChild>
            <TouchableOpacity className = "w-12 h-12 rounded-full bg-secondary justify-center items-center">
                <Feather name="arrow-left" size={24} color="#000000"/>
            </TouchableOpacity>
            </Link>
           <Text className="text-4xl  text-accent ">Payment Method</Text>
           <View className = "w-12 h-12" /> {/* Dummy spacer to balance the row layout */}
        </View>

        <View className = " w-11/12 mt-10">
            <Text className = "text-2xl text-accent mr-6 px-6">Shipping to</Text>

         </View>

         <View className="w-11/12 flex-row items-start px-12 mt-4">

          <Entypo name="location-pin" size={24} color="black" />

            <View className="ml-5">
              <Text className="text-base text-accent">Home</Text>
              <Text className="text-base text-accent">No.1 Abc Road</Text> 
            </View>
          </View>

          <View className = " w-11/12 flex-row justify mt-10">
            <Text className = "text-2xl text-accent mr-6 px-6">Add Payment Method</Text>
         </View>

         <View className="w-11/12 flex-row justify-center items-center mt-6 space-x-4">
          <Image
            source={require('../../assets/icons/visa.png')}
            style={{ width: 80, height: 50 }}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/icons/master.png')}
            style={{ width: 80, height: 50 }}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/icons/paypal.png')}
            style={{ width: 80, height: 50 }}
            resizeMode="contain"
          />
        </View>


          
          <View className = "w-2 h-2" />
          
          <View className = "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
            <Text className = "text-secondary ">Card holder name</Text>
            <TextInput
            placeholder="Abc Perera"
          />
          </View>
        

          <View className = "w-4/5 mt-4 border border-secondary rounded-xl px-4 py-2">
            <Text className = "text-secondary ">Card Number</Text>
            <TextInput
            placeholder="0000 0000 0000 0000"
          />
          </View>

          <View className="flex-row w-4/5 space-x-4 mt-4">
            <View className = "flex-1 border border-secondary rounded-xl px-4 py-2">
                <Text className = "text-secondary">Expiry Date</Text>
                <TextInput
              placeholder = "01/20"/>
            </View>

            <View className = "flex-1 border border-secondary rounded-xl px-4 py-2 ml-2">
                <Text className = "text-secondary">CVV</Text>
                
            <TextInput 
                placeholder="123"/>
            </View> 
          </View>       

          <View className = " w-11/12 mt-10 flex-row justify-between items-center">
            <Text className = "text-2xl text-accent mr-6 px-6">Total Payment</Text>          
            <Text className="text-2xl text-accent px-20">$50.98</Text>        
         </View>

          <TouchableOpacity
            className="mt-4 px-12 py-3 rounded-full"
            style={{ backgroundColor: '#3A0519' }}
            onPress={() => router.push("/paymentConfirmation")}
          >
          <Text className="text-white text-2xl font-semibold">Confim Order</Text>
          </TouchableOpacity>
         
    </ScrollView>
  );
}