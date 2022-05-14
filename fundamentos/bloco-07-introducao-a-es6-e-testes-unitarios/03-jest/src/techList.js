const techList = (technologies, name) => {
  if (technologies.length === 0) return 'Vazio!';

  const sortedTechs = technologies.sort();
  const techList = [];

  for (let index = 0; index < sortedTechs.length; index += 1) {
    techList.push({
      tech: sortedTechs[index],
      name,
    });
  }

  return techList;
};

module.exports = techList;