# Usar una imagen base de nginx
FROM nginx:stable-alpine

# Copiar todos los archivos del frontend al directorio por defecto de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
