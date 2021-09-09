import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../header/header';
import { SimpleAccordion } from 'react-native-simple-accordion';
import ModalDropdown from 'react-native-modal-dropdown';
const SalesInquiryForm = ({ navigation }) => {

    let name = ['empty'];


    const toHome = () => {
        navigation.navigate('Home')
    }


    const toSalesTicket = () => {
        navigation.navigate('Sales Num')
    }

    return (
        <>
            <ImageBackground source={require('../../../assets/images/homebg.png')} style={styles.bgImg}>
                {/* <Header navParams={ navigation }/> */}
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
                            <SimpleAccordion viewInside={
                                <View>
                                    <Text style={styles.text}>Brand</Text>
                                    <ModalDropdown
                                        defaultValue="Select Brand"
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
                                            marginVertical: 5,
                                        }}
                                    />
                                    <Text style={styles.text}>Category</Text>
                                    <ModalDropdown
                                        defaultValue="Select Category"
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
                                            marginVertical: 5,
                                        }}
                                    />
                                    {/* <Text style={styles.text}>SKU ID</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Type SKU ID"
                                    ></TextInput> */}
                                    <Text style={styles.text}>Remarks</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Type Your Complaint"
                                        multiline
                                        numberOfLines={4}
                                    ></TextInput>
                                </View>
                            }
                                title={"Product Info"}
                                bannerStyle={{ backgroundColor: '#299371' }}
                                titleStyle={{ color: 'white' }}
                                arrowColor="white"
                            />

                        </View>
                        <View style={styles.subContainer}>

                            <SimpleAccordion viewInside={
                                <View>
                                    <Text style={styles.text}>Sub Region</Text>
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
                                            marginVertical: 5,
                                        }}
                                    />
                                    <Text style={styles.text}>Location</Text>
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
                                            marginVertical: 5,
                                        }}
                                    />
                                </View>
                            }
                                title={"Address Info"}
                                bannerStyle={{ backgroundColor: '#299371' }}
                                titleStyle={{ color: 'white' }}
                                arrowColor="white"
                            />
                        </View>
                        <View style={styles.mainBtnContainer}>
                            <TouchableOpacity style={styles.btnContainer} onPress={toSalesTicket}>
                                <Text style={styles.btnText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </>
    )
};

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
        // borderWidth: 1,
        borderRadius: 5,
        // backgroundColor: 'white',
        width: '95%',
        // padding: 15,
        marginVertical: 10
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
        color: '#299371'
    },
    userImg: {
        marginHorizontal: '36%'
    },
    iconStyle: {
        fontSize: 70,
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
        justifyContent: 'center',
        width: '80%',
        marginLeft: 30,
        alignItems: 'center',
        marginVertical: '10%'
    },
    btnText: {
        color: 'white',
        fontFamily: 'NotoSans-Regular'
    },
    img: {
        marginVertical: '10%',
        marginHorizontal: '40%'

    },

    mainBtnContainer: {
        borderColor: '#299371',
        // borderWidth: 1,
        borderRadius: 5,
        // backgroundColor: 'white',
        width: '95%',
        // padding: 15,
        marginVertical: 10
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


export default SalesInquiryForm;