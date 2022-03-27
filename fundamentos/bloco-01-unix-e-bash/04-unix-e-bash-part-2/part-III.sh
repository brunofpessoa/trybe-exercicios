# Exercicio 1
echo "Listando todos os processos."
ps

# Exercicio 2
echo "Criando o processo sleep 30 &"
sleep 30 &

# Exercicio 3
echo "Buscando o PID do processo criado e encerando-o"
ps
kill [PID_do_processo]

# Exercicio 4
echo "Execurando o processo sleep 30 em foreground e passando-o para background"
sleep 30
# ctrl + Z para suspender o processo
# bg %[numero_do_processo]

# Exercicio 5
echo "Criando o processo sleep 300 em background"
sleep 300 &

# Exercicio 6
echo "Criando o processo sleep 200 e 100 em foreground, suspendendo-os"
sleep 200
# Ctrl + Z
sleep 100
# ctrl + Z

# Exercicio 7
echo "Verificando status dos processos e suspendendo o comando sleep 300"
jobs
fg %[numero_do_processo]
# Ctrl + Z

# Exercicio 8
echo "Retomando a execucao do processo sleep 100 em background"
bg %[numero_do_processo]

# Exercicio 9
echo "Finalizando todos os processos suspensos"
kill %{n1,n2,n3}

