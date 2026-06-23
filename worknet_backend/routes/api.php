<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentoAdjuntoController;
use App\Http\Controllers\OfertaEmpleoController;
use App\Http\Controllers\PerfilCandidatoController;
use App\Http\Controllers\PerfilConductorController;
use App\Http\Controllers\PerfilEmpresaController;
use App\Http\Controllers\TipoDocumentoController;
use App\Http\Controllers\UsuarioController;


// Ruta para listar (Metodo GET)
Route::get('/documento_adjunto', [DocumentoAdjuntoController::class, 'index']);
Route::get('/oferta_empleo', [OfertaEmpleoController::class, 'index']);
Route::get('/perfil_candidato', [PerfilCandidatoController::class, 'index']);
Route::get('/perfil_empresa', [PerfilEmpresaController::class, 'index']);
Route::get('/perfil_conductor', [PerfilConductorController::class, 'index']);
Route::get('/tipo_documento', [TipoDocumentoController::class, 'index']);
Route::get('/usuario', [UsuarioController::class, 'index']);
Route::post('/usuario', [UsuarioController::class, 'store']);