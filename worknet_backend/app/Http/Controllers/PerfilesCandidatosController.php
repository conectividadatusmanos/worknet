<?php
namespace App\Http\Controllers;
use App\Models\PerfilesCandidatos;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class PerfilesCandidatosController extends Model {
    public function index() {
        $perfiles = PerfilesCandidatos::all();
        return response()->json($perfiles, 200);
    }
}