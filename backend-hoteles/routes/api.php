<?php

use App\Http\Controllers\AcomodacionController;
use App\Http\Controllers\HabitacionController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\TipoHabitacionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::apiResource('hoteles', HotelController::class);
Route::get('/hoteles', [HotelController::class, 'index']);
Route::get('/tipos-habitacion', [TipoHabitacionController::class, 'index']);
Route::get('/acomodaciones', [AcomodacionController::class, 'index']);
Route::post('/hoteles/{hotelId}/habitaciones', [HabitacionController::class, 'store']);
Route::get('/hoteles/{hotelId}/habitaciones_listado', [HabitacionController::class, 'index']);
