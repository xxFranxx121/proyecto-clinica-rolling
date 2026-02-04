#!/bin/bash

# Script para deploy automático a GitHub Pages
# Ejecutar con: npm run deploy

echo "🚀 Iniciando deploy a GitHub Pages..."

# 1. Build de producción
echo "📦 Construyendo bundle de producción..."
npm run build

# 2. Navegar a dist
cd dist

# 3. Inicializar git en dist
git init
git add -A
git commit -m 'deploy'

# 4. Push a gh-pages
echo "📤 Subiendo a branch gh-pages..."
git push -f git@github.com:xxFranxx121/proyecto-clinica-rolling.git main:gh-pages

cd -

echo "✅ Deploy completado! Visita: https://xxfranxx121.github.io/proyecto-clinica-rolling/"
