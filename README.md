# Página web: Azahares – Clínica Integral 

El objetivo fue desarrollar una página web utilizando JavaScript y React, orientada a una plataforma institucional de un centro médico, enfocada en la gestión de información y en la relación entre médicos y pacientes.
El trabajo se enfocó en el desarrollo de inicio de la página web con control de inicio de sesión, que permite acceder de forma segura a las distintas cuentas. Además, se priorizó la reutilización de componentes, el diseño responsive y a un diseño estético claro y profesional.
El proyecto simula una plataforma real, contemplando vistas públicas, paneles de usuario y administración.

# Realizado con: 
-	React
-	JavaScript (ES6+)
-	Vite: como entorno de desarrollo  
-	Styled Components: para el manejo de estilos  
-	React Router DOM: para la navegación  
-	Context API: para la gestión de estado global  
-	React Icono: para iconos en la página.
  
# Estructura del proyecto: 
project-rolling-clinica/
├── dist/
├── node_modules/
├── public/
 └── src/
 
# Desarrollo del contenido de los archivos:
-	Carpeta dist: Contiene los archivos generados automáticamente al construir el proyecto para producción. Incluye los archivos JavaScript optimizados, imágenes y el `index.html` final.  Se genera automáticamente.
-	Carpeta node_modules: Incluye todas las dependencias del proyecto, es gestionada por el gestor de paquetes.
-	Carpeta public: Contiene archivos estáticos accesibles públicamente, como imágenes y recursos generales que no requieren procesamiento por React.
-	Carpeta src: Es la carpeta principal del proyecto, donde se desarrolla toda la lógica y la interfaz de la aplicación.
  
# Contenido src
-	Assets: Contiene recursos gráficos utilizados dentro de la aplicación, como imágenes y logotipos.
-	Components: Incluye componentes reutilizables de la aplicación. 
Dentro de esta carpeta se encuentra la subcarpeta admin, que agrupa componentes relacionados a la estructura general del sistema y vistas administrativas, como: Header, Footer, Layout, Rutas protegidas, Avisos informativos. Estos componentes permiten mantener una estructura ordenada y reutilizable en distintas vistas.
-	Context:
1.	AuthContext: manejo de autenticación y datos del usuario.
2.	DataContext: gestión de información general del sistema.
-	Pages: 
1.	Home
2.	Login
3.	Register
4.	Panel de administración
5.	Panel del médico
6.	Menú del paciente
7.	Especialidades médicas
8.	Turnos y detalles
-	Styles: Contiene los estilos globales del proyecto.
-	Services: incluye archivos relacionados a la obtención o simulación de datos. En este proyecto se utiliza un archivo de datos mockeados para simular información del sistema.
  
# Archivos principales en `src`
- App.jsx: componente raíz donde se configuran las rutas principales.
- main.jsx: punto de entrada de la aplicación React.
- App.css / index.css: estilos generales complementarios.
  
# Funcionalidades principales:
-	Página de inicio con información institucional.
-	Sistema de inicio de sesión con control de acceso según el rol del usuario.
-	Navegación mediante rutas protegidas.
-	Componentes reutilizables y modulares.
-	Diseño responsive adaptable a distintos dispositivos.
-	Interfaz clara y orientada a la experiencia del usuario.
  
# Participantes:
Francisco De Cilia. 
Nicole Politti. 
