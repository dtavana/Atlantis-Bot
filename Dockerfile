FROM alpine:latest
# Setup Work directory.
WORKDIR /usr/src/bot
COPY package.json bot.yml server.yml ./

# Let's install everything!
RUN apk add --update \
    && apk add --no-cache nodejs-current nodejs-npm \
    && apk add --no-cache --virtual .build git curl build-base g++ \
    && npm install \
    && apk del .build

# Copy project to our WORKDIR
COPY . .

# Let's run it!
CMD [ "npm", "run", "prod" ]