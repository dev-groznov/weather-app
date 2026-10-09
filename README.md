# Weather App 🌤️

A modern weather web application built with vanilla JavaScript (ES6+) and Webpack. It provides current weather conditions and a 5-day forecast for any city worldwide.

Data source: [Visual Crossing Weather API](https://www.visualcrossing.com/).

## 🚀 Features

- 🔍 **City Search**: Quick lookup for current weather in any location.
- 🌡️ **Unit Toggle**: Instant conversion between Celsius (`°C`, `km/h`, `km`) and Fahrenheit (`°F`, `mph`, `mi`).
- 📊 **Detailed Weather Metrics**:
  - Feels like temperature
  - Wind speed
  - Humidity
  - UV Index
  - Visibility
  - Atmospheric pressure
- 📅 **5-Day Forecast**: View daily high/low temperatures and weather conditions for the upcoming days.
- 🖼️ **Dynamic Backgrounds**: Adaptive background images based on real-time weather conditions (clear, rainy, snowy, cloudy, etc.).
- ⏳ **Loading Indicator**: Smooth UI loading spinner while fetching API data.
- ⚠️ **Error Handling**: User-friendly error messages displayed in the UI for invalid searches, network issues, or rate limits.

## 🛠️ Tech Stack

- **JavaScript (ES6+)** — Modular architecture (`api.js`, `ui.js`, `index.js`).
- **HTML5 & CSS3** — Responsive layout using Flexbox, CSS Grid, and Glassmorphism effects (`backdrop-filter`).
- **Webpack 5** — Module bundling with split configurations for `dev` and `prod`.
- **ESLint & Prettier** — Code quality checks and code formatting.

## 📁 Project Structure

```text
├── public/                 # Static assets (background images)
├── src/
│   ├── scripts/
│   │   ├── api.js          # API calls and HTTP error handling
│   │   └── ui.js           # DOM rendering, loaders, and error state management
│   ├── index.js            # Main application entry point and event handlers
│   ├── style.css           # App styling
│   └── template.html       # HTML template for HtmlWebpackPlugin
├── eslint.config.mjs       # ESLint flat configuration
├── webpack.common.js       # Common Webpack configuration
├── webpack.dev.js          # Webpack development server setup
├── webpack.prod.js         # Production build configuration
└── package.json
```

## 🔧 Installation & Setup

### 1. Clone the repository and install dependencies

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
```

### 2. Run in Development Mode

Starts the Webpack development server with Hot Module Replacement (HMR):

```bash
npm start
# or
npm run dev
```

The application will be available at `http://localhost:8080`.

### 3. Build for Production

Creates an optimized production bundle in the `dist/` directory:

```bash
npm run build
```

### 4. Code Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```