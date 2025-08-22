# Fono Aventura (tc-722)

Este repositorio contiene la aplicación móvil "Fono Aventura", construida con Expo + React Native y TypeScript.

## Qué es este proyecto

Fono Aventura es una aplicación móvil (Android/iOS) creada con Expo. Usa componentes reutilizables en `src/components`, datos de lecciones en `src/data` y activos gráficos/sonoros dentro de la carpeta `assets`.

## Requisitos

- Node.js (v18+ recomendado)
- npm
- Expo CLI / EAS CLI (se usan scripts de `expo` y `eas` desde `package.json`)

Instalación de dependencias:

```powershell
npm install
```

## Scripts

Los scripts definidos en `package.json` son:

- `npm run start` — Inicia Metro/Expo Dev Tools (equivalente a `expo start --go`).
- `npm run android` — Abre el proyecto en un emulador/dispositivo Android.
- `npm run ios` — Abre el proyecto en un emulador/dispositivo iOS.
- `npm run web` — Inicia la versión web (Expo for Web).
- `npm run build:development` — Lanza `eas build --platform android --profile development`.
- `npm run build:preview` — Lanza `eas build --platform android --profile preview`.
- `npm run lint` — Ejecuta ESLint sobre `src`.
- `npm run format` — Ejecuta ESLint (`--fix`) y Prettier para formatear `src`.

Ejemplo rápido para desarrollo local (PowerShell):

```powershell
npm run start
```

Notas sobre build con EAS:

- Los scripts `build:development` y `build:preview` usan EAS Build. Asegúrate de tener `eas-cli` instalado globalmente (`npm i -g eas-cli`) y haber iniciado sesión con `eas login`.
- La configuración EAS está vinculada al `projectId` en `app.json` (`expo.extra.eas.projectId`).

## Estructura de carpetas

A continuación se describe el propósito de las carpetas principales del proyecto.

### `assets/`

Contiene todos los recursos estáticos que usa la app.

- `assets/fonts/` — Tipografías incluídas en la app (por ejemplo `PatrickHand-Regular.ttf`).
- `assets/images/` — Imágenes y pictogramas que la app muestra (icons, ilustraciones, logos, fondos, etc.). Hay un `index.ts` dentro de la carpeta para exportar rutas/constantes si se usa desde el código.
- `assets/sounds/` — Archivos de audio (efectos correct/incorrect, sonidos de fin, etc.). También incluye un `index.ts` para exportar rutas de sonido.
- Archivos en la raíz de `assets`:
  - `icon.png`, `icon_no_bg.png`, `adaptive-icon.png` — iconos de la app.
  - `splash.png` — imagen de splash.
  - `favicon.png` — favicon para web.

### `src/`

Contiene todo el código TypeScript/React Native de la app.

- `src/components/` — Componentes reutilizables (botones, iconos, controles, vistas comunes). Ejemplos en este proyecto: `button.tsx`, `image_button.tsx`, `audio_button.tsx`, `progress.tsx`, etc.
- `src/constants/` — Constantes compartidas (colores, temas, tamaños). Por ejemplo `colors.ts` y `colors.css`.
- `src/contexts/` — Contextos de React para estado global (por ejemplo `lock_context.tsx`).
- `src/data/` — Contenido estático y lecciones (`lesson_1.ts`, `lesson_2.ts`, ...). Aquí se centraliza la información que alimenta las pantallas.
- `src/db/` — Módulos relacionados con la persistencia local (por ejemplo, wrappers de `expo-sqlite` o utilidades de almacenamiento).
- `src/hooks/` — Hooks personalizados para lógica reutilizable (por ejemplo hooks para audio, navegación o estado local).
- `src/screens/` — Pantallas principales de la app (cada pantalla representa una vista/escena completa).
- `src/tasks/` — Lógica o utilidades para tareas específicas (puede incluir workers, jobs o funciones de soporte para lecciones).
- `src/types/` — Tipos TypeScript compartidos (interfaces y tipos usados en todo el proyecto).
- `src/shared.ts` — Código utilitario compartido (funciones helper y utilidades pequeñas).

### Archivos de configuración

- `app.json` — Configuración de Expo (iconos, splash, permisos, configuración de EAS projectId, etc.).
- `package.json` — Dependencias y scripts.
- `tsconfig.json` — Configuración de TypeScript.
- `eas.json` — Perfiles de build para EAS (si existe en el repo).
