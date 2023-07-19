import {SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";
const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <MyButton
                    title="Sebastian Barcelona"
                    btnColor="#89CFF0"
                    btnIcon="user-plus"
                    onPress={() => navigation.navigate("SebastianBarcelona")} 
            />
            <MyButton
                    title="Rodrigo Roselli"
                    btnColor="#89CFF0"
                    btnIcon="user-plus"
                    onPress={() => navigation.navigate("RodrigoRoselli")} 
            />
            </ScrollView>
        </SafeAreaView>                
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        textAlign: "center",
    },
});

export default HomeScreen;
