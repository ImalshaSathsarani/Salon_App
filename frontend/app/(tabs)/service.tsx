import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";


export default function Service() {
    const router = useRouter();
  return (
    <View
      className="flex-1  items-center bg-primary pt-5"
    >   
       
       <View className="w-full relative">
         <Image 
         source={require('../../assets/images/Manicure.jpg')}  resizeMode="cover" 
         className="h-[250px] w-full rounded-b-3xl"
         />

         <TouchableOpacity 
           className= "absolute top-5 left-4 bg-transparent p-2 rounded-full"
           onPress ={()=>{router.back()}} >
            <Feather name="arrow-left" size={24} color="#000000"/>
           </TouchableOpacity>

       </View>
        
         <View className = " w-full  flex-row justify-end mt-4">
            <Text className = "text-4xl font-bold text-accent mr-6">Manicure</Text>
           
         </View>
         <View className = "w-full flex-row justify-end mt 2">
             <Text className= "text-base text-accent mt-1 mr-6">
                30-45 min &nbsp; | &nbsp; LKR 1500
            </Text>
         </View>
       

          <View className = "w-[300px]  bg-secondary rounded-xl mt-3 px-5 py-5 ">
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
                <Image source = { require('../../assets/icons/makeupBrushes.png')} className= "w-6 h-6"/>
                <View className="flex-1 h-[0px] bg-accent border mt-3"></View>
                 
              </View>
          </View>
      
    </View>
  );
}
