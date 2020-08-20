#### Multi Stage 1
FROM node:latest as node
LABEL author="Ulysses Grant"
WORKDIR /app
COPY package.json package.json
RUN npm install 
COPY . . 
RUN npm run build -- --prod


#### Multi Stage 2
FROM nginx:alpine 
VOLUME /var/cache/nginx
COPY --from=node /app/dist /user/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

### Multi Stage 3