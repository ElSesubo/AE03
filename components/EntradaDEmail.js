import { HelperText, TextInput, icons } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import { useState,useEffect } from 'react';


function Email(props) {
    const [text, setText] = useState("");
    const [icon, setIcon] = useState("");
    const [error, setError] = useState("");
    const [label,setLabel]=useState("");
    const [placeholder,setPlaceholder]=useState("");
  
    useEffect(()=>{setLabel(props.label);setPlaceholder(props.placeholder);})

    const handlerOnPress = (text) => {
        setText(text);
        if (/^[a-zA-Z]+\@[a-zA-Z\_\-0-9]+\.[a-z]{2,5}$/.test(text)) {
            setError("");
            setIcon("check");
        } else {
            setError("Adreça email incorrecta");
            setIcon("");
        }
    }

    return (
        <><TextInput
            style={styles.em}
            label={label}
            placeholder={placeholder}
            mode="outlined"
            keyboardType="email-address"

            onChangeText={handlerOnPress}
            right={<TextInput.Icon icon={icon} iconColor={"#00bb2d"} size={30} />} />
            <HelperText type="error" visible={true}>
            {error}
            </HelperText>
        </>);
}
const styles = StyleSheet.create({
    em: {
        margin: 10,
    }
});
export default Email;