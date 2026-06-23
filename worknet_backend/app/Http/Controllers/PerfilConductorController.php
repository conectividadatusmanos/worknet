<?php
namespace App\Http\Controllers;
use App\Models\PerfilConductor;
use Illuminate\Http\Request;

class PerfilConductorController extends Controller
{
    public function index() {
        // Usamos el modelo correcto
        $PerfilConductor = PerfilConductor::all();
        return response()->json($PerfilConductor, 200);
    }
}
