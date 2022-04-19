#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd $DIR

HOSTNAME=$(hostname)

export ROS_MASTER_URI=http://${HOSTNAME}:11311
export ROS_HOSTNAME=${HOSTNAME}

./build-robot.sh || exit 1

mkdir -p $HOME/.ros

docker run \
  -it \
  --rm \
  --hostname ${HOSTNAME} \
  -v $HOME/.ros:/home/rosuser/.ros \
  --sysctl net.ipv4.ip_local_port_range="50000 50019" \
  -p 50000-50019:50000-50019 \
  -p 11311:11311 \
  --name ros1-listener \
  ros1-listener
