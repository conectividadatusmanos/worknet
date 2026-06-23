<?php
namespace App\Http\Controllers;
use App\Models\PerfilEmpresa;
use Illuminate\Http\Request;

class PerfilEmpresaController extends Controller
{
    public function index() {
        // Usamos el modelo correcto
        $PerfilEmpresa = PerfilEmpresa::all();
        return response()->json($PerfilEmpresa, 200);
    }
}
