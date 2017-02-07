# GAWire API

UI REPO LINK - https://github.com/ga-wdi-pvd/ga-wire

Directions:

```bash
$ git clone git@github.com:ga-wdi-pvd/ga-wire-api.git
$ cd ga-wire-api
$ bundle install
$ rails db:drop db:create db:migrate
```

Open a new tab in terminal or a new terminal window and run `rails s` to open the server. 

To get the GitHub OmniAuth to work... the figaro gem is already installed.

run `bundle exec figaro install`

This will provide you with a file in the config folder `config/application.yml` which will be added to `.gitignore` so that you can add your github applications client_id and client_secret.

to add them:

```ruby
# in config/application.yml

GITHUB_KEY: 'YOUR CLIENT ID'
GITHUB_SECRET: 'YOUR CLIENT SECRET'
```
