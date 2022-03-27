time=1

# Exercicio 1
echo "Criando o diretorio unix_tests."
mkdir unix_tests
cd unix_tests
sleep $time

# Exercicio 2
echo "Criando o arquivo trybe.txt."
touch trybe.txt
sleep $time

# Exercicio 3
echo "Criando um backup."
cp trybe.txt trybe_backup.txt
sleep $time

# Exercicio 4
echo "Renomeando o arquivo trybe.txt."
mv trybe.txt trybe-v2.txt
sleep $time

# Exercicio 5
echo "Criando um novo diretorio chamado backup."
mkdir backup
sleep $time

# Exercicio 6
echo "Movendo trybe_backup.txt para o diretorio backup."
mv trybe_backup.txt backup
sleep $time

# Exercicio 7
echo "Criando um novo diretório chamado backup2."
mkdir backup2
sleep $time

# Exercicio 8
echo "Movendo trybe_backup.txt de backup para backup2."
mv ./backup/trybe_backup.txt backup2
sleep $time

# Exercicio 9
echo "Removendo o diretorio backup."
rmdir backup
sleep $time

# Exercicio 10
echo "Renomeando a pasta backup2 para backup."
mv backup2 backup
sleep $time

# Exercicio 11
echo "Verificando o caminho do diretorio atual e listando os arquivos."
pwd
ls
sleep $time

# Exercicio 12
echo "Removendo o diretório backup e seu conteúdo."
rm -r backup
sleep $time
