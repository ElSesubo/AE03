import { HelperText, TextInput } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import { useState } from 'react';


function Email() {
    const [text, setText] = useState();

    function comparar(){
        if(/^[a-zA-Z]+\@[a-zA-Z\_\-0-9]+\.[a-z]{2,5}$/.test(text)){
            setText(text);
        }else{
            alert("Falso");
        }
    }

    return (
        <><TextInput
        style={styles.em}
        label="Email"
        mode="outlined"
        keyboardType="email-address"
        onSubmitEditing={()=>comparar()}
        onChangeText={text => setText(text)}
        right={<TextInput.Icon icon="eye" color="#517fa4"/>}/>
        <Text>{text}</Text>
        </>);
}
const styles = StyleSheet.create({
    em: {
        margin: 10,
    }
});
export default Email;