FROM node:10.16
RUN mkdir /project_dir
ADD . /project_dir
WORKDIR /project_dir
RUN npm install
EXPOSE 3000

CMD ["npm", "start"]