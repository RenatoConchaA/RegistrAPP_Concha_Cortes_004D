# REGISTRAPP

Aplicación para registrar las asistencias por medio de QR para DuocUC

# Dependencias

Node.js

Ionic 6
```
npm install -g @ionic/cli@6
```

Angular
```
npm install -g @angular/cli
```

# Aplicaciones adicionales

Se deben instalar aplicaciones adicionales dentro de la aplicacion aparte de las dependencias

JSON server
```
npm install -g json-server
```

Levantar servidor JSON en .../src/app/data
```
json-server --watch registros.json --host 0.0.0.0 --port 3300
```

Instalar ToastController
```
npm install @capacitor/toast
```