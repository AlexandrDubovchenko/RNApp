import React, { useState } from 'react'
import { Image, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { IAppState } from '../redux/types';
import { setUserDataAC } from '../redux/actionCreators';


export const ProfileScreen = () => {
  const dispatch = useDispatch()
  const image = useSelector((state: IAppState) => state.image)
  const firstName = useSelector((state: IAppState) => state.firstName)
  const lastName = useSelector((state: IAppState) => state.lastName)
  const [inputFirstNameValue, setInputFirstNameValue] = useState<string>(firstName!)
  const [inputLastNameValue, setInputLastNameValue] = useState<string>(lastName!)
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
        <TextInput value={inputFirstNameValue} onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
          setInputFirstNameValue(e.nativeEvent.text)
        }} placeholder="First Name" style={styles.input} />
        <TextInput value={inputLastNameValue} onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>
        ) => {
          setInputLastNameValue(e.nativeEvent.text)
        }} placeholder="Last Name" style={styles.input} />
        <TouchableOpacity disabled={!inputFirstNameValue || !inputLastNameValue} onPress={() => {
          dispatch(setUserDataAC(inputFirstNameValue, inputLastNameValue))
        }}>
          <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#3393E4', '#715886']} style={styles.updButton}>
            <Text style={styles.btnText}>Update</Text>
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
  updButton: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    borderRadius: 24,
    padding: 10,
  },
  btnText: {
    color: "#fff"
  }
})
