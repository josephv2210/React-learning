# React curse

Este documento resume conocimientos fundamentales de React, Vite, arquitectura SPA, componentes, estado, renders, bundles, entre otros, orientado a entrevistas técnicas.

## 📑 Índice

- [Instalación y configuración](#instalación-y-configuración)
- [Bundle y Build](#bundle-y-build)
- [ESModules y ECMAScript](#esmodules-y-ecmascript)
- [Herramientas modernas](#herramientas-modernas)
- [StrictMode y ReactDOM](#strictmode-y-reactdom)
- [Arquitectura SPA](#arquitectura-spa)
- [Render y Re-render en React](#render-y-re-render-en-react)
- [Componentes en React](#componentes-en-react)
- [Estado con useState](#estado-con-usestate)

---

<details>
  <summary id="instalación-y-configuración">🛠️ Instalación y configuración</summary>
  This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

</details>

<details>
  <summary id="bundle-y-build">📦 Bundle y Build</summary>

## 📦 Bundle y Build

### ¿Qué es un bundle?

Un **bundle** es un archivo final que contiene todo tu código JavaScript agrupado y optimizado para ser usado en producción. Este se genera dentro del directorio `dist`.

El bundle pasa por tres etapas importantes:

1. **Minificación**: Elimina espacios, saltos de línea y comentarios. Hace el código más pequeño.
2. **Uglify**: Obscurece el código (renombra variables y funciones) para dificultar su lectura por terceros.
3. **Tree Shaking**: Elimina código que no está siendo utilizado (como funciones importadas pero no usadas).

### Archivos públicos y privados

Estructura típica:

*código*jsx
/private
  └─ dashboard
/public
  ├─ login
  └─ register
*código*

- Rutas públicas son accesibles sin login.
- Rutas privadas solo se cargan si el usuario está autenticado.
- Gracias a *lazy loading*, solo se bundlea lo necesario para cada sesión.


## ⚙️ ¿Qué significa _build_?

El **build** es el proceso de transformar el código fuente en un paquete optimizado y listo para ser desplegado. Incluye:

- Transpilación (por ejemplo, de JSX a JavaScript).
- Minificación (eliminación de espacios, comentarios, etc.).
- Tree shaking (eliminación de código no utilizado).
- Generación del bundle.

> Hacer el build es empaquetar y preparar para producción

## ✂️ Minificación, Uglify y Tree Shaking

- **Minificación:** Quita caracteres innecesarios (espacios, saltos de línea, comentarios) para reducir el tamaño del archivo.
- **Uglify:** Además de minificar, renombra variables y funciones para hacer el código más compacto.
- **Tree Shaking:** Técnica que elimina código que no se utiliza en la aplicación. Funciona mejor con módulos ES (ESM) porque permiten análisis estático del código.

> Tree shaking elimina lo que no se usa. Uglify es como ofuscar para reducir aún más

## 📁 Diferencias entre datos públicos y privados en el `dist`

- Todo lo que queda en la carpeta `dist/` después del build es **público**, es decir, puede ser servido directamente al navegador.
- Variables sensibles (como claves de API privadas) **nunca** deben incluirse en el código fuente, ya que cualquier persona podría verlas inspeccionando el bundle.
- Para mantener datos privados, usa variables de entorno que solo se usen del lado del servidor o que estén protegidas mediante backends.

> En el dist queda todo el código que verá el cliente. No se deben poner cosas sensibles ahí.

</details>

<details>
  <summary id="esmodules-y-ecmascript">📦 ESModules y ECMAScript</summary>

## 📜 ¿Qué es ECMAScript?

**ECMAScript (ES)** es el estándar sobre el cual se basa JavaScript. Define cómo debe funcionar el lenguaje, incluyendo su sintaxis, tipos de datos, operadores, estructuras de control, etc. Las versiones se identifican con el año de publicación, por ejemplo:

- ES5 (2009)
- ES6 / ES2015 (2015): una de las actualizaciones más importantes.
- ES2020, ES2021, ES2022, etc.

> ES6 es donde llegaron las clases, let, const, arrow functions y más

## 📦 ¿Qué son los módulos en JavaScript?

Los **módulos** permiten dividir el código en archivos separados que pueden importar/exportar funcionalidades entre sí. Esto mejora la organización, la reutilización y la mantenibilidad del código.

## 📁 CommonJS vs ESModules

| Característica    | CommonJS                       | ESModules (ESM)                |
| ----------------- | ------------------------------ | ------------------------------ |
| Sintaxis          | `require()` / `module.exports` | `import` / `export`            |
| Carga             | Síncrona                       | Asíncrona                      |
| Entorno principal | Node.js                        | Navegadores modernos y Node.js |
| Soporte estático  | No                             | Sí (permite tree shaking)      |

> CommonJS es lo que usaba Node.js antes, ESM es el estándar ahora

## ✅ Ventajas de usar ESModules

- Permiten _tree shaking_.
- Mejor soporte en herramientas modernas.
- Código más limpio y estándar.
- Compatibilidad con navegadores sin necesidad de transpilar (en proyectos modernos).

## 📦 Cómo se usa

```js
// archivo math.js
export function sumar(a, b) {
  return a + b;
}

// archivo main.js
import { sumar } from './math.js';
console.log(sumar(2, 3)); // 5

Import/export se usa solo en ESM, no en CommonJS
```

</details>

<details>
  <summary id="herramientas-modernas">⚙️ Herramientas modernas</summary>

## 🚀 ¿Qué es Vite y por qué reemplaza CRA?

Vite es una herramienta de desarrollo frontend moderna que reemplaza a Create React App (CRA) por ser más rápida y eficiente.

**Ventajas frente a CRA:**

- 🔥 Dev server instantáneo gracias a ESModules nativos
- 📦 Bundle rápido con Rollup
- ⚙️ Configuración mínima
- 💡 Actualización instantánea del módulo (Hot Module Replacement - HMR)

> CRA ya se considera una herramienta obsoleta para nuevos proyectos

---

## 🛠️ ¿Cómo funciona Vite internamente?

Vite funciona en dos fases:

1. **Modo desarrollo:** entrega los módulos directamente al navegador usando ESM.
2. **Modo build:** usa Rollup para hacer el bundle final optimizado.

> Por eso el arranque en dev es casi instantáneo, pero el build final sigue siendo eficiente

---

## 🔌 Ejemplos de plugins comunes

- `@vitejs/plugin-react` – Soporte para JSX y React Fast Refresh
- `vite-plugin-svgr` – Importación de SVG como componentes
- `vite-plugin-pwa` – Soporte para Progressive Web Apps
- `vite-plugin-env-compatible` – Compatibilidad con `.env`

> Vite tiene una API de plugins muy parecida a la de Rollup

---

## 🌱 Uso de variables de entorno en Vite

- Se colocan en archivos `.env`, como `.env`, `.env.development`, etc.
- Se accede a ellas usando `import.meta.env`.

```env
VITE_API_URL=https://api.example.com
const api = import.meta.env.VITE_API_URL;
```

> Deben tener el prefijo VITE\_ para que se incluyan en el cliente

## 📏 ESLint: qué es y para qué sirve

ESLint es una herramienta que analiza el código para encontrar errores y aplicar buenas prácticas.

- Detecta errores comunes y malas prácticas
- Se puede extender con plugins y configuraciones
- Se integra con Prettier para formateo automático

> Ideal combinarlo con TypeScript para tener errores estáticos y de estilo

</details>

<details>
  <summary id="strictmode-y-reactdom">🚨 StrictMode y ReactDOM</summary>

## 🔐 ¿Qué es `StrictMode`?

`StrictMode` es una herramienta de desarrollo que ayuda a detectar problemas potenciales en la aplicación React.
**No afecta el comportamiento en producción**, solo en desarrollo.

Se usa envolviendo componentes en:

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

**¿Qué detecta?**

- Uso de APIs obsoletas
- Efectos secundarios inesperados
- Problemas con componentes controlados
- Problemas con `useEffect`, `useLayoutEffect`, etc.

> En modo desarrollo, puede montar componentes dos veces para detectar errores

---

## 🌳 ¿Qué es `createRoot` y `root.render()`?

Desde React 18, se recomienda usar `createRoot` en lugar de `ReactDOM.render`.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**Ventajas de `createRoot`:**

- Permite el modo concurrente (Concurrent Mode)
- Mejor manejo del render asincrónico
- Preparado para futuras mejoras de React

> `ReactDOM.render()` ya no es compatible con React 18

---

## 🚀 ¿Qué es bootstrapping en React?

El bootstrapping es el proceso de **inicialización** de la aplicación. En React implica:

1. Cargar el HTML con el `div#root`.
2. Importar React y ReactDOM.
3. Crear el root con `createRoot`.
4. Renderizar el componente principal (`App`).

Es el **arranque del ciclo de vida de la app**, donde React toma el control del DOM y empieza a renderizar la UI.

> En otras palabras: es el “inicio del motor” de tu aplicación

</details>

<details>
  <summary id="arquitectura-spa">🌐 Arquitectura de SPA (Single Page Application)</summary>

## 🧾 ¿Qué es una SPA?

Una **SPA (Single Page Application)** es una aplicación web que **carga una sola vez** y luego **maneja la navegación de forma dinámica**, sin volver a cargar la página completa del servidor.

> Esto da una experiencia parecida a una app de escritorio

Características:

- El HTML no se recarga al navegar
- Se usan rutas internas controladas por JavaScript
- El contenido cambia dinámicamente usando JavaScript (React, Vue, etc.)

---

## ⚙️ ¿Cómo React gestiona una SPA internamente?

1. React monta la aplicación dentro de un solo `<div>` (generalmente con id `root`)
2. Utiliza el **Virtual DOM** para actualizar solo lo necesario
3. Usa herramientas como `react-router-dom` para manejar rutas sin refrescar el navegador

> Es decir, todo lo hace en memoria y solo cambia el DOM si realmente se necesita

Ejemplo de estructura típica de SPA con rutas:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

> Al hacer clic en un enlace, no se recarga la página: React intercepta el evento y cambia el componente actual

---

## Ventajas de una SPA

- Navegación rápida (sin recargas)
- Mejor experiencia de usuario
- Menor uso de ancho de banda tras la primera carga

## Desventajas

- SEO puede ser más complejo (aunque solucionable con SSR)
- Tiempo inicial de carga puede ser más largo
- Necesita buen manejo de rutas y estados para no crear bugs

> Por eso se usan librerías como React Query, Zustand o Redux

</details>

<details>
  <summary id="render-y-re-render-en-react">🔁 Render y Re-render en React</summary>

## 🎯 ¿Qué es un trigger?

Un **trigger** es cualquier acción o evento que provoca un render o re-render de un componente.  
Ejemplos comunes:

- Cambiar un `state`
- Cambiar una `prop`
- Un `context` que cambia
- El `key` de un componente

---

## 🔄 Tipos de trigger

1. **Internos**: disparados dentro del mismo componente (ej. `useState`)
2. **Externos**: vienen de un padre o contexto (ej. props o context API)

> También puede ser un cambio forzado con `forceUpdate` (aunque no se recomienda)

---

## 🧱 Fases del render en React

1. **Render Phase**:
   - Se calcula qué cambios se necesitan
   - No se toca el DOM todavía
2. **Commit Phase**:
   - Se actualiza el DOM con los cambios calculados

> React separa render y commit para optimizar el rendimiento

---

## 🧾 Diferencias entre DOM real y Virtual DOM

- **DOM real**: estructura completa del HTML cargado en el navegador
- **Virtual DOM**: copia ligera mantenida por React en memoria
- React compara el nuevo Virtual DOM con el anterior (reconciliación) y aplica solo los cambios necesarios al DOM real

---

</details>

<details>
  <summary id="componentes-en-react">⚛️ Componentes en React</summary>

## 🧱 Estructura básica de un componente

```jsx
function Saludo() {
  return <h1>Hola Mundo</h1>;
}
```

> Todos los componentes empiezan con mayúscula y devuelven JSX

---

## 🧾 ¿Qué es JSX?

**JSX** es una extensión de JavaScript que permite escribir HTML dentro de JavaScript de forma declarativa.

```jsx
const elemento = <h1>Hola, {nombre}</h1>;
```

> JSX se compila a `React.createElement` internamente

---

## 🧠 Tipos de componentes

- **Componentes tontos (presentacionales)**: reciben props y muestran UI
- **Componentes inteligentes (containers)**: manejan lógica y estado

> Separar lógica de presentación ayuda a la mantenibilidad del código

---

## 📁 Buenas prácticas con `index.ts`

Cuando tienes una carpeta con varios componentes, puedes usar un `index.ts` para exportarlos todos desde un solo punto:

```ts
// en Button/index.ts
export { default as Button } from "./Button";
export { default as ButtonIcon } from "./ButtonIcon";
```

Esto permite importar así:

```ts
import { Button, ButtonIcon } from "./components/Button";
```

---

  </details>

  <details>
  <summary id="estado-con-usestate">🧠 Estado en React (`useState`)</summary>

## 🗂️ ¿Qué es el estado?

El **estado** representa información que puede cambiar con el tiempo.  
Se maneja dentro del componente con `useState`.

---

# 🧪 ¿Cómo se usa `useState`?

```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
}
```

> Cada vez que se llama `setContador`, React vuelve a renderizar el componente

---

## ⚡ ¿Qué es el batching en React?

**Batching** es cuando React agrupa múltiples actualizaciones de estado para hacer un solo render y así mejorar el rendimiento.

```jsx
setCount((c) => c + 1);
setFlag((f) => !f);
// React hace un solo render, no dos
```

---

## ⚠️ Diferencia entre uso directo y uso funcional de `setState`

- Uso directo: `setContador(contador + 1)`
- Uso funcional: `setContador(prev => prev + 1)`

> El uso funcional es más seguro cuando hay múltiples updates consecutivos, porque React puede agrupar y diferir los renders

---

## 🔍 Ejemplo con `console.log`

```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  console.log(count); // muestra el valor actual, no el nuevo
};
```

> Porque el cambio de estado es asincrónico y el nuevo valor aún no ha sido aplicado

</details>
