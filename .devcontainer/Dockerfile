FROM mcr.microsoft.com/devcontainers/typescript-node:0-16

COPY library-scripts/*.sh /tmp/library-scripts/
COPY library-scripts/bash_history.sh /etc/profile.d/
RUN cp -v /tmp/library-scripts/bash_history.sh /etc/profile.d/
USER node
RUN USER_RC_PATH=/home/node INSTALL_OH_MYS="true" /bin/bash /tmp/library-scripts/oh_mys.sh bashrc.osh-template https://github.com/ohmybash/oh-my-bash