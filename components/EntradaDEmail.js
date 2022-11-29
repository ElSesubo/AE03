import { HelperText, TextInput,icons } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import { useState } from 'react';


function Email() {
    const [text, setText] = useState("");
    const [check,setCheck] = useState("");
    function comparar(){
        if(/^[a-zA-Z]+\@[a-zA-Z\_\-0-9]+\.[a-z]{2,5}$/.test(text)){
            setText(text);
            setCheck("check");
        }else{
            alert("Falso");
            setCheck("");
        }
    }
    const checkErrors = () => {
        return !text.includes("@");
      };
    return (
        <><TextInput
        style={styles.em}
        label="Email"
        mode="outlined"
        keyboardType="email-address"
        
        onChangeText={text => setText(text)}
        onSubmitEditing={()=>comparar()}
        right={<TextInput.Icon icon={check} disabled={true}/>}/>
        <HelperText type="error" visible={checkErrors()}>
        Email Id is invalid
      </HelperText>
        </>);
}
const styles = StyleSheet.create({
    em: {
        margin: 10,
    }
});
export default Email;