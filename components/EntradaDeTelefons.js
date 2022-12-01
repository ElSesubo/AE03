import * as React from 'react';
import {Provider as PaperProvider, TextInput, HelperText} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const EntradaDeTelefon = (props) => {
  const [text, setText] = React.useState("");
  const [check, setCheck] = React.useState("");
  const [error, setError] = React.useState(false);
  const [limite, setLimite] = React.useState(9);
  const [label,setLabel]=React.useState("");
  const [placeholder,setPlaceholder]=React.useState("");

  React.useEffect(()=>{setLabel(props.label);setPlaceholder(props.placeholder);})
    
  const handleOnPress = (text) => {
    setText(text);
    if(text.startsWith('+')){
      if(!/^\+\d{2}([ \/\.])\d{9}$/.test(text)){
        setError(true);
        setCheck('');
        setLimite(13);
      }else{
        setError(false);
        setCheck('check');
      }
    }else{
      if(!/^[0-9]{9}$/.test(text)){
        setError(true);
        setCheck('');
        setLimite(9);
      }else{
        setError(false);
        setCheck('check');
      }
    }
  }

  return (
    <View>
        <TextInput
            style={{margin:10}}
            label={label}
            keyboardType='phone-pad'
            value={text}
            mode='outlined'
            placeholder={placeholder}
            maxLength={limite}
            onChangeText={handleOnPress}
            right={<TextInput.Icon icon={check} iconColor={"#00bb2d"}/>}
        />
        <HelperText type="error" visible={error}>
            Número de teléfon incorrecte
        </HelperText>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default EntradaDeTelefon;