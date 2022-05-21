# Gallery Web App
> A gallery web app built using the JsonPlaceholder api. 

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Contact](#contact)

## General Information
This is built as an assessment assignment for StudyDrive recruitment process. It is built using the 
Laravel/Vue tech stack.

## Technologies Used
- [Laravel 9](https://laravel.com/docs/9.x/releases)
- [Vue 3](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vuelidate](https://vuelidate.js.org/)

## Features
- Login/Register
- Laravel Fortify for authentication logic
- Form validation with Vuelidate library
- Vuex store as global state management system
- Protected routes
- Paginated routes
- Laravel api resources
- Php unit tests

## Screenshots

## Setup
Clone the project using:

### `git clone https://humayonzafar@bitbucket.org/humayonzafar/studydrive.git`

Run the following commands to set the project:

#### `cp .env.example .env`
#### `composer install`
#### `php artisan key:generate`
#### `npm install`
#### `php artisan migrate`

Next setup the env file DB_DATABASE, DB_USERNAME and DB_PASSWORD. Then run the following commands to run the project:

#### `npm run build`
#### `php artisan serve`


And voila, you are all set

## Contact
Created by [@humayonzafar](https://www.humayonzafar.com/contact) - feel free to contact me!

## License

[MIT](LICENSE)
