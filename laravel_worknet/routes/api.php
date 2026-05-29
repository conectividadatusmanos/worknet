<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\DocumentoController;

// Ruta para registrar un usuario nuevo
Route::post('/usuarios', [UsuarioController::class, 'store']);

// Ruta para subirle un documento a un usuario
Route::post('/usuarios/{id}/documentos', [DocumentoController::class, 'store']);