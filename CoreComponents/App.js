import { View,Text,Image,ImageBackground,ScrollView,Button,Pressable,Modal,StatusBar,ActivityIndicator,Alert,StyleSheet } from "react-native";
import { useState } from "react";
import { getBackgroundColor } from './node_modules/react-native/Libraries/LogBox/UI/LogBoxStyle';
import Greet from "./components/Greet";
import Box from "./components/Box";
const img = require('./assets/tv.jpg')

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <ScrollView>
    <View style={ styles.container}>
              {/* <StatusBar backgroundColor="lightgreen" barStyle="light-content" ></StatusBar>
              <ActivityIndicator/>
              <ActivityIndicator size="large" color="#0000ff" />
              <ActivityIndicator size="large" color="#0000ff" animating={false}/> */}
              <Button title="Alert" onPress={() => Alert.alert("Invalid Data!")} />
              <Button title="Alert2" onPress={() => Alert.alert("Invalid Data!","DOB Incorrect!")} />
              <Button title="Alert3" onPress={() => Alert.alert("Invalid Data!","DOB Incorrect!",[
                {text: "Cancel", onPress: () => console.log("Cancel Pressed")},
                {text: "OK", onPress: () => console.log("OK Pressed")}
              ])} />

              <Greet name="JANA"/>
              <Greet name="Peter Parker"/>





      {/* <ScrollView>
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
        </ScrollView> */}

        <View style={[styles.lightbluebg,styles.box,styles.boxShadow]}>
          <Text style={{borderRadius:5,backgroundColor:"red"}}>
            Lightblue box
          </Text>
        </View>

        <View style={[styles.lightgreenbg,styles.box,styles.androidShadow]}>
          <Text>
            Lightgreen box
          </Text>
        </View>

        <View style={styles.darkMode}>
          <Text style={styles.darkModeText}>
            Style inheritance
            <Text style={styles.boldText}>
            in Bold
          </Text>
          </Text>
        </View>

        <View style={styles.boxView}>

        <Box style={{backgroundColor:"lightblue"}}>BOX1</Box>
        <Box style={{backgroundColor:"lightgreen"}}>BOX2</Box>

        <Box style={{backgroundColor:"greenyellow"}}>BOX3</Box>

        <Box style={{backgroundColor:"red"}}>BOX4</Box>

        <Box style={{backgroundColor:"green"}}>BOX5</Box>
        <Box style={{backgroundColor:"blue"}}>BOX6</Box>
        <Box style={{backgroundColor:"pink"}}>BOX7</Box>

        </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "plum",
    padding:60,
    marginTop:64,
  },
  boxView:{
    marginTop:64,
    borderWidth:6,
    borderColor:"midnightblue"
  },
  darkMode:{
    backgroundColor:"black",
    color:"white"
  },
  darkModeText:{
    color:"white"
  },
  boldText:{
    fontWeight:"bold"
  },
  box:{
    width:250,
    height:250,
    paddingHorizontal:10,
    paddingVertical:20,
    marginVertical:10,
    borderWidth:2,
    borderColor:"black",
    borderRadius:10
  },
  lightbluebg:{
    backgroundColor:"lightblue",
    
  },
  lightgreenbg:{
    backgroundColor:"lightgreen",
    
  },
  boxShadow:{
    shadowColor:"#333333",
    shadowOffset: {
      width:6,
      height:6
    },
    shadowOpacity:0.6,
    shadowRadius:4,
  },
  androidShadow:{
    elevation:10
  }
})
