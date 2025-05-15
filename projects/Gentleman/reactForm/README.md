# 🧾 Formulario Validado con React Hook Form + Zod

Este proyecto es un formulario de registro simple construido con **React**, utilizando **React Hook Form** y **Zod** para validación de datos. Incluye validación de campos como nombre, correo electrónico, contraseña y confirmación de contraseña.

Este repo ha sido en base a https://github.com/Gentleman-Programming/Gentleman-React-Form

## 📦 Tecnologías usadas

* [React](https://reactjs.org/)
* [React Hook Form](https://react-hook-form.com/)
* [Zod](https://zod.dev/)
* [@hookform/resolvers](https://react-hook-form.com/get-started/#SchemaValidation)

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia la app:

```bash
npm run dev
# o
npm start
```

## 📂 Estructura del proyecto

```
src/
│
├── App.tsx                  # Renderiza el componente principal
├── components/
│   ├── CustomForm/          
│   │   └── CustomForm.tsx   # Formulario con validación
│   └── CustomInput.tsx      # Input controlado con validación
├── models/
│   └── index.ts             # Schema de Zod y tipo FormValues
├── App.css                  # Estilos generales
└── components/CustomInput.css # Estilos de los inputs
```

## 🧪 Validaciones del formulario

* **Nombre**: Campo obligatorio
* **Email**: Debe ser un correo válido y obligatorio
* **Contraseña**: Mínimo 6 caracteres
* **Confirmar contraseña**: Debe coincidir con la contraseña

Si algún campo no es válido, se mostrará un mensaje de error personalizado debajo del campo correspondiente.

## 📸 Vista previa

```tsx
<CustomForm />
```

Renderiza el formulario con inputs personalizados y validación automática al enviar.

## 📤 Envío del formulario

Al hacer `submit`, los datos válidos se mostrarán en consola:

```ts
const onSubmit: SubmitHandler<FormValues> = (data) => {
  console.log(data);
};
```

## ✅ Próximas mejoras (opcional)

* Integración con backend
* Estilos más avanzados con Tailwind o Bootstrap
* Tests unitarios
