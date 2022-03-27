time=1

# Exercicio 1
echo "Navegando ate o diretorio unix_tests."
cd unix_tests
sleep $time

# Exercicio 2
echo "Verificando permissoes dos arquivos."
ls -l
sleep $time

# Exercicio 3
echo "Mudando permissao do arquivo bunch_of_things.txt para leitura e escrita para todos os grupos."
chmod a+rw bunch_of_things.txt
sleep $time

# Exercicio 4
echo "Removendo permissao de escrita do arquivo bunch_of_things.txt."
chmod a-w bunch_of_things.txt
sleep $time

# Exercicio 5
echo "Retornando as permissoes iniciais do arquivo."
chmod 644 bunch_of_things.txt
