import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './EstilosParcial';

const AsyncStorageParcial = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [facultad, setFacultad] = useState('');
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    leerDatos();
  }, []);

  const crearDatos = async () => {
    const nuevoDato = { codigo, carrera, facultad };
    const nuevosDatos = [...datos, nuevoDato];
    setDatos(nuevosDatos);
    await AsyncStorage.setItem('datos', JSON.stringify(nuevosDatos));
  };

  const leerDatos = async () => {
    const datosGuardados = await AsyncStorage.getItem('datos');
    if (datosGuardados) setDatos(JSON.parse(datosGuardados));
  };

  const eliminarDatos = async (codigo) => {
    const nuevosDatos = datos.filter(d => d.codigo !== codigo);
    setDatos(nuevosDatos);
    await AsyncStorage.setItem('datos', JSON.stringify(nuevosDatos));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder="Facultad"
        value={facultad}
        onChangeText={setFacultad}
      />
      <Button title="Crear" onPress={crearDatos} />
      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>{item.codigo} - {item.carrera} - {item.facultad}</Text>
            <Button title="Eliminar" onPress={() => eliminarDatos(item.codigo)} />
          </View>
        )}
        keyExtractor={item => item.codigo}
      />
    </View>
  );
};

export default AsyncStorageParcial;