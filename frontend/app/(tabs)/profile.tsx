import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Button, Image, Modal, Text, TouchableOpacity, View } from "react-native";


export default function Profile() {

  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className= "flex-1 justify-center items-center bg-black/50">
        <View className= "w-[235px] bg-[#C2A56C] p-5 h-[140px] rounded-2xl items-center">
          <Text className="text-2xl font-bold mb-4">Are you Sure?</Text>
          <View className = "flex-row items-center justify-between w-full">
            <TouchableOpacity 
           className= " ml-8 px-7 py-2 bg-[#3A0519] rounded-full">
            <Text className="text-white text-lg">Yes</Text>
           </TouchableOpacity>
           <TouchableOpacity
            onPress={() => setModalVisible(false)}
            className= "px-7 py-2 bg-[#3A0519] rounded-full ml-4">
            <Text className="text-white text-lg">No</Text>
            </TouchableOpacity>
            <View className = "w-6"></View>
          </View>
        </View>
        </View>
      </Modal>

      <View
        className="flex-1 pt-16 items-center bg-primary"
      > {/* Header Section */}
        <View className="flex-row items-center justify-between w-full px-4  ">
          <TouchableOpacity 
            className="w-12 h-12 rounded-full bg-secondary justify-center items-center"
            onPress={()=>router.back()}>
            <Feather name="arrow-left" size={24} color="#000000" />
          </TouchableOpacity>

          <Text className="text-5xl  text-accent">Profile</Text>
          {/* Dummy spacer to balance the row layout */}
          <View className="w-12 h-12" />
        </View>

        {/* Profile Image */}
        <Image source={require('../../assets/images/profile.jpg')} className="w-32 h-32 rounded-full border-4 border-accent mt-4" />

        {/* User Info Section */}

        <Text className="text-3xl text-accent mt-4">Abc Perera</Text>
        <Text className="text-1xl text-secondary ">@abcperera</Text>

        {/* Edit Profile Button */}
        <Link href="/profile/editProfile" asChild>
          <TouchableOpacity
            onPress={() => { }}
            className="mt-4 px-12 py-3  rounded-full"
            style={{ backgroundColor: '#3A0519' }}>
            <Text className="text-white text-2xl font-semibold">Edit Profile</Text>
          </TouchableOpacity>
        </Link>


        {/*Divider*/}
        {/* <View className = "w-4/5 h-[1px] bg-secondary mt-5 mb-3"/> */}

        {/*Menu Options*/}
        <View className="w-4/5 mt-7">
          {[
            { icon: <Feather name="settings" size={24} />, label: "Settings", link: "/profile/settings" },
            { icon: <Feather name="calendar" size={24} />, label: "My Bookings", link: "/profile/myBookings" },
            { icon: <Feather name="lock" size={24} />, label: "Change Password", link: "/profile/changePassword" },

          ].map((item, idx) => (
            <View key={idx}>
              <Link href={item.link as any} asChild>
                <TouchableOpacity className=" flex-row items-center justify-between py-4">
                  <View className="flex-row items-center space-x-5">
                    {item.icon}
                    <Text className="text-lg text-accent ml-4">{item.label}</Text>
                  </View>
                  <Feather name="chevron-right" size={24} color="#000" />
                </TouchableOpacity>
              </Link>
              <View className="w-4/5 h-[1px] bg-secondary" />
            </View>

          ))}

          {/*Help and Support*/}
          <Link href="/profile/help" asChild>
          <TouchableOpacity className=" flex-row items-center justify-between py-4">
            <View className="flex-row items-center space-x-4 space-between">
              <Entypo name="help-with-circle" size={22} />
              <Text className="text-lg text-accent ml-4">Help & Support</Text>
            </View>
            <Feather name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
          </Link>
          <View className="w-4/5 h-[1px] bg-secondary" />

          {/*Logout Button*/}
          <TouchableOpacity 
            onPress ={() => setModalVisible(true)}
            className="flex-row items-center justify-between py-4">
            <View className="flex-row items-center space-x-4">
              <MaterialIcons name="logout" size={24} />
              <Text className="text-lg text-accent ml-4">Log out</Text>
            </View>
            <Feather name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>


        </View>


      </View>
    </>
  );
}
