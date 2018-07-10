#!/usr/bin/env bash

# Puxa atualização do repositório remoto.
git pull origin master

# Gera a página HTML estática.
php generate > index.html