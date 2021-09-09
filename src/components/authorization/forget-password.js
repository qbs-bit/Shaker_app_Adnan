import React from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity, TextInput, StyleSheet, Dimensions, Image } from 'react-native';

let deviceHeight = Dimensions.get('window').height;


const ForgetPassword = ({navigation}) => {

    const goForward =() => {
        navigation.navigate('Confirm Password');
    }

    return (
        <>
            <ImageBackground source={require('../../../assets/images/imgbg.png')} style={styles.bgImg}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainContainer}>
                        <View style={styles.contentContainer}>
                            <View style={styles.lockIcon}>
                                <Image source={require('../../../assets/images/lock.png')}></Image>
                            </View>
                            <Text style={styles.forgetPass}>Forget Password</Text>
                            <TextInput
                                placeholder='Email'
                                placeholderTextColor='black'
                                style={styles.userInput}>
                            </TextInput>
                            <TouchableOpacity onPress={goForward}>
                                <Text style={styles.button}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    bgImg: {
        flex: 1,
    },
    mainContainer: {
        height: deviceHeight,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    contentContainer: {
        padding: 10,
        width: '90%',
        borderColor: "#299371",
        borderStyle: "solid",
        borderWidth: 1,
        // marginHorizontal: 20,
        // marginHorizontal: '5%',
        borderRadius: 10,
        // paddingHorizontal: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    forgetPass: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'NotoSans-Regular',
        marginVertical: 10,
    },
    lockIcon: {
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 10,
        marginVertical: '15%',
        marginHorizontal: '40%',
    },
    userInput: {
        borderStyle: 'solid',
        borderColor: '#299371',
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: 10,
    },

    button: {
        textAlign: 'center',
        backgroundColor: '#299371',
        color: 'white',
        paddingVertical: 12,
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 8,
        fontSize: 16,
    }
})

export default ForgetPassword;