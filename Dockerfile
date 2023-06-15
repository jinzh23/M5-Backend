# need an OS to run my api
# tell docker where to get the OS from
# this image has alpine OS with node in it
FROM node:14

WORKDIR /usr/src/app
# WORKDIR /M5-Backend

COPY package*.json ./
# COPY package.json package-lock.json ./

# install node dependencies
RUN npm install 

# copy my app files to this  
# source destination
# dot means cd 
COPY . .

# build my api
# RUN npm run build

# export a port
EXPOSE 4000

# run my api
# whatever is given in CMD is used to run whenever the container is up
CMD ["npm", "start"]