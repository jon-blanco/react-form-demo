import React, { useState } from 'react';
import { ScrollView, TextInput, Text, View } from 'react-native';


function App () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [petName, setPetName] = useState('')
  const [petDOB, setPetDOB] = useState('')
  const [breed, setBreed] = useState('')
  const [toy, setToy] = useState('')

  return (<View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1', padding:16 }}>

  <Input label={'Email'} placeholder={'you@website.com'} value={email} callBack={setEmail}/>
  <Input label={'Password'} secureTextEntry={true}  placeholder={'shh... it\'s a secret'} value={password} callBack={setPassword}/>
  <Input label={'Pet\'s Name'} placeholder={'Mx. Snuffles'} value={petName} callBack={setPetName}/>
  <Input label={'Pet\s Date of Birth'} placeholder={'MM/DD/YYYY'} value={petDOB} callBack={setPetDOB}/>
  <Input label={'Breed'} placeholder={'It\'s a mystery... or is it?'} value={breed} callBack={setBreed}/>
  <Input label={'Favorite Toy'} placeholder={'Stick'} value={toy} callBack={setToy}/>
  </View>)
};

export default App;

export const Input = (props) => (
  <View >
  <Text style={{padding: 8, fontSize: 16}}>{props.label}</Text>
  <TextInput
        style={{padding: 8, fontSize: 16, height: 40, borderColor: "grey", borderRadius: 4}}
        secureTextEntry={props.label === 'Password'}
        placeholder={props.placeholder}
        onChangeText={() => {props.callBack(props.value)}}

      />
  </View>
)
