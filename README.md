# 🔴 PokéMundo

Una aplicación web moderna para explorar información sobre Pokemon, construida con JavaScript vanilla y Vite.

![PokéMundo Preview](https://github.com/SanAfaGal/pokemundo/blob/4519da33e99276bda063a75866c6c56ac164a1e0/preview.png)

## ✨ Características

- 🔍 **Búsqueda inteligente**: Busca Pokemon por nombre, tipo o número de Pokédex
- 📱 **Diseño responsivo**: Optimizado para dispositivos móviles y desktop
- 🎨 **Interfaz moderna**: Diseño atractivo con animaciones y efectos hover
- ⚡ **Rendimiento optimizado**: Carga rápida con imágenes lazy loading
- 📊 **Estadísticas detalladas**: Visualiza HP, ataque, defensa y velocidad
- 🏷️ **Sistema de tipos**: Colores distintivos para cada tipo de Pokemon

## 🛠️ Tecnologías Utilizadas

- **JavaScript ES6+**: Lógica de la aplicación
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Grid y Flexbox
- **Vite**: Herramienta de desarrollo y build
- **PokeAPI**: Imágenes oficiales de Pokemon

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/SanAfaGal/pokemundo.git
   cd pokemundo
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   
   Visita `http://localhost:5173` para ver la aplicación en funcionamiento.

## 🎮 Cómo Usar

### Explorar Pokemon
- Al cargar la página, verás una colección de Pokemon populares
- Cada tarjeta muestra información detallada incluyendo tipos y estadísticas

### Buscar Pokemon
- Usa la barra de búsqueda en la parte superior
- Puedes buscar por:
  - **Nombre**: "pikachu", "charizard"
  - **Tipo**: "fire", "water", "electric"
  - **Número**: "1", "25", "150"

### Información Mostrada
Cada Pokemon incluye:
- 🖼️ Imagen oficial de alta calidad
- 🔢 Número de Pokédex
- 🏷️ Tipos con colores distintivos
- 📊 Estadísticas base (HP, Ataque, Defensa, Velocidad)

## 📁 Estructura del Proyecto

```
pokemundo/
├── public/
│   └── vite.svg
├── src/
├── index.html          # Página principal
├── main.js            # Lógica de la aplicación
├── style.css          # Estilos CSS
├── counter.js         # Utilidad (no utilizada)
├── package.json       # Dependencias y scripts
└── README.md         # Este archivo
```

## 🎨 Personalización

### Agregar Nuevos Pokemon

Para agregar más Pokemon, edita el array `pokemonData` en `main.js`:

```javascript
const pokemonData = [
  // ... Pokemon existentes
  {
    id: 151,
    name: "mew",
    types: ["psychic"],
    stats: { hp: 100, attack: 100, defense: 100, speed: 100 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
  }
];
```

### Personalizar Colores de Tipos

Los colores de los tipos se definen en `style.css`:

```css
.type-fire { background: #ff4444; }
.type-water { background: #3399ff; }
/* Agrega más tipos según necesites */
```

### Modificar el Tema

Las variables CSS principales están en `:root`:

```css
:root {
  --primary-color: #3b4cca;
  --secondary-color: #ffcb05;
  --accent-color: #ff0000;
  /* Personaliza estos valores */
}
```

## 🚀 Deployment

### Build para Producción

```bash
npm run build
```

Esto genera los archivos optimizados en la carpeta `dist/`.

### Opciones de Deployment

- **Netlify**: Arrastra la carpeta `dist` a [Netlify Drop](https://app.netlify.com/drop)
- **Vercel**: Conecta tu repositorio en [Vercel](https://vercel.com)
- **GitHub Pages**: Usa GitHub Actions para deployment automático

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar PokéMundo:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

### Ideas para Contribuir

- 🔄 Integración con la PokeAPI completa
- 🎵 Efectos de sonido
- 🌙 Modo oscuro
- 📱 PWA (Progressive Web App)
- 🔄 Animaciones de transición entre Pokemon
- 📈 Gráficos de estadísticas más avanzados

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 🐛 Reportar Problemas

Si encuentras algún bug o tienes sugerencias:

1. Revisa los [issues existentes](https://github.com/tu-usuario/pokemundo/issues)
2. Si no existe, [crea un nuevo issue](https://github.com/tu-usuario/pokemundo/issues/new)
3. Incluye detalles sobre el problema y pasos para reproducirlo

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [PokeAPI](https://pokeapi.co/) por las imágenes y datos de Pokemon
- [Vite](https://vitejs.dev/) por la excelente herramienta de desarrollo
- La comunidad Pokemon por la inspiración

## 📞 Contacto

- **Autor**: Tu Nombre
- **Email**: tu-email@ejemplo.com
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu-perfil)

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella en GitHub!

**¡Gotta catch 'em all!** 🔴⚪
