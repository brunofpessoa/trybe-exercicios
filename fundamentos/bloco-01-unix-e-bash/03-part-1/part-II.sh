time=1

# Exercicio 1
echo "Abrindo o diretorio unix_tests e baixando o arquivo countries.txt."
cd unix_tests

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep $time

# Exercicio 2
echo "Exibindo o conteudo de countries.txt."
cat countries.txt
sleep $time

# Exercicio 3
echo "Exibindo countries.txt pagina por pagina."
less countries.txt
sleep $time

# Exercicio 4
echo "Buscando por zambia em countries.txt"
less -i countries.txt
# use /zambia para pesquisar por zambia dentro do arquivo
sleep $time

# Exercicio 5
echo "Buscando por "Brazil" em countries.txt."
grep "Brazil" countries.txt || echo "Nao contem esta palavra"
sleep $time

# Exercicio 6
echo "Buscando por brazil em lower case."
grep "brazil" countries.txt || echo "Nao contem esta palavra"
sleep $time

# Exercicio 6.1
# Criando o arquivo phrases.txt com algumas frases à minha escolha.
echo "\nVocê aspira a grandes coisas? Comece com os mais pequenos.\nNão adianta ficar perto da luz com os olhos fechados.\nO hábito, se não resistido, logo se torna uma necessidade.\nA punição de toda mente desordenada é sua própria desordem." | cat > phrases.txt
sleep $time

# Exercicio 7
echo "Buscando pelas frases que não contem "fox"."
grep -v "fox" phrases.txt
sleep $time

# Exercicio 8
echo "Contando o numero de palavras em phrases.txt."
wc -w phrases.txt
sleep $time

# Exercicio 9
echo "Numero de linhas em phrases.txt."
wc -l phrases.txt
sleep $time

# Exercicio 10
echo "Criando os arquivos empty.tbt e empty.pdf."
touch empty.tbt empty.pdf
sleep $time

# Exercicio 11
echo "Listando os arquivos em unix_tests."
ls -a
sleep $time

# Exercicio 12
echo "listando todos os arquivos que terminam em txt."
ls -a *txt
sleep $time

# Exercicio 13
echo "Listando todos os arquivos que terminam em tbt e txt."
ls -a *txt *tbt
sleep $time

# Exercicio 14
echo "Acessando o manual do comando ls."
man ls
sleep $time
