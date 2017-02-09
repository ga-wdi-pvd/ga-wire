# GAWire API

Directions:

```bash
$ git clone git@github.com:ga-wdi-pvd/ga-wire-api.git
$ cd ga-wire-api
$ bundle install
$ rails db:drop db:create db:migrate
```

Open a new tab in terminal or a new terminal window and run `rails s` to open the server. 

Your server is set to run on `localhost:4000`

To get the GitHub OmniAuth to work... the figaro gem is already installed.

run `$ bundle exec figaro install`

This will provide you with a file in the config folder `config/application.yml` which will be added to `.gitignore` so that you can add your github applications client_id and client_secret.

to add them:

```ruby
# in config/application.yml

GITHUB_KEY: 'YOUR CLIENT ID'
GITHUB_SECRET: 'YOUR CLIENT SECRET'
```

To generate a new react component:

`$ rails g react:component ComponentName --es6`

This will scaffold a blank component in ES6 found in the `app/assets/javascropts/components` folder.
No need to `import` or `export` any component. This is taken care of by the gem `react-rails`.

More information on the `react-rails` gem can be fonud [here](https://github.com/reactjs/react-rails).
