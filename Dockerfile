FROM node:slim

WORKDIR /tourguide-front

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --force
COPY next.config.js next.config.js
COPY components components
COPY helpers helpers
COPY pages pages
COPY public public

RUN npm run build

CMD ["npm","run", "start"] 