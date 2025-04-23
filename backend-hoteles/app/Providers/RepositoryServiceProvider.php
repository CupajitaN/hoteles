<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Interfaces\HotelRepositoryInterface;
use App\Repositories\HotelRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(HotelRepositoryInterface::class, HotelRepository::class);
    }

    public function boot()
    {
        //
    }
}
