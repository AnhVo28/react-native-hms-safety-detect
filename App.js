/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import {  HMSSysIntegrity,  HMSWifiDetect, } from '@hmscore/react-native-hms-safetydetect';
import jwt_decode from 'jwt-decode';

const App = () => {

  const checkSysIntegrity = () => {
    const appId = "104336343";
    const nonce = "Sample" + Date.now();
    HMSSysIntegrity.sysIntegrity(nonce, appId).then(response => {
      console.log("sysIntegrity: " + response);

      const data = jwt_decode(response)

      console.log(data);

      Alert.alert(`isSecure: ${data.basicIntegrity}`)
    }).catch(error => {
      console.log(error);
      Alert.alert("Error", error.toString())
    })
  }
 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 10,}}>
          <Text style={styles.headerTitle}>HMS React Native Safety Detect</Text>
        </View>
        
        </View>
      <ScrollView>
        <View style={styles.buttonsContainer}>
            <View 
              key={0} 
              style={styles.section}
            >
              <Text style={styles.sectionTitle} >System Integrity</Text>
                <TouchableOpacity
                  key={0}
                  onPress={()=>checkSysIntegrity()}
                  style={styles.button}
                >
                  <Text style={styles.buttonText} >Check System Integrity</Text>
                </TouchableOpacity>
            </View>
          
        </View>
      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  header: {
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 40,
    marginHorizontal: 20,
  },
  headerTitle: {
    fontWeight: "bold",
    color: "#909090",
    fontSize: 20,
  },
  headerImage: {
    resizeMode: "center",
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    flex: 1
  },
  section:{
    flex: 1,
    padding: 10,
  },
  sectionTitle:{
    fontSize: 14,
    fontWeight: "bold",
    color: "#909090",
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2e2e2e",
    marginVertical: 8,
    elevation: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#909090",
  },
});



export default App
