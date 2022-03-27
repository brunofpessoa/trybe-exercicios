time=1

# Exercicio 1
echo "Acessando unix_tests."
cd unix_tests
sleep $time

# Exercicio 2
echo "Criando o arquivo skills2.txt com os valores 'Internet, Unix, Bash'."
echo "Internet\nUnix\nBash" > skills2.txt
sleep $time

# Exercicio 3
echo "Adicionando itens e imprimindo de forma ordenanda."
echo "Javascript\nHtml\nCss\nTypescript\nPython" >> skills2.txt
sort skills2.txt
sleep $time

# Exercicio 4
echo "Contando as linhas de skills2.txt."
wc -l skills2.txt
sleep $time

# Exercicio 5
echo "Criando o arquivo top_skills.txt com as 3 primeiras skills de skills2.txt em ordem alfabética."
sort skills2.txt | head -3 | >> top_skills.txt
sleep $time

# Exercicio 6
echo "Criando o arquivo phrases2.txt e atribuindo novas frases"
echo "A humildade é o primeiro degrau para a sabedoria.\nNão se opor ao erro é aprová-lo, não defender a verdade é negá-la.\nToma cuidado com o homem de um só livro." >> phrases2.txt
sleep $time

# Exercicio 7
echo "Contando o numero de linhas que contem "br" em phrases2.txt"
grep "br" phrases2.txt | wc -l
sleep $time

# Exercicio 8
echo "Contando o numero de linhas que nao contem "br""
grep -v "br" phrases2.txt | wc -l
sleep $time

# Exercicio 9
echo "Adicionando o nome de dois paises ao final de phrases2.txt"
echo "Brasil\nItalia" >> phrases2.txt
sleep $time

# Exercicio 10
echo "Criando o arquivo bunch_of_things.txt que concatena phrases2.txt e countries.txt"
cat phrases2.txt countries.txt > bunch_of_things.txt
sleep $time

# Exercicio 11
echo "Ordenando bunch_of_things"
sort -o bunch_of_things.txt bunch_of_things.txt
sleep $time
