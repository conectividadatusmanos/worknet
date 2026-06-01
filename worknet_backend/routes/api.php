<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentoController;

Route::get('/documentos', [DocumentoController::class, 'index']);