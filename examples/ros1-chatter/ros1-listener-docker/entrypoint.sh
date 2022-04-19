#!/usr/bin/env bash

set -x

mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/
source /opt/ros/melodic/setup.bash
catkin_make
source ~/catkin_ws/devel/setup.bash

roscore &

sleep 1 && rostopic echo /chatter
