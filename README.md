# Jungle!
A continuación explicaré hasta qué punto he llegado en esta prueba:

# 1) Backend
He hecho las 3 colecciones Animal, Families y Hábitat que se solicitaban con los distintos tipos de datos. He añadido en Animal una propiedad adicional que es imagen para que, al hacer las peticiones get en el front quedase más estético. Los requisitos eran:

- Al menos 5 animales en la colección.
- Al menos 2 familias en la colección.
- Al menos 2 habitats en la colección.

Yo he añadido 6 animales, 6 familias y 6 hábitats.

# 2) Frontend
Vistas solicitadas Home, Animals, Hábitat y Nuevo animal. He añadido a las pedidas lista de animales, que es una opción para mostrar todos los animales de la base de datos.

A) Home: 100% responsive, con Hero y main, el apartado content no tuve muy claro a qué se refería y no encontré información sobre el tema.

B) Animals: Filtro por nombre y filtro por si la familia vive en grupos o no. En la vista de Lista de animales se incluye lo que solicitaban con una lista de todos los animales y una vista de detalle de la información de cada uno al hacer click en ellos. Todas las peticiones realizadas con axios.

C) Hábitat: Galería con un mapa realizado con la librería "react-google-maps".

D) Nuevo animal: Formulario a través de un select en el que puedes elegir la colección a la que deseas añadir el contenido. Hay una colección Collaborate en la que se almacena (se puede ver en el backend). Todos los formularios han sido realizados con React Formik.

EXTRA POINTS:

- Autenticación realizada con la librería @auth0/auth0-react. Esto lo hice para variar la autenticación desde el backend. Está 100% hecha desde el front y enlaza con cuentas de google, deja registrarse...
- Test básicos con React: realizados 16 test básicos en las 6 pages del frontal. Test realizados con jest y con enzyme. Con el comando yarn test se pueden ejecutar y comprobar que funcionan.
- BEM/GRID/FLEX: maquetación realizada enteramente con la librería styled components.
- Buenas prácticas y arquitectura Upgrade: todo distribuido en carpetas y el código más limpio que he conseguido teniendo en cuenta el tiempo de la prueba. Archivo .env que contiene las variables de entorno para la autenticación, carpeta _test_ que contiene todos los test y en general la arquitectura realizada durante todo el bootcamp.

*IMPORTANTE* Para que el login funcione debe estar lanzado el frontend en el puerto 3000, que es el habilitado desde la librería de @auth0/auth0-react