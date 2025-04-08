Header.js

import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Seja muito bem-vindo(a) ao nosso aplicativo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        backgroundColor: "#00008b",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white"
    }
})