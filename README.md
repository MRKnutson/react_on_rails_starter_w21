# Getting Started

TLDR: need to clone with a unique project name and rename database

1. git clone git@github.com:MRKnutson/react_on_rails_starter_w21.git <new_project_name>
2. cd <new_project_name>
3. bundle
4. rename database to something unique may use new_project_name in `database.yml`
   - search for `react_on_rails_starter_w21` and replace with `<new_project_name>`
5. rails db:create db:migrate db:seed
6. cd client
7. yarn

## to test

1. rails s -p 3001
2. cd client && yarn start

## HANDLE GITHUB need new repo

  - `git remote rm origin`
  - create a new github repo
  - `git remote add origin <sshlinktorepo>`