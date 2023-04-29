import {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [hidePass, setHidePass] = useState(true)
  const [hidePassConfirm, setHidePassConfrim] = useState(true)

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
        onChangeText={setUsername}
        value={username}
        placeholder='Enter Username'
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder='Enter Password'
        secureTextEntry={hidePass? true : false}
      />
      <Icon name={hidePass ? 'eye' : 'eye-off'} onPress={() => setHidePass(!hidePass)}/>
      <TextInput
        style={styles.input}
        onChangeText={setPasswordConfirm}
        value={passwordConfirm}
        placeholder='Enter Password'
        secureTextEntry={hidePassConfirm? true : false}
      />
      <Icon name={hidePassConfirm ? 'eye' : 'eye-off'} onPress={() => setHidePassConfrim(!hidePassConfirm)}/>
      <Button title='Register' color='#000'/>
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

export default Register