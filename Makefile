.PHONY: repo
repo: ## Open Github
	@open https://github.com/aaronbatey/resume

.PHONY: install
install: ## Install dependencies
	yarn

.PHONY: clean
clean: ## Nuke installed dependencies
	yarn run clean

.PHONY: test
test: ## Test
	yarn test

.PHONEY: build
build: ## build app
	yarn build

.PHONEY: start
start: ## Run app
	yarn dev

.PHONEY: lint
lint: ## runs linter
	yarn lint

.PHONEY: kill-node-proc
kill-node-proc:  ## kill all node process attached to port 3000
	@sudo sleep 0.001;
	@echo "Pids of port 3000 to be killed:"
	@sudo lsof -i tcp:3000
	@sudo lsof -i tcp:3000 | awk 'FNR > 1 {print $$2}' | xargs kill --verbose
