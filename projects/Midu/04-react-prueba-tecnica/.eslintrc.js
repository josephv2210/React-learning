module.exports = {
  extends: ['eslint-config-prettier'],
  ignorePatterns: ['.prettierrc'],
  overrides: [
    {
      // Configuración específica para un archivo o conjunto de archivos
      files: ['.prettierrc'], // Ruta del archivo que deseas ignorar
      rules: {
        // Define las reglas de ESLint que deseas deshabilitar para este archivo
        // Por ejemplo:
        'eslint/no-error': 'off', // Desactiva todos los errores para este archivo
      },
    },
  ],
};
