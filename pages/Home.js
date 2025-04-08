import { StyleSheet, Text, View, Image } from "react-native";
import Header  from "../components/Header";

export default function Home ({ navigation }) {
    return (
        <View style={styles.container}>
            <Header />
            <Image style={styles.image} source={require('../assets/img/flower.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#00008b",
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 250,
    borderRadius: 20,
  },
  title: {
    color: "white"
  }
});