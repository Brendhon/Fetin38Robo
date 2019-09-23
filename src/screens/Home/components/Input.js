import React from 'react'
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default props => {
    return (
        <View style={styles.container}>
            <TextInput {...props} style={styles.input} />
            <TouchableOpacity onPressIn={props.send} onPressOut={props.clear}>
                <Icon name='ios-send' size={30} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 45,
        backgroundColor: 'rgb(82,84,93)',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    input: {
        fontFamily: 'Comic Sans MS',
        color: 'white',
        marginRight: 20,
        width: '70%',
    }
})