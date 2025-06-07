import {FlatList, ScrollView, SectionList, StyleSheet, Text, TextInput, View} from "react-native";
import {Image} from "expo-image";
import Cat from "./Cat";
import {Link} from "expo-router";
import heroList from "./utils/heroLists";

const listHeros = heroList;
export default function Index() {
    return (
        <View style={{padding: 10, height:"100%"}}>
            <ScrollView style={{ backgroundColor: "#3e9392" , padding:15, height:"50%" }}>
                <Text style={pageStyle.textTitle}>Le meilleur hero</Text>
                <Text style={pageStyle.secondTextTitle}>Non, pas celui de small ville</Text>
                <View style={pageStyle.viewStyle}>
                    <Image style={pageStyle.imageSizing} source={require("../assets/images/batmanImg.png")}/>
                    <Text style={pageStyle.secondTextTitle}>Encore</Text>
                    <Image style={pageStyle.imageSizing} source={require("../assets/images/batmanfaceside.png")}/>
                    <Text style={pageStyle.secondTextTitle}>Encore</Text>
                    <Image style={pageStyle.imageSizing} source={require("../assets/images/batmanEntire.png")}/>
                    <Text style={pageStyle.secondTextTitle}>OUI!, c'est bien lui</Text>
                    <TextInput style={pageStyle.input} defaultValue={"Tapez son nom"}/>
                </View>
                {/*<View>*/}
                {/*    <Text style={pageStyle.sessionEspacement}> Espacement de session</Text>*/}
                {/*    <Text style={pageStyle.textTitle}> A propos de ce chat</Text>*/}
                {/*    <Cat name="Koffi"*/}
                {/*         hungryFace={require("../assets/images/hungryCat.png")}*/}
                {/*         satisfiedFace={require("../assets/images/satisfiedCat.png")}/>*/}
                {/*    <Text style={pageStyle.sessionEspacement}> Espacement de session</Text>*/}
                {/*</View>*/}
            </ScrollView>
            <View style={{height:"50%"}}>
                <FlatList data={listHeros}
                          renderItem={({item}) =>
                              <Text style={pageStyle.listTextStyle}>{item.nom}, {item.alias}</Text>
                          }/>
            </View>
        </View>
    )
        ;
}


const pageStyle = StyleSheet.create({
    viewStyle: {
        width: "100%",
        flex: 1
    },
    sessionEspacement: {
        height: 50,
        backgroundColor: "grey"
    }
    ,
    textTitle: {
        fontSize: 12,
        fontWeight:
            "bold",
        marginTop:
            5,
        marginEnd:
            5
    }
    ,
    secondTextTitle: {
        fontSize: 10,
        fontWeight:
            "semibold"
    }
    ,
    imageSizing: {
        width: "100%",
        height:
            500,
        resizeMode:
            "cover"
    }
    ,
    input: {
        width: "70%",
        borderStyle:
            "solid",
        borderColor:
            "black",
        borderWidth:
            3
    },
    listTextStyle: {
        padding:10,
        marginVertical:5,
        backgroundColor: "khaki",
        color: "black",
        fontSize: 16
    }
})