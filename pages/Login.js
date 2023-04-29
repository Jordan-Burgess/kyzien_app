import {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder='Enter Email'
        inputMode='email'
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder='Enter Password'
        secureTextEntry={true}
      />
      <Button title='Login' color='#000'/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginTop: 100,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Login