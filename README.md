<h3>
Step 1: Install Composer

composer create-project laravel/laravel my-app

<br>
Step 2: Create a new Laravel project

composer create-project laravel/laravel my-app
<br>
Step 3: Configure your application key

php artisan key:generate
<br>
Step 4: Start the development server

php artisan serve
</h3>


Part 2: Laravel Folder Structure

app

The app folder contains the core files of your Laravel application. This includes the models, controllers, views, and other classes that make up your application.

bootstrap

The bootstrap folder contains the files that are used to bootstrap your Laravel application. This includes the app.php file, which is the main entry point for your application.

config

The config folder contains the configuration files for your Laravel application. This includes files for database connection settings, mail settings, and other application-specific settings.

database

The database folder contains the database files for your Laravel application. This includes the database schema, migration files, and seed files.

public

The public folder is the web root of your Laravel application. This is the folder that is served by your web server.

resources

The resources folder contains the static resources for your Laravel application. This includes images, stylesheets, and JavaScript files.

routes

The routes folder contains the routes for your Laravel application. This is where you define the URLs for your application and the actions that should be taken when those URLs are visited.

storage

The storage folder contains the files that are generated by your Laravel application. This includes files such as log files, cache files, and uploaded files.

tests

The tests folder contains the unit and integration tests for your Laravel application. This is where you write tests to ensure that your application is working as expected.

vendor

The vendor folder contains the third-party libraries that are used by your Laravel application. This includes libraries such as Laravel itself, as well as any other libraries that you have installed.