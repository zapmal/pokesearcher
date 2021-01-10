# About the API

Uses [passport](https://laravel.com/docs/7.x/passport) for token-based authentication, also it doesn't use the prefix `api`, it's just `http://localhost:8000/<route>` for requests. 

## Requirements

- PHP >= 7.4.11
- MySQL >= 10

## Configuration

- `composer install`
- `php artisan migrate`
- `php artisan db:seed`
- `cp .env.example .env`
- Fill all the `DB` related fields (username, password, database) and the `MAIL` ones (username, password, from adress, from name).
- `php artisan serve`