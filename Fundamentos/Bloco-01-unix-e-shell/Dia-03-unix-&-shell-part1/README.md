# DIA 3 Unix & Shell Part 1

O objetivo dos exercícios desse dia foi por em prática algums comandos estudados no terminal.

Os requisitos dos exercícios são:

1. Criar/eliminar arquivos

2. Editar arquivos

3. Criar/eliminar diretórios

4. Pesquisa dentro de arquivos 

595  mkdir unix_tests
596  ls
597  cd unix_tests
598  cat trybe.txt
599  touch trybe.txt
600  ls
601  touch trybe_backup.txt
602  cat trybe.txt trybe_original.txt
603  mv trybe.txt trybe_original.txt
604  ls
605  mkdir backup
606  ls
607  mv trybe_backup.txt backup
608  ls
609  mkdir backup2
610  ls
611  cd backup
612  ls
613  mv trybe_backup.txt ..
614  ls
615  cd ..
616  ls
617  mv trybe_backup.txt backup2
618  ls
619  rmdir backup
620  mv backup2 backup
621  ls
622  pwd
623  rmdir -f backup
624  rm -rf backup
625  ls
642  \ncurl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
643  cat countries.txt
644  grep -i 'Zambia' countries.txt
645  less countries.txt
646  less grep countries.txt
647  cat > phrases.txt
648  grep -iv 'fox' phrases.txt
649  wc -w phrases.txt
650  wc -l phrases.txt
651  touch empty.tbt
652  touch empty.pdf
653  ls
654  ls *.txt
655  ls *.txt *.tbt
656  man ls


