<template>
    <div class="row justify-content-md-center">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="col-2 px-4">
                <a class="navbar-brand" href="#">
                    <img src="/bootstrap-logo.svg" alt="Bootstrap 5 Logo" width="30" height="24">
                    Bootstrap
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" 
                  aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="col-12 col-auto collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre la Empresa</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Inmuebles a Alquilar o Vender</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>