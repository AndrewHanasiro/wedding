.PHONY: deploy
deploy:
	rm -rf ./build ./.firebase
	firebase deploy