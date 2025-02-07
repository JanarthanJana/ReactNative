import { View,Text,Image,ImageBackground,ScrollView,Button,Pressable,Modal } from "react-native";
import { useState } from "react";
import { getBackgroundColor } from './node_modules/react-native/Libraries/LogBox/UI/LogBoxStyle';
const img = require('./assets/tv.jpg')

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={{ flex:1, backgroundColor: "plum", padding:60,}}>
      <ScrollView>
      <View style={{ height:200, width:200, backgroundColor: "blue"}}>
      </View>
      <View style={{ height:200, width:200, backgroundColor: "green"}}>
      </View>
      <Text>
        <Text style={{color:"white"}}>
          Hello
        </Text> world! 
      </Text>
        <Image source={img} style={{height:200, width:200}}/>
        <Image source={{uri:"https://picsum.photos/200"}} style={{height:200, width:200}}/>
        <ImageBackground source={img} style={{height:200, width:200}}>
          <Text>IMAGE TEXT</Text>
        </ImageBackground>
        <Button title="Press" onPress={()=>console.log("Button Pressed")} color="midnightblue" disabled/>
          <Pressable onLongPress={()=>console.log("Image Pressed")}>
          <Image source={{uri:"https://picsum.photos/200"}} style={{height:200, width:200}}/>
          </Pressable>
          <Pressable onPress={()=>console.log("Text Pressed")}>
           <Text> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores consectetur necessitatibus, ducimus laborum facere quia veritatis nemo voluptatem hic saepe fuga alias voluptatibus quo nihil atque quod. Pariatur quisquam eveniet consequuntur doloremque sed laudantium numquam assumenda voluptas? Suscipit nostrum officiis repellendus aliquam veniam officia voluptatum, enim est exercitationem pariatur a quaerat maxime quia temporibus adipisci dicta. Perferendis reprehenderit vitae necessitatibus nemo est. Necessitatibus officia sint exercitationem laudantium perferendis quae sit odit sed vitae saepe! Modi deleniti eius laborum nulla quos doloremque harum accusamus, esse voluptates veritatis, illo id enim laboriosam facere, nostrum provident nam assumenda temporibus velit quae quas mollitia!</Text>
          </Pressable>
          <Button title="Press" onPress={()=>setIsModalVisible(true)}/>
          <Modal visible={isModalVisible} onRequestClose={()=>setIsModalVisible(false)} animationType="slide" presentationType="PageSheet">
            <View style={{flex:1, backgroundColor:"lightblue"}}>
          <Text style={{marginTop:20}}>
            Modal content
          </Text>
          <Button title="close" color="midnightblue" onPress={()=>setIsModalVisible(false)}/>
          </View>
          </Modal>
        </ScrollView>
    </View>
  );
}
