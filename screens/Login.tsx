import React, { useState } from 'react'
import { Image, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import AntIcon from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient';
import { useHistory } from 'react-router-native';
import { IAppState } from '../redux/types';
import { setUserDataAC } from '../redux/actionCreators';


export const LoginScreen = () => {
  const image = useSelector((state: IAppState) => state.image)
  const history = useHistory()
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  return (
    <>
      <View style={{
        alignItems: "center",
        flex: 1,
        justifyContent: 'center'
      }}>
        <Image
          style={{
            borderRadius: 20,
            width: '80%',
            height: "80%",
          }}
          source={{
            uri: image!
          }} />
      </View>
      <View style={{
        flex: 1,
        alignItems: 'center',
        padding: 20
      }}>
        <TextInput value={firstName} onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
          setFirstName(e.nativeEvent.text)
        }} placeholder="First Name" style={styles.input} />
        <TextInput onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
          setLastName(e.nativeEvent.text)
        }} value={lastName} placeholder="Last Name" style={styles.input} />
        <TouchableOpacity disabled={!firstName || !lastName} onPress={() => {
          dispatch(setUserDataAC(firstName, lastName))
          history.push('/profile')
        }}>
          <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#3393E4', '#715886']} style={styles.nextButton}>
            <AntIcon name="arrowright" color="red" size={30} />
            <Text style={styles.btnText}>Next screen</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#3e3e3e",
    borderWidth: 1,
    borderRadius: 4,
    width: '80%',
    padding: 10,
    marginBottom: 10
  },
  nextButton: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 130,
    borderRadius: 24,
    padding: 10,
  },
  btnText: {
    color: "#fff"
  }
})
