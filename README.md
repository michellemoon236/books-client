# Book Tally

This React-Redux based website is an application that allows for a user to keep track of a list of books categorized by genre that they would like to read. The application has two parts: 1) Rails API backend to store the book list data and 2) React-Redux frontend to display the book list website to the user.

## Installation

Rails API backend
Clone the git repository for the Rails API backend and start the API on server localhost:3001 by typing the following commands in the first terminal:
  $ git clone git@github.com:michellemoon236/books-api.git
  $ bundle install
  $ rails db:migrate
  $ rails db:seed
  $ rails s -p 3001

React-Redux frontend
Clone the git repository for the React-Redux frontend and start the frontend website on server localhost:3000 by typing the following commands in the second terminal:

  $ git clone git@github.com:michellemoon236/books-client.git
  $ npm install
  $ npm start
    
## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/michellemoon236/books-client.git. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

This project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
