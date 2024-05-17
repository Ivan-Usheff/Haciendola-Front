FROM node:18-alpine AS development
ENV NODE_ENV development

RUN mkdir -p /var/www/front
WORKDIR /var/www/front
ADD . /var/www/front

RUN npm ci

EXPOSE 3001
CMD ["npm", "start"]