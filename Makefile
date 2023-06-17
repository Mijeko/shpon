webpack: webpack-clear-assets webpack-build

webpack-build:
	cd markup && npm run build

webpack-clear-assets:
	rm -rf markup/build

push:
	git add . && git commit -m "update" && git push

pull:
	git pull