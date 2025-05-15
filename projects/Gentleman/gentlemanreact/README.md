# 🚀 React + Vite + Bun Starter

Este repositorio es un proyecto de estudio basado en el video **“¡Nuevo Framework de Javascript! Probando BUN + React + Vite”** del canal [Gentleman Programming](https://www.youtube.com/@gentlemanprogramming).

🎥 Video de referencia: [https://www.youtube.com/watch?v=GMnWXlJnbNo](https://www.youtube.com/watch?v=GMnWXlJnbNo)

El objetivo principal es **aprender y experimentar con el entorno de desarrollo moderno** usando:

* [Bun](https://bun.sh/): Runtime ultrarrápido para JavaScript/TypeScript
* [Vite](https://vitejs.dev/): Empaquetador moderno para proyectos frontend
* [React](https://reactjs.org/): Biblioteca para construir interfaces de usuario

Además, se incluyen buenas prácticas con **ESLint** para mantener el código limpio y consistente.

## 📦 Requisitos

* [Bun](https://bun.sh/) ≥ v1.0
* Node.js (solo si usas herramientas adicionales que no estén soportadas por Bun)
* Git (opcional, para clonar el repositorio)

---

## 🛠️ Instalación y configuración

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Instala las dependencias

```bash
bun install
```

### 3. Inicia el servidor de desarrollo

```bash
bun run dev
```

Esto iniciará Vite en modo desarrollo con HMR habilitado. Abre tu navegador en `http://localhost:5173`.

---

## ✅ Linting

Este proyecto incluye una configuración básica de ESLint. Para ejecutarlo:

```bash
bun run lint
```

### Expansión de las reglas de ESLint (opcional)

Si estás desarrollando una aplicación de producción, se recomienda usar reglas de análisis estático más estrictas. Puedes modificar el archivo `eslint.config.js` como se muestra en el siguiente ejemplo:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // o usa esta para reglas más estrictas
    // ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

También puedes añadir plugins específicos para React:

```js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

---

## 🧪 Scripts disponibles

| Comando           | Descripción                         |
| ----------------- | ----------------------------------- |
| `bun run dev`     | Inicia el servidor de desarrollo    |
| `bun run build`   | Genera una versión de producción    |
| `bun run lint`    | Ejecuta ESLint en el proyecto       |
| `bun run preview` | Previsualiza el build de producción |

---

## 🧰 Tecnologías usadas

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Bun](https://bun.sh/)
* [ESLint](https://eslint.org/)
* [TypeScript](https://www.typescriptlang.org/) (opcional, si está en tu setup)

---