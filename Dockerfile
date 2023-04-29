FROM node
WORKDIR /srv
COPY public ./public
COPY .next/standalone ./
COPY .next/static ./.next/static
CMD [ "node","server.js" ]
