import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/AntDesign'

export default props => {

    return (

        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='fade'
            transparent={true}>

            {/* Caso o usuario clique acima da area do Modal o mesmo ira fechar */}
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.offset}></View>
            </TouchableWithoutFeedback>

            <View style={styles.container}>

                <View style={styles.selection}>

                    {/* Titulo */}
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.title}>O que gostaria de ensinar a Floquinho?</Text>
                    </View>


                    {/* Opção Contato */}
                    <View style={styles.contact}>
                        <View>
                            <Text style={styles.text}>Um contato</Text>
                        </View>
                        <TouchableOpacity style={styles.icon}
                            onPress={() => props.navigation.navigate('Contact')}
                            onPressOut={props.onCancel}>
                            <Icon name='contact-phone' size={40} color="white"></Icon>
                        </TouchableOpacity>
                    </View>


                    {/* Opção Floquinho */}
                    <View style={styles.learning}>
                        <Text style={styles.text}>Responder uma pergunta</Text>
                        <TouchableOpacity style={styles.icon}
                            onPress={() => props.navigation.navigate('Learning')}
                            onPressOut={props.onCancel}>
                            <Icons name='QQ' size={40} color="white"></Icons>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

            {/* Caso o usuario clique abaixo da area do Modal o mesmo ira fechar */}
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.offset}></View>
            </TouchableWithoutFeedback>

        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    selection: {
        backgroundColor: 'rgba(37,38,83,0.92)',
        marginHorizontal: 8,
        borderRadius: 20
    },
    title: {
        fontSize: 25,
        fontFamily: 'Comic Sans MS',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginHorizontal: 40,
    },
    icon: {
        padding: 8,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: 'white',
    },
    contact: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    learning: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    offset: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    text: {
        fontSize: 18,
        fontFamily: 'Comic Sans MS',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    }
})