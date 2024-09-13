import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import axios from 'axios';
import styles from './EstilosParcial';

const AxiosParcial = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsuarios(response.data))
      .catch(error => console.error(error));
  }, []);

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar por nombre"
        value={busqueda}
        onChangeText={setBusqueda}
      />
      <FlatList
        data={usuariosFiltrados}
        renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default AxiosParcial;