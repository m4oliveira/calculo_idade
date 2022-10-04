import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home (){

    let [anoatual, setAnoAtual] = useState();
    let [anonasc, setAnoNasc] = useState();
    let [resultado, setResultado] = useState();

    function CalcularTotal(){

        let resultado = parseFloat(anoatual) - parseFloat(anonasc);
        setResultado(resultado);

        alert("Neste ano você faz   " + resultado + " anos!");

    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculo de Idade</Text>

            <Text style={styles.subtitulo}>Insira abaixo o ano atual</Text>

            <TextInput onChangeText={setAnoAtual} style={styles.campo} placeholder="Digite aqui o ano atual"/>

            <Text style={styles.subtitulo}>Insira abaixo o ano do seu nascimento</Text>

            <TextInput onChangeText={setAnoNasc} style={styles.campo} placeholder="Digite aqui o ano do seu nascimento"/>

            <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>
        </View>       
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#6495ED',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize:26,
        color:'#000',
        fontWeight:'bold',
        marginBottom:40,
        alignContent: 'center'
    },

    subtitulo:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold',
        marginBottom:10
    },

    campo:{
        backgroundColor: '#F8F8FF',
        fontSize:18,
        padding:8,
        marginTop:10,
        width:300,
        marginBottom: 20,
        borderRadius:10
    },

    botao:{
        backgroundColor:'#4169E1',
        alignItems: "center",
        padding:15,
        borderRadius:7,
        marginTop:20,
        width:250
    },

    botaoTexto:{
        color: '#000',
        fontSize:17,
        fontWeight: "700",
    }
});