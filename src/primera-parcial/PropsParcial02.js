import React from 'react';
import { View, Text } from 'react-native';
import styles from './EstilosParcial';

const PropsParcial02 = ({ route }) => {
  const { nombre, nota, semestre = 8, estado = true } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre de materia: {nombre}</Text>
      <Text style={styles.text}>Semestre: {semestre}</Text>
      <Text style={styles.text}>Estado: {estado ? 'Activo' : 'Inactivo'}</Text>
    </View>
  );
};

export default PropsParcial02;