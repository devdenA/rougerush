<?php

declare(strict_types=1);

require_once __DIR__ . '/../app/Router.php';

$router = new Router();
$router->dispatch($_SERVER['REQUEST_URI']);
