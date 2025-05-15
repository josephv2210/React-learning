# React curse

Este documento resume conocimientos fundamentales de React, Vite, arquitectura SPA, componentes, estado, renders, bundles, entre otros, orientado a entrevistas técnicas.

## 📑 Índice

- [Introducción](#introduccion)
- [Bundle y Build](#bundle-y-build)
- [ESModules y ECMAScript](#esmodules-y-ecmascript)
- [Herramientas modernas](#herramientas-modernas)
- [StrictMode y ReactDOM](#strictmode-y-reactdom)
- [Arquitectura SPA](#arquitectura-spa)
- [Render y Re-render en React](#render-y-re-render-en-react)
- [Componentes en React](#componentes-en-react)
- [Estado con useState](#estado-con-usestate)
- [Estado con useEffect](#estado-con-useeffect)
- [Estado con UseCallback](#estado-con-usecallback)
- [Estado con CustomHook](#estado-con-customHook)
- [Composition pattern](#composition-pattern)
- [Formularios en React con ZOD](#formularios-zod)
- [Estados en react con Context](#estado-con-context)

---

<details>
  <summary id="introduccion">📦 Introducción</summary>


# 🧠 Cuándo Usar React vs Framework

## 📌 Introducción

Antes de comenzar a trabajar con React, es **imprescindible tener una buena base en JavaScript**. React es una **librería**, no un framework, y entender esta diferencia es clave para tomar decisiones de arquitectura correctas en tus proyectos.

---

## ⚛️ ¿Qué es React?

- React es una **librería** desarrollada por **Facebook/Meta**.
- Utiliza **CSR (Client Side Rendering)**, lo que significa que todo el renderizado ocurre en el navegador del usuario.
- Ideal para construir **Single Page Applications (SPA)**.
- Basado en **componentes reutilizables**.
- Sigue un enfoque **MVM (Model-View-Model)** o **MVC (Model-View-Controller)**.

### 🧩 Un componente en React incluye:

- `HTML`: estructura y contenido.
- `CSS`: estilos.
- `TypeScript` o `JavaScript`: lógica del componente.

---

## 🧠 MVC vs MVM (aplicado a React)

| Rol         | Descripción                                                                 |
|-------------|-----------------------------------------------------------------------------|
| **Model**   | Donde se guardan los datos y variables.                                     |
| **View**    | Muestra en pantalla lo que hay en el modelo.                                |
| **Controller** | Lógica que modifica el modelo y responde a interacciones del usuario. |

> En React: `TypeScript`/`JS` → Modelo → Vista → Modelo

---

## 🚀 Ventajas de React

- 📈 Rápido
- 🎯 Simple
- 🧪 Ideal para prototipos
- 🤹 Fácil de aprender
- 🪶 Liviano
- 🧱 Componible

> A pesar de su poder, **React sigue siendo una librería**. Es decir, necesita de otras librerías o herramientas para construir una aplicación completa (enrutado, manejo de estados, etc.).

---

## ⚙️ Cuándo Usar React

- Quieres una **app a medida**.
- Necesitas **prototipar** rápidamente.
- Buscas **simplicidad** y un control total del stack.
- Deseas **minimizar el peso** de tu aplicación.
- Estás construyendo una **SPA** con **CSR**.

---

## 🏗️ ¿Y los Frameworks?

Un **framework** ya incluye muchas herramientas preconfiguradas: enrutamiento, SSR, manejo de datos, estructura de carpetas, etc.

### Ejemplos de frameworks basados en React:

#### 🔹 Next.js

- Ideal para **aplicaciones públicas y privadas**.
- Compatible con **SSR (Server Side Rendering)** y **SEO**.
- Ofrece **file-based routing**, API routes, prefetching, imágenes optimizadas, etc.
- Tiene una **filosofía distinta a React puro**.

#### 🔹 SolidJS

- Se considera lo que *React debería haber sido desde el inicio*.
- Más eficiente en actualizaciones del DOM.
- Sintaxis y enfoque muy similares a React.

---

## 🚫 ¿Y AngularJS?

- Se considera desactualizado.
- Muy **verboso**.
- Requiere mucha cantidad de código.
- Curva de aprendizaje **elevada**.

---

## ✅ Conclusión

| Necesidad                       | Opción recomendada |
|---------------------------------|--------------------|
| App pequeña o prototipo         | React              |
| Control total del stack         | React              |
| SEO, rutas, SSR, APIs           | Next.js            |
| Máximo rendimiento y reactividad| SolidJS            |
| Proyecto grande con convenciones| Framework completo |

---

> **Tip**: Aprende primero React puro, domina JavaScript y luego avanza a frameworks como Next.js para tener una base sólida.

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

```tsx
/private
└─ dashboard
/public
├─ login
└─ register
```

- Rutas públicas son accesibles sin login.
- Rutas privadas solo se cargan si el usuario está autenticado.
- Gracias a _lazy loading_, solo se bundlea lo necesario para cada sesión.

## ⚙️ ¿Qué significa _build_?

El **build** es el proceso de transformar el código fuente en un paquete optimizado y listo para ser desplegado. Incluye:

- Transpilación (por ejemplo, de tsx a JavaScript).
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
// console.log(sumar(2, 3)); // 5

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

- `@vitejs/plugin-react` – Soporte para tsx y React Fast Refresh
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

```tsx
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

```tsx
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

```tsx
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

```tsx
function Saludo() {
  return <h1>Hola Mundo</h1>;
}
```

> Todos los componentes empiezan con mayúscula y devuelven tsx

---

## 🧾 ¿Qué es tsx?

**tsx** es una extensión de JavaScript que permite escribir HTML dentro de JavaScript de forma declarativa.

```tsx
const elemento = <h1>Hola, {nombre}</h1>;
```

> tsx se compila a `React.createElement` internamente

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

```tsx
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

```tsx
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

## 🔍 Ejemplo con `// console.log`

```tsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  // console.log(count); // muestra el valor actual, no el nuevo
};
```

> Porque el cambio de estado es asincrónico y el nuevo valor aún no ha sido aplicado

</details>

<details>
  <summary id="estado-con-useeffect">🛠️ Estado con UseEffect</summary>

## Hook

que es un hook un hook es un gancho que engancha algo del estado, que se puede identificar por que tiene _use_ al inicio

existen dos tipos

- Propios de react: como lo son UseEffect, UseState, etc
- Custom Hooks: que son los que creamos nosotros

---

## useEffect

Esta es su estructura basica

```tsx
useEffect(() => {}, []);
```

Es un metodo que acepta otro metodo y tambien acepta un array de dependencias

Acepta una logica, pero cuando se ejecuta esta logica?

esto se va a ejecutar en uno o varios momentos especificos

1. Cuando se monta el componente
2. Cuando se modifique uno de los valores del state

   - Pero cuando? cuando se modifique cualquier valor? no, solo cuando se modifiquen los que estan dentro del array de dependencias, por eso es que depende

   - por ejemplo si quiero que se ejecute cuando data cambie se debe ver asi

   ```tsx
   useEffect(() => {}, [data]);
   ```

   > tener en cuenta que si se deja vacio va a ejecutarse cuando cualquier valor del estado cambie

Que significa poner un return?

que se va a ejecutar cuando el componente se destruya

```tsx
useEffect(() => {
  return () => {};
}, [data]);
```

pero para que sirve esto? sirve para manejar el estado de la memoria, si tenemos un subscribe o algo asincrono, podemos manejar y liberar esa memoria

> Este es un uso incorrecto del useEffect como manejador de siclos de vida

## Verdadero uso

- Se usa para comunicarnos con un endpoint - una entidad externa al componente
- Operaciones asyncronas
- Parametros de entrada
- context

en donde podemos hacer algo asi

```tsx
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fechData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      // console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fechData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
```

## Mal uso

Si yo tengo esto dentro de mi codigo

```tsx
const [loading, setLoading] = useState(true);

useEffect(() => {
  // console.info(loading);
}, [loading]);
```

Esta mal usado, por que el useEffect tiene que usarse para cosas externas, y existe una manera de hacerlo aun teniendo rerenderings
y la solución es crear un metodo, y en donde este cambiando el parametro llamarlo, algo asi

```tsx
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const // consoleLoader = (loadingValue: boolean) => {
    setLoading(loadingValue);
    // console.info(loading);
  };

  const fechData = async () => {
    setLoading(true);
    // consoleLoader(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error as string);
    } finally {
      //se ejecuta sin importar como termina
      // consoleLoader(false);
    }
  };

  useEffect(() => {
    fechData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;

```

## Diferencia de objetos

si tengo esto

```tsx
const a = {
  name: "Alan",
};
const b = {
  name: "Alan",
};

// console.log("Es igual?::: ", a === b);
//false
```

Esto por que es difenente el espacio de memoria, es decir

se crea una referencia (a) a un espacio de memoria '>='el cual tiene un objeto name: Alan
se crea una referencia (b) a un espacio de memoria '>='el cual tiene un objeto name: Alan

por lo que cada uno es un espacio de memoria diferente

</details>

<details>
  <summary id="estado-con-customHook">🛠️ Custom Hooks</summary>

creamos una carpeta dentro

    -src
      -hooks

y ahi creamos un archivo **useFetch.ts** tener en cuenta que al ser un hook es buena practica que empiece por use

siempre se le crea una interface

hay algo llamados genericos dentro de typescript, lo que nos permite pasarle un tipo que podamos usar adentro (explicalo un poco mas)

```ts
interface Params<T> {
data: T | null;
}
```

es decir que si alguien usa Params<Users> se le dice que vas a pasar por parametro algo que devuelve un user

donde despues se pude llamar asi
useFetch<User>()

en este caso estoy declarando lo siguiente 

```ts
type Data<T> = T | null;
type ErrorType<T> = Error | null;

interface Params<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}
```

Por que lo declaro dentro del hook y no fuera de este??
por que eso solo lo va a usar este hook

## Interruptores

Hay algo que se llaman interruptores, los cuales cumplen la funcion de que si estamos en una petición y falla o algo la petición sigue ahi, lo que vamos a hacer es desuscribirnos
(Confirma por favor, corrige y da un ejemplo)

importante para dejar la memoria limpia lo que hacemos es lo siguiente 

```ts
import { useState, useEffect } from 'react';

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
}

export const useFetch = <T>(url: string): Params<T> => {
    const [data, setData] = useState<Data<T>>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType>(null);

    useEffect(() => {
        let controller = new AbortController();

        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await fetch(url, controller);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const json: T = await response.json();
                setData(json);
                setError(null);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => {
            controller.abort();
        }; 
    }, [url]);

    return { data, loading, error };
}

```

(Explica cada parte del codigo)

</details>

<details>
  <summary id="composition-pattern">🛠️ Composition pattern</summary>

  No solo es para react, es de utilidad para todo los frameworks

  De que manera puedo compartir información de padres a hijos? con 
  - props
  - context

  hay algo llamado Prop Drilling
  lo que traduce taladro de props

  que no hay info de padre a hijo sino de padre a nieto

  algo asi 

  ```tsx
  import "./Button.css";

  interface Props {
    label: string;
    parentMethod: () => void;
  }

  export const ChildrenButton = ({ label }: Pick<Props, "label">) => {
    return (
      <div>
        <h1>{label}</h1>
      </div>
    );
  };

  export const Button = ({ label, parentMethod }: Props) => {
    //Componente tonto, que no tiene estado, no tiene logica

    return (
      <button className="custom-buttom" onClick={parentMethod}>
        <ChildrenButton label={label} />
      </button>
    );
  };
  ```

  el problema es que empezamos a hacer que para que el padre funcione tiene que estar si o si el Nieto y tiene que pasarse la información multiples veces

  un metodo que sirve en varios es utilizar el tema de servicios 

  en donde tenemos esto

  ```tsx
  export class ShareValueChildren {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    setValue(value: string) {
        this.value = value;
    }
  }
  ```

  y luego llamarlo, el problema es que esto lleva demaciado tiempo aunque es una solución

  y aqui encontramos algo llamado condición de carrera, en donde el problema es que primero obtiene el valor, y despues lo setea, en donde puede ser que alguien pida un valor antes de ser dado

  ## Mejor solución

  App
  ```tsx
  import "./App.css";
  import { Button, ChildrenButton } from "./components/";

  function App() {
    const handleClick = () => {
      // console.log("Button clicked");
    };

    return (
      <Button parentMethod={handleClick}>
        <ChildrenButton><div>My label</div></ChildrenButton>
      </Button>
    );
  }

  export default App;
  ```

  Button
  ```tsx
  import { ReactNode } from "react";
  import "./Button.css";

  interface Props {
    children: ReactNode,
    parentMethod: () => void
  }

  interface ChildrenProps {
    children: ReactNode
  }

  export const ChildrenButton = ({children}: ChildrenProps) => {
    return (
      <div>
        <h1>{children}</h1>
      </div>
    );
  };

  export const Button = ({ children, parentMethod }: Props) => {
    //Componente tonto, que no tiene estado, no tiene logica

    return (
      <button className="custom-buttom" onClick={parentMethod}>
        {children}
      </button>
    );
  };
  ```

  y esto por que es diferente o por que es mejor?

  por que cada componente tiene su propia logica, cada uno se encarga de si mismo y el resto de logica la tiene quien corresponde

  composition pattern
  Es tratar que la logica que es del padre sea del padre, la que es del hijo del hijo, evitar que se esten compartiendo logica



</details>

<details>
  <summary id="formularios-zod">🛠️ Formularios en React con ZOD</summary>

  vamos a crear formularios en reac, para eso necesitamos la siguiente extructura de carpetas

  components
  -CustomForm
    -components
    -CustomForm.tsx
    -index.ts

A su vez necesitamos instalar lo siguiente

bun install react-hook-form zod @hookform/resolvers

react-hook-form es con lo que vamos a hacer los form
zod validaciones
hookform/resolvers es el que hace la coneccion entre react-hook-form con zod

zod es para crear schemas

para acceder a todo lo que se hizo ve a

[Custom Form](./reactForm/)

</details>

<details>
    <summary id="estado-con-context">
    Estados en react con Context
    </summary>

## Context
De todas las maneras que existen para compartir información hay una muy comun llamada context

lo bueno e interezante que tiene, es la facilidad y capacidad que tiene de manera nativa de compartir la información 

vamos a compartir información del padre al hijo del hijo del hijo 

el contexto es una via de comunicación donde entra por un lado y sale por otro

## programación reactiva 
es como si tuvieras un tubo por el cual envias un objeto, el tubo tiene varios huecos, donde las personas pueden ir viendo
en donde cada persona describe o ve el objeto de maneras distintas

por lo que podemos decir que
es un canal de comunicación en donde hay personas subscritas a un canal en donde cada vez que hay un evento reaccionan de manera diferente

tiene que funcionar dentro de un provider

```tsx
    import { createContext, useState } from "react";
    import "./App.css";
    import { Button, ColorRed, AppForm } from "./components/";

    export const GentlemanContext = createContext({});

    function App() {
    const [gentlemanContextValue, setGentlemanContextValue] = useState(false);

    const submit = () => {
        // console.log("submit");
    };

    const handleClick = () => {
        // console.log("Button clicked");
    };

    const dimeHola = () => {
        alert("Hola");
    };

    return (
        <GentlemanContext.Provider
        value={{ gentlemanContextValue, setGentlemanContextValue }}
        >
        <ColorRed>
            <Button parentMethod={dimeHola}>My label</Button>
        </ColorRed>
        <Button parentMethod={handleClick}>Boton normal</Button>

        <AppForm>
            <button type="submit" onClick={submit}>
            Submit
            </button>
        </AppForm>
        </GentlemanContext.Provider>
    );
    }

    export default App;

```

en donde ahora cualquier componente dentro del provider puede acceder a estos valores

## Mejor solución

esto funciona pero tiene varios problemas, 1 es logica del app? no, entonces por que esta ahi?

lo segundo este no se puede utilizar dentro de APP, por que este solo se puede usar dentro de lo que lo encapsule, y a APP no lo esta encapsulando

y tambien no se puede controlar la existencia



</details>