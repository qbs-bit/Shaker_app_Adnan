// Note: SignUp component...!

import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LocationIcon from 'react-native-vector-icons/Entypo';
import ModalDropdown from 'react-native-modal-dropdown';
import {signUpUser} from '../../store/action/auth-actions';
import {areasList} from './city-list';
import {areaCodeId} from './code-list';
console.log(areaCodeId);


let citiesList = ['RIYADH', 'AL KHARJ', 'JEDDAH', 'TABUK'];

let districts = [
  [
    'RIYADH-DUMMY',
    'AL - EZDHAR',
    'AL - FALAH',
    'AL - MUROOJ',
    'AL - DIRIYAH',
    'AL - GHADIR',
    'AL - AQIQ',
    'HITTIN',
    'AL - MASIF',
    'AL - TAWEN',
    'AL - WADI',
    'AL - NAFEL',
    'AL - NADA',
    'AL - YASMIN',
    'AL - KHUZAMA',
    'AL - NAKHEEL',
    'ARAQAH',
    'AL - RAID',
    'AL - RABIYA',
    'AN - NARJIS',
    'AL - SAHAFA',
    'KING SAUD UNIVRSITY',
    'AMARIA',
    'AL - GHADIR',
    'QARAWAN',
    'AL - OLAYYA',
    'AL-NUZHA',
    'HI AL- MALIK FAHAD',
    'AL - MUHAMMADIYYA',
    'AL - WAHA',
    'AL - RAHMANIYYA',
    'AL - WUROOD',
    'SALAH UDDIN',
    'KING ABDEL AZIZ',
    'AL - SULIMANEH',
    'UM AL - HAMAM',
    'TAKASUSI',
    'AL - MURSALAT',
    'AL-MUGHARRAZAT',
    'AL- MAATHER',
    'TAHLIA STREET',
    'AL - URUBA',
    'TAIBA',
    'AL - ANDALOS',
    'AL - JANADRIYAH',
    'AL - KHALEEJ',
    'KING FAISAL',
    'AL - QUDSS',
    'AL - HAMRA',
    'ISHBILIA',
    'AL - QADISIYAH',
    'YARMOUK',
    'QORTUBAH',
    'AL - RIMAL',
    'THUMAMA',
    'AL - RAWDHAH',
    'ALNHDHAH',
    'AL - MAIZLIYYAH',
    'GHARNATAH',
    'SHUHADA',
    'MUANASIYA',
    'AL - RABWAH',
    'AL - RAWABI',
    'AL - NASEEM',
    'ALJAZEERA',
    'AL - FAYHA',
    'AL - SELAYY',
    'AL - RAYYAN',
    'AL - MANAR',
    'KING ABDULLAH',
    'KHASHEM ALAM',
    'AL - NAZEEM',
    'AL - SALAM',
    'AL SAFA',
    'AL - SAADAH',
    'AL - YAMAMAH',
    'MANFUAH',
    'AL - MANSORAH',
    'GHUBAIRA',
    'AL - OUD',
    'SALHIA',
    'FARROUQ',
    'AL - MURABBA',
    'AL - WIZARAT',
    'JARIR',
    'AL - MALAZ',
    'AL - DIRAH',
    'AL - BATHA',
    'TV STREET',
    'AL - MARGAB',
    'KHANSHELILA',
    'AL - FAISALIYAH',
    'OTAYYIGAH',
    'FOUTA',
    'AL - KHALIDIA',
    'KHAZAN STREET',
    'DOBAT',
    'GHURABI',
    'LG WORKSHOP',
    'AL - AMAL',
    'INDUSTRIAL CITY-I',
    'KHALDIYA',
    'AL-MOATAMARAT',
    'SHERFIA',
    'AL - HADA',
    'SAFARATT',
    'AL - NADHIM',
    'DEERAB',
    'NEMAR',
    'AL - SUWAIDI',
    'AL - NASRIYYAH',
    'AFAKHRIA',
    'ELEYSHAH',
    'AL - SHEMAYSI',
    'AL - WASHEM',
    'AL - BADIEH',
    'DAKHAL MAHDOOD',
    'URAYJA',
    'SULTANAH',
    'SHUBRA',
    'NAMOUZAJIAH',
    'ZAHRAT NAMAR',
    'JARADIA',
    'RAFIA',
    'TUWAIQ',
    'ASWAG  MAKKAH',
    'ZAHRAT BADIA',
    'ISKAN AL - KHARJ',
    'BADR',
    'AL - SHIFA',
    'AZIZIA',
    'MANAKH',
    'DHURMA',
    'NEW SENAIYA',
    'MARWA',
    'AL MASANE',
    'AL - HAIR',
    'DAR BEDA',
    'TAREEK AL QASSIM',
    'HURAYMLLA',
    'TARIQ AL - KHARJ',
    'MUZAMIA',
    'AL - QUWAIYA',
    'SALBUKH',
    'THUMAIR',
    'INDUSTRIAL CITY-II',
    'AL - EGUAIYEH',
    'AL - DAR ALBIDA',
    'OKAZ',
    'RIYADH-SC',
    'RABIAH',
    'BANBAN',
    'ALAMANH',
    'ALNADWAH',
    'ALAAREDH',
    'ALAL SHROOQ',
    'RIYADH-VIP',
    'RIYADH-EME',
  ],
  [
    'AL KHARJ-DUMMY',
    'AL KHARJ',
    'WADI DAWASER',
    'DALAM',
    'AlSEEH',
    'ALSAHNAH',
    'ALHAIATHEM',
    'NAJAN',
    'ALTHUBAYAH',
  ],
  ['JEDDAH-DUMMY', 'AL-FALAH', 'MOHAMDIA', 'ALSHATAY 2', 'ALSHATAY 3'],
  ['TABUK-DUMMY', 'RAWDA', 'SULEIMANIA', 'WUROOD', 'MUROOJ-A'],
];

