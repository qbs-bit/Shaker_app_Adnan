import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from '../header/header';
import Icon from 'react-native-vector-icons/FontAwesome5'
let deviceHeight = Dimensions.get('screen').height;

let name = ['empty'];

const EditProfile = ({ navigation }) => {


    const toHome = () => {
        navigation.navigate('Home')
    }

    return (
        <>
            <ImageBackground source={require('../../../assets/images/homebg.png')} style={styles.bgImg}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={toHome}
                        >
                            <Icon
                                name="arrow-left"
                                size={20}
                                color="white"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                name="bell"
                                size={20}
                                color="white"
                            />
                        </TouchableOpacity>

                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainContainer}>
                        <View style={styles.subContainer}>
                            <Icon name='user-circle' style={styles.iconStyle} />
                            <TouchableOpacity>
                                <Icon name='camera' style={styles.cameraStyle} />
                            </TouchableOpacity>
                            {/* <Image source = {require('../../../assets/images/userimg.png')} style={styles.userImg} /> */}
                            <Text style={styles.label}>Name</Text>
                            <TextInput style={styles.input}></TextInput>
                            <Text style={styles.label}>Contact Info</Text>
                            <Text style={styles.text}>Mobile number</Text>
                            <TextInput style={styles.input}></TextInput>
                            <Text style={styles.text}>Landline number</Text>
                            <TextInput style={styles.input}></TextInput>
                            <Text style={styles.label}>Address Info</Text>
                            <Text style={styles.text}>House Number</Text>
                            <TextInput style={styles.input}></TextInput>
                            <Text style={styles.text}>Floor</Text>
                            <ModalDropdown
                                defaultValue="Select Floor No"
                                isFullWidth={true}
                                options={name}
                                dropdownTextStyle={{ color: "black", fontSize: 15 }}
                                textStyle={{
                                    color: 'gray',
                                    borderWidth: 1,
                                    borderColor: '#299371',
                                    width: '100%',
                                    borderRadius: 5,
                                    padding: 8,
                                    fontSize: 15,
                                    marginVertical: 5
                                }}
                            />
                            <Text style={styles.text}>Street</Text>
                            <TextInput style={styles.input}></TextInput>
                            <Text style={styles.text}>City</Text>
                            <ModalDropdown
                                defaultValue="Select City"
                                isFullWidth={true}
                                options={name}
                                dropdownTextStyle={{ color: "black", fontSize: 15 }}
                                textStyle={{
                                    color: 'gray',
                                    borderWidth: 1,
                                    borderColor: '#299371',
                                    width: '100%',
                                    borderRadius: 5,
                                    padding: 8,
                                    fontSize: 15,
                                    marginVertical: 5
                                }}
                            />
                            <Text style={styles.text}>District</Text>
                            <ModalDropdown
                                defaultValue="Select District"
                                isFullWidth={true}
                                options={name}
                                dropdownTextStyle={{ color: "black", fontSize: 15 }}
                                textStyle={{
                                    color: 'gray',
                                    borderWidth: 1,
                                    borderColor: '#299371',
                                    width: '100%',
                                    borderRadius: 5,
                                    padding: 8,
                                    fontSize: 15,
                                    marginVertical: 5
                                }}
                            />
                            {/* <Text style={styles.text}>Sub Region</Text>
                                <Text style={styles.text}>Location</Text> */}
                    
                            <TouchableOpacity style={styles.btnContainer}>
                                <Text style={styles.btnText}>Done</Text>
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
        // height: deviceHeight,
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 20
    },
    subContainer: {
        borderColor: '#299371',
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: 'white',
        width: '95%',
        padding: 15,
    },
    label: {
        fontFamily: 'NotoSans-Bold',
        marginVertical: 10,

    },
    input: {
        borderColor: '#299371',
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: 3,
    },
    text: {
        fontFamily: 'NoboSans-Regular',
        marginVertical: 4,
    },
    userImg: {
        marginHorizontal: '36%'
    },
    iconStyle: {
        fontSize: 70,
        textAlign: 'center',
        color: '#299371',
    },
    cameraStyle: {
        fontSize: 40,
        textAlign: 'center',
        color: '#299371',
    },
    dropdownContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#299371',
        padding: 10,
    },
    iconContainer: {
        color: '#299371',
        fontSize: 15,
    },
    btnContainer: {
        backgroundColor: '#299371',
        padding: 10,
        borderRadius: 7,
        width: '100%',
        alignItems: 'center',
        marginVertical: '10%'
    },
    btnText: {
        color: 'white',
        fontFamily: 'NotoSans-Regular'
    },
    container: {
        backgroundColor: '#299371',
        borderRadius: 2,
        padding: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //textAlign: 'center',
        fontSize: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
})

export default EditProfile;