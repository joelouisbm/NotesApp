# NotesApp
 Aplicación de notas realizada con VueJS, no se conecta con ningún servicio de base de datos, utiliza el almacenamiento interno del cliente a través de localStorage.

# Tecnologías
 * vue-router
 * vuex
 * vuex-persistedstate

# Estilos
 * Boostrap

# Directorios

```bash
├── src
│   ├── assets
│   ├── components
│   │   ├── Editor.vue
│   |   └── main.js
│   ├── mixins
│   │   └── mixins.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   ├── views
│   │   ├── Home.vue
│   |   └── Navigation.vue
│   ├── App.vue
│   └── main.js
```
 * src/components >> contiene los componentes que se podrían reutilizar en la aplicación

 * src/mixins >> contiene un fichero llamado mixins.js en el cual se definen las funciones que pueden ser reutilizadas en cualquier componente con el fin de evitar código repetido.
 
 Todo el flujo de la aplicación se realiza a travez de la librería de vuex.

# Conclusión
 Es una pequeña aplicación para *grabar, actualizar, eliminar y obtener* notas en la cual se muestra el uso de componentes, rutas, vuex para centralizar información y se realiza una persistencia de datos del lado del cliente.
 Nota: *La aplicación no es responsive*