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
![Login_Page](https://res.cloudinary.com/humayoncloud/image/upload/v1653499924/sutdydrive/gallery_login_thkfrm.png)

![Register Page](https://res.cloudinary.com/humayoncloud/image/upload/v1653499924/sutdydrive/gallery_register_htdam9.png)

![Home Authenticated](https://res.cloudinary.com/humayoncloud/image/upload/v1653499925/sutdydrive/gallery_authenticated_o0nlzn.png)

![Home Unauthenticated_Weekend](https://res.cloudinary.com/humayoncloud/image/upload/v1653499944/sutdydrive/gallery_weekend_o8crzu.png)

![Home Unauthenticated_Non_Weekend](https://res.cloudinary.com/humayoncloud/image/upload/v1653499941/sutdydrive/gallery_home_page_non_weekend_o33kpz.png)

#### Loom Video Links:
https://www.loom.com/share/81a519bee7b647478936dcd9de1bcd77
https://www.loom.com/share/5aabbcbe4a0a4456a28387c1761faa4f

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

#### `php artisan serve`

Voila, you are all set.

To create dummy data run:

#### `php artisan db:seed`

To run test:

#### `vendor/bin/phpunit`
#### `npm run test`

## Contact
Created by [@humayonzafar](https://www.humayonzafar.com/contact) - feel free to contact me!

## License

[MIT](LICENSE)
