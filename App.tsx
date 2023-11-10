import React from 'react'
import{
View,
Text,
SafeAreaView,
Image,
StyleSheet,
useColorScheme,
ScrollView
}from 'react-native'



function App():JSX.Element{
const isDarkMode = useColorScheme()==='dark'

return(
  <SafeAreaView>
<ScrollView>


 
  <View style={styles.container}>
    <Text style={isDarkMode ? styles.white :styles.dark}>
This is alpha repoting sir
    </Text>
  </View>
  </ScrollView>
  </SafeAreaView>
)
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  center:{
    flex:1,
    justifyContent:'center'
  },
  white:{
    color:'white'
  },
  dark:{
    color:'black'
  }
})



export default App;
