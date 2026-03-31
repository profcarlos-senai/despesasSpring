@echo off
setlocal

echo --- Instalando Node.js 22 via winget ---
winget install --id OpenJS.NodeJS.22 --source winget
if %errorlevel% neq 0 (
    echo Erro: Falha na instalacao do Node.js (Codigo: %errorlevel%)
    exit /b 1
)

echo --- Etapa 2: Instalando Angular 21 ---
npm install -g @angular/cli@21
if %errorlevel% neq 0 (
    echo Erro: Falha ao instalar @angular/cli@21.
    exit /b 1
)

echo Sucesso: Angular 21 instalado.
echo.

echo --- Etapa 3: Instalando dependencias do projeto (npm install) ---
npm install
if %errorlevel% neq 0 (
    echo Erro: Falha no npm install local.
    exit /b 1
)

echo --- Etapa 4: Corrigindo vulnerabilidades (npm audit fix) ---
npm audit fix
if %errorlevel% neq 0 (
    echo Aviso: O npm audit encontrou problemas que nao puderam ser corrigidos automaticamente.
) else (
    echo Sucesso: Auditoria e correcoes concluidas!
)

echo.
echo Script finalizado com sucesso!

endlocal
pause
