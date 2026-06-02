<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentoController;
use App\Http\Controllers\UsuariosController;

Route::get('/documentos', [DocumentoController::class, 'index']);
Route::get('/usuarios', [UsuariosController::class, 'index']);