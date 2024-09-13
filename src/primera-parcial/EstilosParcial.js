import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Gris claro suave
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333333', // Gris oscuro para el título
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: '#cccccc', // Borde gris claro
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8, // Bordes redondeados
    width: '85%',
    backgroundColor: '#ffffff', // Fondo blanco para inputs
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Sombra sutil
  },
  text: {
    fontSize: 18,
    color: '#4d4d4d', // Gris intermedio
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#4CAF50', // Verde suave para los botones
    color: '#ffffff', // Texto blanco
    padding: 12,
    marginVertical: 12,
    borderRadius: 8,
    width: '60%',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Sombra para los botones
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default styles;
