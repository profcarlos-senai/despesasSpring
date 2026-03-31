  # 1. Instalar NodeJS 22
  Write-Host "--- Instalando Node.js 22 via winget ---" -ForegroundColor Cyan
  winget install --id OpenJS.NodeJS.22 --source winget
  if ($LastExitCode -eq 0) {
      # 2. Instalar Angular CLI globalmente
      Write-Host "--- Etapa 2: Instalando Angular 21  ---" -ForegroundColor Cyan
      npm install -g @angular/cli@21
      if ($LastExitCode -eq 0) {
          Write-Host "Sucesso: Angular 21 instalado.`n" -ForegroundColor Green
      } else {
          Write-Host "Erro: Falha ao instalar @angular/cli@21." -ForegroundColor Red; exit 1
      }

      # 3. Instala as dependências do projeto
      Write-Host "--- Etapa 3: Instalando dependências do projeto (npm install) ---" -ForegroundColor Cyan
      npm install
      if ($LastExitCode -eq 0) {
          # 4. Executar npm audit fix
          Write-Host "--- Etapa 5: Corrigindo vulnerabilidades (npm audit fix) ---" -ForegroundColor Cyan
          npm audit fix
          if ($LastExitCode -eq 0) {
              Write-Host "Sucesso: Auditoria e correções concluídas!" -ForegroundColor Green
          } else {
              Write-Host "Aviso: O npm audit encontrou problemas que não puderam ser corrigidos automaticamente." -ForegroundColor Yellow
          }
      } else {
          Write-Host "Erro: Falha no npm install local." -ForegroundColor Red; exit 1
      }

  } else {
      Write-Host "Erro: Falha na instalação do Node.js (Código: $LastExitCode)" -ForegroundColor Red
      exit 1
  }







  Write-Host "`nScript finalizado com sucesso!" -ForegroundColor Magenta -BackgroundColor Black

  Use o código com cuidad
