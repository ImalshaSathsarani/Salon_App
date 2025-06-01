import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

export default function MyBookings() {

  const bookings = [
    {id:1, icon: require("../../assets/icons/brush.png") , title:'Make Up' , date:'2023-10-01', time:'10:00 AM'},
    {id:2, icon: require("../../assets/icons/makeuplipstick.png") , title:'Make Up' , date:'2023-10-01', time:'10:00 AM'},
    {id:3, icon: require("../../assets/icons/makeup.png") , title:'Make Up' , date:'2023-10-01', time:'10:00 AM'},
    {id:4, icon: require("../../assets/icons/makeupBrushes.png") , title:'Make Up' , date:'2023-10-01', time:'10:00 AM'},
  ]

  type Booking = { id: number; icon: any; title: string; date: string; time: string };
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const[modalVisible,setModalVisible] = useState(false);
  return (
    <>
      <Modal
        visible = {modalVisible}
        transparent
        animationType="slide"
        onRequestClose={()=>setModalVisible(false)}>

          <View className = "flex-1 justify-center items-center bg-black/50">
          <View className="w-[235px] bg-[#C2A56C] p-5 h-[300px] rounded-2xl items-center">
          <View className = "w-full flex-row justify-between items-center mb-4">
            <TouchableOpacity onPress={()=>setModalVisible(false)}>
              <Feather name ="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <Text className = "text-2xl font-bold mb-2">Appointment</Text>
            <View className = "w-6"/>
          </View>

          {selectedBooking && (
            <>
            <View className= "flex-row  justify-between w-full ">
               <Image source = {selectedBooking.icon} className = "w-8 h-8 mb-4 ml-5" resizeMode="contain"/>
               <Text className="text-1xl mb-1 ">{selectedBooking.title}</Text>
               <View className= "w-6"></View>
            </View>

              <View className= "flex-row  justify-between w-full ">
                <Feather name="calendar" size={24} color="black" className="mb-4 ml-5"/>
                <Text className="text-1xl mb-1 ">{selectedBooking.date}</Text>
                <View className= "w-6"></View>
              </View>
           
             <View className= "flex-row  justify-between w-full ">
                <Feather name="clock" size={24} color="black" className="mb-4 ml-5"/>
                <Text className="text-1xl mb-1 ">{selectedBooking.time}</Text>
                <View className= "w-6"></View>
              </View>
            
             <View className= "flex-row  justify-between w-full ">
                <Feather name="map-pin" size={24} color="black" className="mb-4 ml-5"/>
                <Text className="text-1xl mb-1 ">Salon ABC</Text>
                <View className= "w-6"></View>
              </View>
           

            <TouchableOpacity
              className="bg-[#501728] px-6 py-2 rounded-full mt-3"
              onPress = {()=>{
                setModalVisible(false);
              }} >
                <Text className= "text-white text-lg">Cancel</Text>
              </TouchableOpacity>
            </>
          )}
          </View></View>
          
      </Modal>
      <View
        className="flex-1 pt-16 items-center bg-primary"
      >

        <View className="flex-row justify-between items-center w-full px-4">
          <Link href="/(tabs)/profile" asChild>
          <TouchableOpacity className = "w-12 h-12 rounded-full bg-secondary justify-center items-center">
            <Feather name= "arrow-left" size={24} color ="#000000"/>
          </TouchableOpacity>
          </Link>
          <Text className="text-5xl text-accent ml-4">My Bookings</Text>

          <View className="w-12 h-12" />
        </View>

        <View className = "w-4/5 h-[1px] bg-secondary mt-6"/>

        <View className= "w-4/5 mt-10 flex-1 items-center ">

        {bookings.map((booking,index)=>(
         <TouchableOpacity 
          key={index}
          className= "  w-full h-24 border border-secondary rounded-xl mb-10 px-4 py-3"
          onPress={()=>{
            setSelectedBooking(booking);
            setModalVisible(true);
          }}>

            <View className = "flex-row items-center justify-between">
              <Image source ={booking.icon} className= "w-12 h-12 mt-3" resizeMode="contain"/>
              <View className= "flex-1 ml-2">
                <Text className= "text-xl text-accent font-semibold">{booking.title}</Text>
                <Text className = " text-sm text-secondary mt-2">{booking.date} - {booking.time}</Text>
              </View>

              <TouchableOpacity className = "px-4 py-1 rounded-full border border-secondary">
                <Text className = "text-secondary text-lg">Cancel</Text> </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}

        <View className = "flex-row items-center justify-center w-4/5 space-x-4">
          <TouchableOpacity><Feather name ="chevron-left" size={24} color="accent" /></TouchableOpacity>
          <TouchableOpacity className="ml-10"><Feather name ="chevron-right" size={24} color="accent" /></TouchableOpacity>
          
        </View>

        <View className = "flex-row items-center justify-center space-x-2 mt-4">
          <View className= "w-2.5 h-2.5 rounded-full bg-secondary"/>
          <View className= "w-2.5 h-2.5 rounded-full bg-secondary opacity-50 ml-2"/>
          <View className= "w-2.5 h-2.5 rounded-full bg-secondary opacity-50 ml-2"/>
        </View>
        </View>


      </View>
    </>
  );
}
