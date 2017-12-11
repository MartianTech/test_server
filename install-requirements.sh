

main() {
	if [[ -z "$(command -v nodemon)" ]]; then
		echo "Installing nodemon"
		sudo npm install nodemon -g
	else
		echo "nodemon already installed"
	fi

	# setup required node modules
    if [[ -z "$(command -v grunt)" ]]; then
        echo "Installing grunt-cli..."
        sudo npm install -g grunt-cli
    else
        echo "grunt-cli already installed"
    fi
    echo "Installing node dependencies..."
    npm install
}

main