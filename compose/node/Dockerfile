FROM node:18.12

ARG USERNAME=node

RUN apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

RUN npm install -g \
    firebase-tools \
    create-next-app 

USER node
WORKDIR /home/node

EXPOSE 3000
EXPOSE 5000
EXPOSE 9005

ENV HOST 0.0.0.0

CMD ["/bin/bash"]