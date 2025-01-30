#!/bin/bash

# Verify the installation and check the Python version
python --version

# Create a virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    python -m venv venv
fi

# Activate the virtual environment
if [[ "$OSTYPE" == "linux-gnu"* || "$OSTYPE" == "darwin"* ]]; then
    source venv/bin/activate
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    source venv/Scripts/activate
else
    echo "Unsupported OS type: $OSTYPE"
    exit 1
fi

# Install the required Python packages
pip install -r requirements.txt