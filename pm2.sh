#!/bin/bash
# Purpose: To install pm2 on the server
# Author: Guman Singh | Cloudways
# Last Edited: 12/09/2023:6:58
# Usage: curl -s https://raw.githubusercontent.com/ThakurGumansingh/scripts/main/pm2.sh | bash

# Get the current user
CURRENT_USER=$(whoami)

# Display a warning if the user does not start with "master_"
if [[ $CURRENT_USER != "master_"* ]]; then
  echo -e "\033[1;33mWarning: You are currently logged in as $CURRENT_USER. It is recommended to run this script as the 'master' user for proper configuration.\033[0m"
fi

# Define the installation directory
INSTALL_DIR="/home/master/bin/npm/lib/node_modules"

# Check if pm2 is already installed
if ! pm2 -v &>/dev/null; then
  # Add NODE_PATH configuration
  echo "export NODE_PATH='\$NODE_PATH:$INSTALL_DIR'" >> ~/.bash_aliases

  # Configure npm prefix
  npm config set prefix "$INSTALL_DIR"

  # Install pm2 globally
  npm install pm2@latest -g

  # Add pm2 alias to .bash_aliases
  echo "alias pm2='$INSTALL_DIR/bin/pm2'" >> ~/.bash_aliases

  # Run pm2 startup
  "$INSTALL_DIR/bin/pm2" startup

  # Start npm using pm2
  "$INSTALL_DIR/bin/pm2" start npm -- start

  # Print success message in green
  echo -e "\033[0;32mPM2 has been installed and configured successfully.\033[0m"
else
  echo -e "\033[0;32mPM2 is already installed.\033[0m"
fi
bash
exit
