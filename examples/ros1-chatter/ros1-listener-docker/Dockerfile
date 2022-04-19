FROM ros:melodic-ros-core-bionic

RUN apt-get update && apt-get install -y \
  build-essential \
  ros-melodic-ros-tutorials \
  && rm -rf /var/lib/apt/lists/*

RUN useradd -ms /bin/bash rosuser

USER rosuser
ENV HOME=/home/rosuser
WORKDIR /home/rosuser

COPY python_logging.conf /opt/ros/melodic/etc/ros/python_logging.conf
COPY entrypoint.sh /home/rosuser/entrypoint.sh

ENTRYPOINT [ "/bin/bash", "/home/rosuser/entrypoint.sh" ]
