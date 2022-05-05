# DIA 4 Unix & Shell Part 2

O objetivo dos exercícios desse dia foi aprimorar o uso de comandos no terminal, aprender comandos novos para facilitar alguns processos e der e remover permissões de arquivos e diretórios.

Os requisitos dos exercícios são:

1. Comandos de Input e Output

2. Dar e retirar permissões de arquivos

3. Criar processos em primeiro e em segundo plano

## Comandos utilizados no dia
```
  383  cat > skills2.txt
  384  cat skills2.txt
  385  ls
  386  cat >> skills2.txt
  387  cat skills2.txt
  388  cat >> skills2.txt
  389  cat skills2.txt
  390  sort skills2.txt
  391  wc -l skills2.txt
  392  cat skills2.txt | sort > top_skills.txt
  393  las
  394  la
  395  ls
  396  cat top_skills.txt
  397  cat skills2.txt | head -3 | sort > top_skills.txt
  398  cat top_skills.txt
  399  sort skills2.txt| head -3 | cat > top_skills.txt
  400  cat top_skills.txt
  401  cat > phrases2.txt
  402  clear
  403  grep br phrases2.txt | wc -l
  404  grep -iv br phrases2.txt | wc -l
  405  cat >> phrases2.txt
  406  cat phrases2.txt countries.txt > bounch_of_things.txt
  407  cat bounch_of_things.txt
  408  sort bounch_of_things.txt > bounch_of_things.txt
  409  cat bounch_of_things.txt
  410  ls
  411  cat bounch_of_things.txt
  412  cat phrases2.txt countries.txt > bounch_of_things.txt
  413  cat bounch_of_things.txt
  414  sort bounch_of_things.txt
  415  clear
  416  ls -l
  417  chmod a+ w bounch_of_things.txt
  418  chmod a+w bounch_of_things.txt
  419  ls -l
  420  chmod a-w bounch_of_things.txt
  421  ls -l
  422  chmod 644 bunch_of_things.txt
  423  chmod 644 bounch_of_things.txt
  424  ls -l
  425  clear
  426  sleep 30
  427  clear
  428  sleep 30 &
  429  jobs
  430  bg %1
  431  jobs
  432  ps -a
  433  sleep 30 &
  434  ps -a
  435  kil 10188
  436  kill 10188
  437  sleep 30
  438  bg %1
  439  man sort
  440  clear
  ```