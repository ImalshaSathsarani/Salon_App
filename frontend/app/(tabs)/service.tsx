import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

const { width, height} = Dimensions.get("window");
export default function Service() {
    const router = useRouter();
  return (
    <>
    
     <View className="w-full relative bg-primary">
         <Image 
         source={require('../../assets/images/Manicure.jpg')}  resizeMode="cover" 
         style={{
           width: width,
           height: height*0.36,
           borderBottomLeftRadius: 24,
           borderBottomRightRadius:24,
         }}
         />

         <TouchableOpacity 
          
           onPress ={()=>{router.back()}}
           style ={{
            position: "absolute",
            top: height * 0.03,
            left: width * 0.04,
            padding: 8,
            backgroundColor: "transparent",
            borderRadius: 100,
           }} >
            <Feather name="arrow-left" size={24} color="#000000"/>
           </TouchableOpacity>

       </View>
    
    
    <SafeAreaView className = "flex-1 bg-primary">
      <ScrollView contentContainerStyle = {{flexGrow:1,alignItems:"center"}}>
         <View
      className="flex-1  items-center bg-primary pt-5"
    >   
       
      
        
         <View className = " w-full  flex-row justify-end ">
            <Text className = "text-4xl font-bold text-accent mr-8">Manicure</Text>
           
         </View>
         <View className = "w-full flex-row justify-end ">
             <Text className= "text-base text-accent mt-1 mr-8">
                30-45 min &nbsp; | &nbsp; LKR 1500
            </Text>
         </View>
       

          <View className = "bg-secondary mr-1"
            style ={{
              width: width*0.85,
              paddingVertical: height*0.03,
              paddingHorizontal: width*0.05,
              borderRadius: 16,
              marginTop:16,


            }}>
              <Text className="text-base leading-5 text-accent ">
                Treat your hands to our Classic Manicure – a relaxing and rejuvenating experience that leaves your nails looking clean, shaped, and polished. {"\n\n"}

                
                <Text className = "font-semibold"> This service includes:</Text>{"\n"}
                  • Nail trimming and shaping{"\n"}
                  • Cuticle care{"\n"}
                  • Gentle exfoliation{"\n"}
                  • Hand massage{"\n"}
                  • Application of nail polish (regular or nude shades){"\n\n"}
                 
               <Text className="font-semibold">Add-ons available:</Text>{"\n"}
                  • Gel polish: +LKR 800{"\n"}
                  • Nail art: starting from +LKR 500
              </Text>


              <View className ="flex-row justify-between items center mt-6">
                <View className="flex-1 h-[0px] bg-accent border mt-3"></View>
                <Image 
                 source = { require('../../assets/icons/makeupBrushes.png')} 
                 style ={{
                  width: width* 0.06,
                  height: width*0.06,
                  marginHorizontal: 8,
                 }}/>
                <View className="flex-1 h-[0px] bg-accent border mt-3"></View>
                 
              </View>
          </View>
      
    </View>
      </ScrollView>
    </SafeAreaView>
   
    </>
  );
}
