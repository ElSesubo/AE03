import { HelperText, TextInput,icons } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import { useState } from 'react';


function Email() {
    const [text, setText] = useState("");
    const [check,setCheck] = useState("");
    const [Merror,setMError]=useState("");
    const [listaEmail,setListaEmail] = useState(["edu@gmail.com"]);

    function comprobar(){
        for(i = 0; i <listaEmail.length; i++){
            if(text.toUpperCase()==listaEmail[i].toUpperCase()){
                setCheck("check");
                setMError("");
                break;
            }else{
                setMError("Email incrrecto o no existe");
            }
        }
    }

    function comparar(){
        if(/^[a-zA-Z]+\@[a-zA-Z\_\-0-9]+\.[a-z]{2,5}$/.test(text)){
            comprobar();
        }else{
            setMError("El formato del email esta mal!");
            setCheck("");
        }
    }
    return (
        <><TextInput
        style={styles.em}
        label="Email"
        mode="outlined"
        keyboardType="email-address"
        
        onChangeText={text => setText(text)}
        onBlur={()=>comparar()}
        right={<TextInput.Icon icon={check} iconColor={"#00bb2d"} size={30}/>}/>
        <HelperText type="error" visible={true}>
        {Merror}
        </HelperText>
        </>);
}
const styles = StyleSheet.create({
    em: {
        margin: 10,
    }
});
export default Email;