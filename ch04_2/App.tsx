import React from 'react'
import { StyleSheet,SafeAreaView,ScrollView,Dimensions } from 'react-native'
import Cache from './src/screens/Cache'
import Memo from './src/screens/Memo'
import Fibo from './src/screens/Fibo'

const {width} =  Dimensions.get('window')
const numberOfComponent = 3


//prettier-ignore

export default function App(){

  return(
    <SafeAreaView>
      <ScrollView horizontal contentContainerStyle={[styles.contentContainerStyle]}>
        <Cache/>
        <Memo/>
        <Fibo/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaView:{flex:1},
  contentContainerStyle :{width:width*numberOfComponent}  

})