#!/bin/bash

# Function to check if a port is in use
check_port() {
    lsof -i :$1 >/dev/null 2>&1
    return $?
}

# Function to kill process on a port
kill_port() {
    echo "Killing process on port $1..."
    lsof -ti:$1 | xargs kill -9 2>/dev/null
}

# Check and kill processes on ports 4000 and 4001
for port in 4000 4001; do
    if check_port $port; then
        echo "Port $port is in use. Attempting to free it..."
        kill_port $port
        sleep 2
        if check_port $port; then
            echo "Failed to free port $port. Please free it manually and try again."
            exit 1
        fi
    fi
done

# Start the public site
echo "Starting public site on http://localhost:4000..."
npm run dev:public &

# Wait a moment to ensure the first server starts
sleep 2

# Start the admin site
echo "Starting admin site on http://localhost:4001..."
npm run dev:admin &

# Wait for both processes
wait 