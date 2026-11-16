# Autenticación

Esta carpeta contiene la funcionalidad de autenticación de la aplicación.

## Organización sugerida

- `login/`: pantalla y lógica para iniciar sesión.
- `register/`: registro de usuarios, si aplica.
- `session/`: manejo del usuario autenticado y persistencia de sesión.
- `services/`: comunicación con la API de autenticación.
- `components/`: componentes reutilizables del flujo de autenticación.

No almacenar contraseñas, tokens ni claves directamente en el código. Los secretos deben manejarse mediante variables de entorno o el mecanismo de configuración seguro del entorno de despliegue.
