# Autenticación

Esta carpeta contiene la funcionalidad de autenticación de la aplicación.

## Organización sugerida

- `login/`: pantalla y lógica para iniciar sesión.
- `register/`: registro de usuarios, si aplica.
- `session/`: manejo del usuario autenticado y persistencia de sesión.
- `services/`: comunicación con la API de autenticación.
- `components/`: componentes reutilizables del flujo de autenticación.

No almacenar contraseñas, tokens ni claves directamente en el código. Los secretos deben manejarse mediante variables de entorno o el mecanismo de configuración seguro del entorno de despliegue.

## Regla de texto para la interfaz

Las pantallas deben usar texto en formato normal, respetando mayúsculas y minúsculas naturales del idioma. No utilizar la transformación visual `uppercase` ni etiquetas escritas completamente en mayúsculas para títulos, labels, botones o mensajes.

## Regla de temas y validaciones

Cada pantalla debe revisarse en modo oscuro y claro. En modo claro, los campos de texto deben usar fondo blanco, texto oscuro y placeholder gris. Las validaciones de contraseña deben mostrar un check verde por cada requisito cumplido.
