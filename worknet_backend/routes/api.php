<?php
use App\Http\Controllers\UsuariosController;
use Illuminate\Support\Facades\Route;

// Ruta para listar (Metodo GET)
Route::get('/usuarios', [UsuariosController::class, 'index']);

// Ruta para registrar desde tu formulario (Metodo POST) -> Esta es la que usa tu Axios
Route::post('/usuarios', [UsuariosController::class, 'store']);