const SignupScreen = ({navigation}) => {
  // Note: Handling states here...!
  const [formFieldStates, setFormFieldStates] = useState({
    email: '',
    password: '',
    confirmpassword: '',
    name: '',
    address: '',
    city: '',
    district: '',
    num: '',
  });

  const [validationHelper, setValidationHelper] = useState({
    emailHelper: '',
    passwordHelper: '',
    confirmpasswordHelper: '',
    nameHelper: '',
    cityHelper: '',
    districtHelper: '',
    numHelper: '',
  });
  const [lockPassword, setLockPassword] = useState(true);
  const [lockConPassword, setLockConPassword] = useState(true);
  const [cityValue, setCityValue] = useState(0);
  const [areaValue, setAreaValue] = useState([]);

  let filterAreasArr = areasList.filter((item, index) => {
    return cityValue.cityValue === item.cityName;
  });
  console.log(filterAreasArr);

  console.log(cityValue);
  console.log(areaValue);

  // Note: Handeling redux here...!
  const dispatch = useDispatch();

  // Note: Destructing form field states so they can be called in the form...!
  let {
    title,
    email,
    password,
    confirmpassword,
    name,
    address,
    city,
    district,
    num,
  } = formFieldStates;

  // Note: Destructing validation helper so they can be called later...!
  let {
    titleHelper,
    emailHelper,
    passwordHelper,
    confirmpasswordHelper,
    nameHelper,
    addressHelper,
    cityHelper,
    districtHelper,
    numHelper,
  } = validationHelper;

  // Note: Function to sign up user...!
  const userSignUp = () => {
    let validEmailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let validNumberFormat = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/

    // if (
    //     (formFieldStates.email.match(validEmailFormat)) &&
    //     (formFieldStates.password != "") &&
    //     ((formFieldStates.confirmpassword) === (formFieldStates.password)) &&
    //     (formFieldStates.name != "") &&
    //     (formFieldStates.addressname != "") &&
    //     (formFieldStates.city != "") &&
    //     (formFieldStates.district != "") &&
    //     (formFieldStates.num != "")
    // ) {
    let updateObj = {
      Name: formFieldStates.name,
      Password: formFieldStates.password,
      Email: formFieldStates.email,
      // Address: formFieldStates.address,
      PhoneNumber: formFieldStates.num,
      Location: formFieldStates.district,
      Title: formFieldStates.title,
      BusinessUnit: '1000',
    };
    // console.log(updateObj);
    dispatch(signUpUser(updateObj));
    // }

    // else {
    //     console.log('Error!');
    // }
  };

  return (
    <>
      <ImageBackground
        source={require('../../../assets/images/imgbg.png')}
        style={styles.bgImg}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
              <Text style={styles.headingText}>Sign Up</Text>

              <TextInput
                placeholder="Title"
                placeholderTextColor="silver"
                value={title || ''}
                onChangeText={event => {
                  setFormFieldStates({...formFieldStates, title: event});
                }}
                style={styles.userInput}
              />
              {/* Note: Name field area */}
              <TextInput
                placeholder="Name*"
                placeholderTextColor="silver"
                value={name || ''}
                onChangeText={event => {
                  setFormFieldStates({...formFieldStates, name: event});
                }}
                style={styles.userInput}
              />
              <Text style={styles.validationText}> {nameHelper} </Text>

              {/* Note: Mobile number field area */}
              <TextInput
                placeholder="Mobile no*"
                placeholderTextColor="silver"
                keyboardType="phone-pad"
                value={num || ''}
                onChangeText={event => {
                  setFormFieldStates({...formFieldStates, num: event});
                }}
                style={styles.userInput}
              />
              <Text style={styles.validationText}> {numHelper} </Text>

              {/* Note: Email field area */}
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Email*"
                  placeholderTextColor="silver"
                  color="black"
                  // style={styles.userInput}
                  value={email || ''}
                  onChangeText={event => {
                    setFormFieldStates({...formFieldStates, email: event});
                  }}
                  style={{flexGrow: 7}}></TextInput>
                <Icon name="envelope" style={styles.iconContainer} />
              </View>
              <Text style={styles.validationText}> {emailHelper} </Text>

              {/* Note: Password field area */}
              <View style={styles.passwordContainer}>
                <TextInput
                  secureTextEntry={lockPassword}
                  placeholder="Password"
                  placeholderTextColor="silver"
                  color="black"
                  value={password || ''}
                  onChangeText={event => {
                    setFormFieldStates({...formFieldStates, password: event});
                  }}
                  style={{flexGrow: 7}}
                />
                <Icon
                  name={lockPassword ? 'eye-slash' : 'eye'}
                  style={styles.iconContainer}
                  onPress={() => setLockPassword(!lockPassword)}
                />
              </View>
              <Text style={styles.validationText}> {passwordHelper} </Text>

              {/* Note: Confirm password field area */}
              <View style={styles.passwordContainer}>
                <TextInput
                  secureTextEntry={lockConPassword}
                  placeholder="Confirm Password"
                  placeholderTextColor="silver"
                  color="black"
                  value={confirmpassword || ''}
                  onChangeText={event => {
                    setFormFieldStates({
                      ...formFieldStates,
                      confirmpassword: event,
                    });
                  }}
                  style={{flexGrow: 7}}
                />
                <Icon
                  name={lockConPassword ? 'eye-slash' : 'eye'}
                  style={styles.iconContainer}
                  onPress={() => setLockConPassword(!lockConPassword)}
                />
              </View>
              <Text style={styles.validationText}>
                {' '}
                {confirmpasswordHelper}{' '}
              </Text>

              {/* Note: Address field area */}
              <TextInput
                placeholder="Address Details"
                placeholderTextColor="silver"
                color="black"
                value={address || ''}
                onChangeText={event => {
                  setFormFieldStates({...formFieldStates, address: event});
                }}
                style={styles.userInput}
              />
              <Text style={styles.validationText}> {addressHelper} </Text>

              {/* Note: City dropdown list */}
              <View>
                {/* <Text style={styles.textContainer}> Select City </Text> */}
                <ModalDropdown
                  options={citiesList}
                  defaultValue="Select City"
                  onSelect={(index, value) => {
                    // let index = citiesList.findIndex(val => val === value);
                    setCityValue(index);

                    console.log('Incomming Value: ', {index, value});
                    // console.log('State Value: ', cityValue);
                  }}
                  isFullWidth={true}
                  dropdownTextStyle={{color: 'black', fontSize: 15}}
                  textStyle={{
                    color: 'gray',
                    borderWidth: 1,
                    borderColor: '#299371',
                    width: '100%',
                    borderRadius: 5,
                    padding: 8,
                    backgroundColor: 'whitesmoke',
                    fontSize: 15,
                    marginVertical: 5,
                  }}
                />
                {/* <TextInput
                                placeholder='City'
                                placeholderTextColor='silver'
                                value={city || ""}
                                onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, city: event }) }}
                                style={styles.userInput}
                            /> */}
              </View>

              {/* Note: Area dropdown list */}
              <View>
                {/* <Text style={styles.textContainer}> Select District </Text> */}
                {console.log('Districts: ', {
                  districts,
                  cityValue,
                  selected: districts[cityValue],
                  ahmad: filterAreasArr,
                })}
                <ModalDropdown
                  options={districts[cityValue]}
                  defaultValue="Select District"
                  onSelect={(index, value) => setAreaValue(value)}
                  isFullWidth={true}
                  dropdownTextStyle={{color: 'black', fontSize: 15}}
                  textStyle={{
                    color: 'gray',
                    borderWidth: 1,
                    borderColor: '#299371',
                    width: '100%',
                    borderRadius: 5,
                    padding: 8,
                    fontSize: 15,
                    backgroundColor: 'whitesmoke',
                    marginVertical: 5,
                  }}
                />
                {/* <TextInput
                                placeholder='District'
                                placeholderTextColor='silver'
                                keyboardType="number-pad"
                                value={district || ""}
                                onChangeText={(event) => { setFormFieldStates({ ...formFieldStates, district: event }) }}
                                style={styles.userInput}
                            /> */}
              </View>

              <View style={styles.newUserContainer}>
                <Text style={{fontFamily: 'NotoSans-Bold'}}>
                  {' '}
                  Already an user?
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text
                    style={{color: '#299371', fontFamily: 'NotoSans-Regular'}}>
                    {' '}
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={userSignUp}>
                <Text style={styles.button}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
  },

  mainContainer: {
    paddingVertical: 20,
    paddingHorizontal: '5%',
  },

  contentContainer: {
    borderColor: '#299371',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
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
    fontFamily: 'NotoSans-Bold',
  },

  userInput: {
    borderStyle: 'solid',
    borderColor: '#299371',
    borderWidth: 1,
    color: 'black',
    borderRadius: 7,
    marginVertical: 10,
  },

  newUserContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
    fontFamily: 'NotoSans-Regular',
  },

  passwordContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#299371',
    borderRadius: 7,
    marginVertical: 10,
  },

  iconContainer: {
    fontSize: 15,
    color: '#299371',
    textAlign: 'right',
    marginHorizontal: 10,
    padding: 5,
    // backgroundColor:'yellow'
  },

  locationIconContainer: {
    fontSize: 25,
    color: '#299371',
    marginHorizontal: 10,
  },

  validationText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'right',
    fontFamily: 'NotoSans-Regular',
  },

  textContainer: {
    fontSize: 15,
  },
});

export default SignupScreen;
