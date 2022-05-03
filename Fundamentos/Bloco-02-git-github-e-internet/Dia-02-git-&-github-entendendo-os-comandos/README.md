# DIA 2 - Git & GitHub - Entendendo os Comandos

O objetivo dos exercícios desse dia foi conhecer e se familiarizar mais com o Git e o GitHub, aprender a criar uma branch, criar um poll request e apos fazer a merge para a main

Os requisitos dos exercícios são:

1. Criar uma nova branch

2. Editar um arquivo .txt

3. Fazer o push dessa nova informação na nova branch

4. Abrir um pull request 

5. Repetir tudo com uma nova branch

6. Fazer merge das duas novas branch na branch main


## Comandos utilizados no dia
```
  797  ls
  798  cd ..
  799  ls
  800  mkdir Teste-GitHub
  801  ls
  802  cd Teste-GitHub
  803  ls
  804  git clone https://github.com/thomasboospegler/trybe-exercicios
  805  ls
  806  cd..
  807  cd ..
  808  ls
  809  cd Trybe-exercicios
  810  ls
  811  cd Fundamentos
  812  ls
  813  cd Bloco-02-git-github-e-internet
  814  ls
  815  cd Dia-02-git-\&-github-entendendo-os-comandos
  816  ls
  817  git status
  818  git add ..
  819  git status
  820  git commit -m "Add Bloco2 Dia2"
  821  git push
  822  git push -u origin main
  823  git fetch
  824  git status
  825  git pull
  826  git config pull.rebase false
  827  ls
  828  git push -u origin main
  829  git pull
  830  git commit -m "merge"
  831  ls
  832  git status
  833  git fetch
  834  git status
  835  git push
  836  git status
  837  git branch trybe-skills-changes
  838  git checkout trybe-skills-changes
  839  code .
  840  code.
  841  code .
  842  ls
  843  code .
  844  cat trybe-skills.txt
  845  code .
  846  cat trybe-skills.txt
  847  git add trybe-skills.txt
  848  git status
  849  git commit -m "Adicionar skills bloco2.2"
  850  git push -u origin trybe-skills-changes
  851  git status
  852  git checkout main
  853  git branch
  854  ls
  855  cat trybe-skills.txt
  856  git branch trybe-skills-updates
  857  git checkout trybe-skills-updates
  858  code .
  859  cat trybe-skills.txt
  860  git add trybe-skills.txt
  861  git commit -m "Update skills bloco2.2"
  862  git push -u origin trybe-skills-updates
  863  git checkout main
  ```