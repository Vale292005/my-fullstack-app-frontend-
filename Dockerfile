# Etapa 1: Build con Node 20
FROM node:20-bullseye AS build
WORKDIR /app

# Instalar herramientas necesarias
RUN apt-get update && apt-get install -y python3 make g++ git && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

COPY . .

# Build Angular en producción
RUN npx ng build --configuration production

# ⬇️ IMPORTANTE: Verifica la ruta exacta después del build
RUN echo "=== Contenido de dist/ ===" && ls -la dist/
RUN echo "=== Contenido de dist/frontend/ ===" && ls -la dist/frontend/ || true
RUN echo "=== Contenido de dist/frontend/browser/ ===" && ls -la dist/frontend/browser/ || true

# Etapa 2: Servir con Nginx
FROM nginx:stable-alpine

# ⬇️ CAMBIO CRÍTICO: Nueva estructura de Angular
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Verifica que los archivos se copiaron
RUN ls -la /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
