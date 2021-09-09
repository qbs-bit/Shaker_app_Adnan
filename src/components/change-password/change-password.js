import React, {useState} from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity, TextInput, StyleSheet, Dimensions, Image } from 'react-native';
import Header from '../header/header'
import Icon from 'react-native-vector-icons/FontAwesome5';


let deviceHeight = Dimensions.get('window').height;


const ChangePassword = ({ navigation }) => {


    //Note: handing form field input states
    const [formFieldStates, setFormFieldStates] = useState ({
        oldpassword: "",
        password: "",
        confirmpassword: "",
    });

    //Note: handling validation helper states

    const [validationHelper, setValidationHelper] = useState ({
        oldHelper: "",
        passwordHelper: "",
        confirmpasswordHelper: "",
    });

        //Note: Destructing form field states so they can be called in the form..

        let {
            oldpassword,
            password,
            confirmpassword
        } = formFieldStates
    
        //Note: Destructing validation helper so they can be called later..
    
        let {
            oldpasswordHelper,
            passwordHelper,
            confirmpasswordHelper,
        } = validationHelper
    

    const [lockPassword, setLockPassword] = useState(true);

    const [lockOldPassword, setLockOldPassword] = useState(true);

    const [lockConPassword, setLockConPassword] = useState(true);

    const seePassword = () => {
        setLockPassword(!lockPassword);
    }

    const seeConPassword = () => {
        setLockConPassword(!lockConPassword);
    }

    const seeOldPassword = () => {
        setLockOldPassword(!lockOldPassword);
    }

    const toHome = () => {
        navigation.navigate('Home')
    }

    return (
        <>

            <ImageBackground source={require('../../../assets/images/imgbg.png')} style={styles.bgImg}>
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
                        <View style={styles.contentContainer}>
                            <View style={styles.lockIcon}>
                                <Image source={require('../../../assets/images/lock.png')}></Image>
                            </View>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    secureTextEntry={lockOldPassword}
                                    placeholder='Old Password'
                                    placeholderTextColor='silver'
                                    color="black"
                                    value={oldpassword || ""}
                                    onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, oldpassword: event }) }}
                                    style={{ flexGrow: 7 }}
                                // style={styles.userInput}
                                />
                                {
                                    (lockOldPassword)
                                        ?
                                        (
                                            <Icon
                                                name="eye-slash"
                                                style={styles.iconContainer}
                                                onPress={seeOldPassword}
                                            />
                                        )
                                        :
                                        (
                                            <Icon
                                                name="eye"
                                                style={styles.iconContainer}
                                                onPress={seeOldPassword}
                                            />
                                        )
                                }
                            </View>
                            {/* <Text style={styles.validationText}> {passwordHelper} </Text> */}
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    secureTextEntry={lockPassword}
                                    placeholder='New Password'
                                    placeholderTextColor='silver'
                                    color="black"
                                    value={password || ""}
                                    onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, password: event }) }}
                                    style={{ flexGrow: 7 }}
                                // style={styles.userInput}
                                />
                                {
                                    (lockPassword)
                                        ?
                                        (
                                            <Icon
                                                name="eye-slash"
                                                style={styles.iconContainer}
                                                onPress={seePassword}
                                            />
                                        )
                                        :
                                        (
                                            <Icon
                                                name="eye"
                                                style={styles.iconContainer}
                                                onPress={seePassword}
                                            />
                                        )
                                }
                            </View>
                            {/* <Text style={styles.validationText}> {passwordHelper} </Text> */}
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    secureTextEntry={lockConPassword}
                                    placeholder='Confirm Password'
                                    placeholderTextColor='silver'
                                    color="black"
                                    value={confirmpassword || ""}
                                    onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, confirmpassword: event }) }}
                                    style={{ flexGrow: 7 }}
                                // style={styles.userInput}
                                />
                                {
                                    (lockConPassword)
                                        ?
                                        (
                                            <Icon
                                                name="eye-slash"
                                                style={styles.iconContainer}
                                                onPress={seeConPassword}
                                            />
                                        )
                                        :
                                        (
                                            <Icon
                                                name="eye"
                                                style={styles.iconContainer}
                                                onPress={seeConPassword}
                                            />
                                        )
                                }
                            </View>
                            {/* <Text style={styles.validationText}> {passwordHelper} </Text> */}
                            <TouchableOpacity onPress={toHome}>
                                <Text style={styles.button}>Done</Text>
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
        paddingVertical: '15%',
        // height: deviceHeight,
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
        paddingHorizontal: 7,
    },

    button: {
        textAlign: 'center',
        backgroundColor: '#299371',
        color: 'white',
        paddingVertical: 12,
        marginVertical: 20,
        borderRadius: 8,
        fontSize: 16,
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
      passwordContainer: {
        // backgroundColor : "lightblue",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        marginVertical: 10,
        borderColor: '#299371',
        borderRadius: 7
    },
    iconContainer: {
        color: '#299371',
        fontSize: 15,
        textAlign: "right",
        marginHorizontal: 10,
    },
    validationText: {
        color: "red",
        fontSize: 14,
        textAlign: "right",
        fontFamily: "NotoSans-Regular",
    },

})

export default ChangePassword;