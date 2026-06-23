<?php
namespace App\Http\Controllers;
use App\Models\PerfilCandidato  ;
use Illuminate\Http\Request;

class PerfilCandidatoController extends Controller
{
    public function index() {
        // Usamos el modelo correcto
        $PerfilCandidato = PerfilCandidato  ::all();
        return response()->json($PerfilCandidato, 200);
    }
}
