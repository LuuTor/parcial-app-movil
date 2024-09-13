import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './EstilosParcial';

const ComponenteParcial01 = () => {
  const [nombre, setNombre] = useState('');
  const [nota, setNota] = useState('');
  const navigation = useNavigation();

  const data = [
    { key: 'PropsParcial02' },
    { key: 'AxiosParcial' },
    { key: 'AsyncStorageParcial' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresar nombre de materia"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresar nota"
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric"
      />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Button
            title={item.key}
            onPress={() => navigation.navigate(item.key, { nombre, nota })}
          />
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default ComponenteParcial01;