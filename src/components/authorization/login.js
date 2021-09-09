import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
let deviceHeight = Dimensions.get('window').height;


const LoginScreen = ({ navigation }) => {


    //State to manage form field object

    const [formFieldStates, setFormFieldStates] = useState({
        num: "",
        password: ""
    });

    //State to manage Validation Helper

    const [validationHelper, setValidationHelper] = useState({
        numHelper: "",
        passwordHelper: ""
    });

    const [lockPassword, setLockPassword] = useState(true);

    const seePassword = () => {
        setLockPassword(!lockPassword);
    }
    // Destructing form field object

    let {
        num,
        password

    } = formFieldStates;

    // Destructing Validation helper object

    let {

        numHelper,
        passwordHelper
    } = validationHelper;

    

    // Navigate to sing up

    const toSignUp = () => {
        navigation.navigate('Signup')
    }

    // Navigate to forget password

    const forgetPassword = () => {
        navigation.navigate('Forget Password')
    }

    const userLogin = () => {

        let validMobileFormat = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/

        if (
            (formFieldStates.num.match(validMobileFormat)) &&
            ((formFieldStates.password != 0) && (formFieldStates.password >= 5))
        ) {
            console.log(formFieldStates);
            
        }

        else {
            setValidationHelper(
                {
                    numHelper: 'Mobile num is required',
                    passwordHelper: 'Password is required',
                }
            );
            console.log(formFieldStates);
            setTimeout(() => {
                setValidationHelper(
                    {
                        numHelper: '',
                        passwordHelper: ''
                    }
                );
            }, 5000);
        }


    }
    return (
        <>
            <ImageBackground source={require('../../../assets/images/imgbg.png')} style={styles.bgImg}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainContainer}>
                        <View style={styles.contentContainer}>
                            <Text style={styles.headingText}>Sign In</Text>

                            {/* Email Container */}

                            <View style={styles.passwordContainer}>
                                <TextInput
                                    placeholder='Mobile no'
                                    keyboardType= "phone-pad"
                                    placeholderTextColor='silver'
                                    color="black"
                                    value={num || ""}
                                    onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, num: event }) }}
                                    style={{ flexGrow: 7 }}
                                >

                                </TextInput>
                                <TouchableOpacity style={{ flexGrow: 1 }}>
                                    <Icon name='phone' style={styles.iconContainer} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.validationText}> {numHelper} </Text>

                            {/* Password Container */}

                            <View style={styles.passwordContainer}>
                                <TextInput
                                    secureTextEntry={lockPassword}
                                    placeholder='Password'
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
                            <Text
                                style={styles.validationText}
                            >
                                {passwordHelper}
                            </Text>
                            <View style={styles.newUserContainer}>
                                <TouchableOpacity onPress={toSignUp}>
                                    <Text style={{ color: "#299371", fontFamily: 'NotoSans-Regular' }}></Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={forgetPassword}>
                                    <Text style={styles.forgetPassword}>Forget Password</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity >
                                <Text style={styles.button}>Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toSignUp}>
                                <Text style={styles.buttonAccount}>Create an account</Text>
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
    containerBg: {
        flex: 1,
        resizeMode: 'contain'
    },
    contentContainer: {
        width: '90%',
        borderColor: "#299371",
        borderStyle: "solid",
        borderWidth: 1,
        marginHorizontal: '5%',
        borderRadius: 10,
        padding: 10,
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
    headingText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 22,
        fontWeight: 'bold',
        // fontFamily: 'NotoSans-Bold',
    },

    userInput: {
        borderStyle: 'solid',
        borderColor: '#299371',
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: 10,

    },
    validationText: {
        color: "red",
        fontSize: 14,
        textAlign: "right",
        fontFamily: "NotoSans-Regular",
    },

    newUserContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        textAlign: 'center',
        backgroundColor: '#299371',
        color: 'white',
        paddingVertical: 12,
        margin: 10,
        marginVertical: 20,
        borderRadius: 8,
        fontSize: 16,
    },
    buttonAccount: {
        textAlign: 'center',
        // backgroundColor: '',
        color: '#299371',
        paddingBottom: 12,
        margin: 10,
        // marginVertical: 10,
        borderRadius: 8,
        fontSize: 16,
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
    forgetPassword: {
        color: "#299371",
        fontFamily: 'NotoSans-Regular',
        paddingTop: 4,
        paddingBottom: 5
    }
})

export default LoginScreen;