module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      'players',
      [
        {
          playerName: 'Letícia Busatto',
          position: 'GOLEIRA',
          clubId: 1,
          goals: 0,
        },
        {
          playerName: 'Camila Silva',
          position: 'ZAGUEIRA',
          clubId: 1,
          goals: 0,
        },
        {
          playerName: 'Simeia',
          position: 'ZAGUEIRA',
          clubId: 1,
          goals: 0,
        },
        {
          playerName: 'Tuani',
          position: 'ZAGUEIRA',
          clubId: 1,
          goals: 0,
        },
        {
          playerName: 'Geovana da Silva',
          position: 'LATERAL',
          clubId: 1,
          goals: 0,
        },
        {
          playerName: 'Fran',
          position: 'LATERAL',
          clubId: 1,
          goals: 0,
        },
        {
          playerName: 'Geovana Alves',
          position: 'MEIA',
          clubId: 1,
          goals: 1,
        },
        {
          playerName: 'Vilma',
          position: 'MEIA',
          clubId: 1,
          goals: 0,
        },
        {
          playerName: 'Gaby',
          position: 'MEIA',
          clubId: 1,
          goals: 0,
        },
        {
          playerName: 'Larissa',
          position: 'ATACANTE',
          clubId: 1,
          goals: 0,
        },
        {
          playerName: 'Raiza',
          position: 'ATACANTE',
          clubId: 1,
          goals: 3,
        },
        {
          playerName: 'Anna Bia',
          position: 'GOLEIRA',
          clubId: 2,
          goals: 0,
        },
        {
          playerName: 'Nine',
          position: 'LATERAL',
          clubId: 2,
          goals: 0,
        },
        {
          playerName: 'Tayane',
          position: 'LATERAL',
          clubId: 2,
          goals: 0,
        },
        {
          playerName: 'Aila',
          position: 'ZAGUEIRA',
          clubId: 2,
          goals: 1,
        },
        {
          playerName: 'Nainara',
          position: 'ZAGUEIRA',
          clubId: 2,
          goals: 0,
        },
        {
          playerName: 'Eddie',
          position: 'MEIA',
          clubId: 2,
          goals: 0,
        },
        {
          playerName: 'Esquerdinha',
          position: 'MEIA',
          clubId: 2,
          goals: 0,
        },
        {
          playerName: 'Milene Bispo',
          position: 'MEIA',
          clubId: 2,
          goals: 0,
        },
        {
          playerName: 'Vi',
          position: 'MEIA',
          clubId: 2,
          goals: 0,
        },
        {
          playerName: 'Ellen Santana',
          position: 'ATACANTE',
          clubId: 2,
          goals: 0,
        },
        {
          playerName: 'Verena',
          position: 'ATACANTE',
          clubId: 2,
          goals: 2,
        },
        {
          playerName: 'Lívia Leal',
          position: 'GOLEIRA',
          clubId: 3,
          goals: 0,
        },
        {
          playerName: 'Carol Carioca',
          position: 'DEFENSOR',
          clubId: 3,
          goals: 0,
        },
        {
          playerName: 'Mylena Carioca',
          position: 'DEFENSOR',
          clubId: 3,
          goals: 0,
        },
        {
          playerName: 'Vivian',
          position: 'MEIA',
          clubId: 3,
          goals: 0,
        },
        {
          playerName: 'Maca López',
          position: 'MEIA',
          clubId: 3,
          goals: 0,
        },
        {
          playerName: 'Laura Spenazzatto',
          position: 'MEIA',
          clubId: 3,
          goals: 0,
        },
        {
          playerName: 'Pepê',
          position: 'MEIA',
          clubId: 3,
          goals: 0,
        },
        {
          playerName: 'Cris',
          position: 'ATACANTE',
          clubId: 3,
          goals: 0,
        },
        {
          playerName: 'Karol LIns',
          position: 'ATACANTE',
          clubId: 3,
          goals: 0,
        },
        {
          playerName: 'Emily',
          position: 'ATACANTE',
          clubId: 3,
          goals: 1,
        },
        {
          playerName: 'Kamila Sotero',
          position: 'ATACANTE',
          clubId: 3,
          goals: 2,
        },
        {
          playerName: 'Isa Cruz',
          position: 'GOLEIRA',
          clubId: 4,
          goals: 0,
        },
        {
          playerName: 'Tarciane',
          position: 'ZAGUEIRA',
          clubId: 4,
          goals: 1,
        },
        {
          playerName: 'Campiolo',
          position: 'ZAGUEIRA',
          clubId: 4,
          goals: 0,
        },
        {
          playerName: 'Katiuscia',
          position: 'LATERAL',
          clubId: 4,
          goals: 0,
        },
        {
          playerName: 'Tamires',
          position: 'LATERAL',
          clubId: 4,
          goals: 0,
        },
        {
          playerName: 'Diany',
          position: 'MEIA',
          clubId: 4,
          goals: 1,
        },
        {
          playerName: 'Gabi Zanotti',
          position: 'MEIA',
          clubId: 4,
          goals: 1,
        },
        {
          playerName: 'Ingryd',
          position: 'MEIA',
          clubId: 4,
          goals: 0,
        },
        {
          playerName: 'Gabi Portilho',
          position: 'ATACANTE',
          clubId: 4,
          goals: 3,
        },
        {
          playerName: 'Miriã',
          position: 'ATACANTE',
          clubId: 4,
          goals: 1,
        },
        {
          playerName: 'Cacau',
          position: 'ATACANTE',
          clubId: 4,
          goals: 5,
        },
        {
          playerName: 'Taty SIlva',
          position: 'GOLEIRA',
          clubId: 5,
          goals: 0,
        },
        {
          playerName: 'Thalita',
          position: 'DEFENSOR',
          clubId: 5,
          goals: 0,
        },
        {
          playerName: 'Mariana Pires',
          position: 'DEFENSOR',
          clubId: 5,
          goals: 0,
        },
        {
          playerName: 'Eskerdinha',
          position: 'DEFENSOR',
          clubId: 5,
          goals: 0,
        },
        {
          playerName: 'Mayara Vaz',
          position: 'MEIA',
          clubId: 5,
          goals: 0,
        },
        {
          playerName: 'Duda',
          position: 'MEIA',
          clubId: 5,
          goals: 0,
        },
        {
          playerName: 'Lucero Robayo',
          position: 'MEIA',
          clubId: 5,
          goals: 1,
        },
        {
          playerName: 'Camila Ambrózio',
          position: 'MEIA',
          clubId: 5,
          goals: 1,
        },
        {
          playerName: 'Carol Shimo',
          position: 'MEIA',
          clubId: 5,
          goals: 0,
        },
        {
          playerName: 'Vanessa',
          position: 'ATACANTE',
          clubId: 5,
          goals: 3,
        },
        {
          playerName: 'Pâmela',
          position: 'ATACANTE',
          clubId: 5,
          goals: 3,
        },
        {
          playerName: 'Leilane',
          position: 'GOLEIRA',
          clubId: 6,
          goals: 0,
        },
        {
          playerName: 'Raquel Maisa',
          position: 'DEFENSOR',
          clubId: 6,
          goals: 1,
        },
        {
          playerName: 'Nicoly',
          position: 'DEFENSOR',
          clubId: 6,
          goals: 0,
        },
        {
          playerName: 'Ana Alice',
          position: 'DEFENSOR',
          clubId: 6,
          goals: 0,
        },
        {
          playerName: 'Catarina',
          position: 'MEIA',
          clubId: 6,
          goals: 1,
        },
        {
          playerName: 'Tamires',
          position: 'MEIA',
          clubId: 6,
          goals: 0,
        },
        {
          playerName: 'Aninha Hansen',
          position: 'MEIA',
          clubId: 6,
          goals: 0,
        },
        {
          playerName: 'Maísa',
          position: 'MEIA',
          clubId: 6,
          goals: 0,
        },
        {
          playerName: 'Laura Pigatin',
          position: 'ATACANTE',
          clubId: 6,
          goals: 0,
        },
        {
          playerName: 'Aline Milene',
          position: 'ATACANTE',
          clubId: 6,
          goals: 3,
        },
        {
          playerName: 'Sâmila Pryscila',
          position: 'ATACANTE',
          clubId: 6,
          goals: 2,
        },
        {
          playerName: 'Gabi Croco',
          position: 'GOLEIRA',
          clubId: 7,
          goals: 0,
        },
        {
          playerName: 'Cida',
          position: 'DEFENSOR',
          clubId: 7,
          goals: 0,
        },
        {
          playerName: 'Renata DIniz',
          position: 'DEFENSOR',
          clubId: 7,
          goals: 1,
        },
        {
          playerName: 'Débora Sorriso',
          position: 'LATERAL',
          clubId: 7,
          goals: 0,
        },
        {
          playerName: 'Raquel',
          position: 'LATERAL',
          clubId: 7,
          goals: 0,
        },
        {
          playerName: 'Bruna Rosa',
          position: 'MEIA',
          clubId: 7,
          goals: 0,
        },
        {
          playerName: 'Dedê',
          position: 'MEIA',
          clubId: 7,
          goals: 0,
        },
        {
          playerName: 'Jayanne',
          position: 'MEIA',
          clubId: 7,
          goals: 0,
        },
        {
          playerName: 'Andressa Lodi',
          position: 'ATACANTE',
          clubId: 7,
          goals: 0,
        },
        {
          playerName: 'Flávia',
          position: 'ATACANTE',
          clubId: 7,
          goals: 1,
        },
        {
          playerName: 'Rafa Barros',
          position: 'ATACANTE',
          clubId: 7,
          goals: 0,
        },
        {
          playerName: 'Lorena',
          position: 'GOLEIRA',
          clubId: 8,
          goals: 0,
        },
        {
          playerName: 'Sinara',
          position: 'LATERAL',
          clubId: 8,
          goals: 0,
        },
        {
          playerName: 'Vitória Kaíssa',
          position: 'LATERAL',
          clubId: 8,
          goals: 1,
        },
        {
          playerName: 'Andréia Rosa',
          position: 'DEFENSOR',
          clubId: 8,
          goals: 0,
        },
        {
          playerName: 'Lorena Gonzalez',
          position: 'DEFENSOR',
          clubId: 8,
          goals: 0,
        },
        {
          playerName: 'Kika Brandinho',
          position: 'MEIA',
          clubId: 8,
          goals: 1,
        },
        {
          playerName: 'Maglia',
          position: 'MEIA',
          clubId: 8,
          goals: 0,
        },
        {
          playerName: 'Mariza',
          position: 'MEIA',
          clubId: 8,
          goals: 1,
        },
        {
          playerName: 'Pri Back',
          position: 'MEIA',
          clubId: 8,
          goals: 0,
        },
        {
          playerName: 'Nathane Fabem',
          position: 'ATACANTE',
          clubId: 8,
          goals: 4,
        },
        {
          playerName: 'Eudimilla',
          position: 'ATACANTE',
          clubId: 8,
          goals: 2,
        },
        {
          playerName: 'Vivi',
          position: 'GOLEIRA',
          clubId: 9,
          goals: 0,
        },
        {
          playerName: 'Leidi',
          position: 'DEFENSOR',
          clubId: 9,
          goals: 0,
        },
        {
          playerName: 'Bruna Benites',
          position: 'DEFENSOR',
          clubId: 9,
          goals: 0,
        },
        {
          playerName: 'Ariane Cabrera',
          position: 'DEFENSOR',
          clubId: 9,
          goals: 0,
        },
        {
          playerName: 'Isa Haas',
          position: 'DEFENSOR',
          clubId: 9,
          goals: 0,
        },
        {
          playerName: 'Gilmara',
          position: 'MEIA',
          clubId: 9,
          goals: 0,
        },
        {
          playerName: 'Ju Ferreira',
          position: 'MEIA',
          clubId: 9,
          goals: 0,
        },
        {
          playerName: 'Rafa Travalão',
          position: 'MEIA',
          clubId: 9,
          goals: 1,
        },
        {
          playerName: 'Bárbara',
          position: 'MEIA',
          clubId: 9,
          goals: 1,
        },
        {
          playerName: 'Luana Gabias',
          position: 'ATACANTE',
          clubId: 9,
          goals: 2,
        },
        {
          playerName: 'Priscila',
          position: 'ATACANTE',
          clubId: 9,
          goals: 3,
        },
        {
          playerName: 'Janny',
          position: 'GOLEIRA',
          clubId: 10,
          goals: 0,
        },
        {
          playerName: 'Dih',
          position: 'DEFENSOR',
          clubId: 10,
          goals: 0,
        },
        {
          playerName: 'Luy',
          position: 'DEFENSOR',
          clubId: 10,
          goals: 0,
        },
        {
          playerName: 'Kati',
          position: 'LATERAL',
          clubId: 10,
          goals: 0,
        },
        {
          playerName: 'Madu',
          position: 'LATERAL',
          clubId: 10,
          goals: 0,
        },
        {
          playerName: 'Gabi Arcanjo',
          position: 'MEIA',
          clubId: 10,
          goals: 0,
        },
        {
          playerName: 'Isa',
          position: 'MEIA',
          clubId: 10,
          goals: 0,
        },
        {
          playerName: 'Monse',
          position: 'MEIA',
          clubId: 10,
          goals: 0,
        },
        {
          playerName: 'Farinon',
          position: 'ATACANTE',
          clubId: 10,
          goals: 0,
        },
        {
          playerName: 'Pelé',
          position: 'ATACANTE',
          clubId: 10,
          goals: 2,
        },
        {
          playerName: 'Robinha',
          position: 'ATACANTE',
          clubId: 10,
          goals: 2,
        },
        {
          playerName: 'Dalva',
          position: 'GOLEIRA',
          clubId: 11,
          goals: 0,
        },
        {
          playerName: 'Miriam',
          position: 'DEFENSOR',
          clubId: 11,
          goals: 0,
        },
        {
          playerName: 'Thaíni',
          position: 'DEFENSOR',
          clubId: 11,
          goals: 0,
        },
        {
          playerName: 'Júlia Cipriani',
          position: 'DEFENSOR',
          clubId: 11,
          goals: 0,
        },
        {
          playerName: 'Thays',
          position: 'DEFENSOR',
          clubId: 11,
          goals: 0,
        },
        {
          playerName: 'Yaki Vecca',
          position: 'DEFENSOR',
          clubId: 11,
          goals: 0,
        },
        {
          playerName: 'Luana Rodrigues',
          position: 'MEIA',
          clubId: 11,
          goals: 0,
        },
        {
          playerName: 'Juliana Santos',
          position: 'MEIA',
          clubId: 11,
          goals: 0,
        },
        {
          playerName: 'Jaine Lemke',
          position: 'MEIA',
          clubId: 11,
          goals: 0,
        },
        {
          playerName: 'Martinha',
          position: 'MEIA',
          clubId: 11,
          goals: 1,
        },
        {
          playerName: 'Aninha',
          position: 'ATACANTE',
          clubId: 11,
          goals: 2,
        },
        {
          playerName: 'Awanny',
          position: 'GOLEIRA',
          clubId: 12,
          goals: 0,
        },
        {
          playerName: 'Agustina',
          position: 'DEFENSOR',
          clubId: 12,
          goals: 1,
        },
        {
          playerName: 'Carolzinha',
          position: 'DEFENSOR',
          clubId: 12,
          goals: 0,
        },
        {
          playerName: 'Bruna Calderan',
          position: 'LATERAL',
          clubId: 12,
          goals: 2,
        },
        {
          playerName: 'Evelin',
          position: 'LATERAL',
          clubId: 12,
          goals: 1,
        },
        {
          playerName: 'Ana Clara',
          position: 'MEIA',
          clubId: 12,
          goals: 0,
        },
        {
          playerName: 'Ary Borges',
          position: 'MEIA',
          clubId: 12,
          goals: 0,
        },
        {
          playerName: 'Camilinha',
          position: 'MEIA',
          clubId: 12,
          goals: 0,
        },
        {
          playerName: 'Thayná',
          position: 'MEIA',
          clubId: 12,
          goals: 4,
        },
        {
          playerName: 'Carol Baiana',
          position: 'ATACANTE',
          clubId: 12,
          goals: 4,
        },
        {
          playerName: 'Mariana Alves',
          position: 'ATACANTE',
          clubId: 12,
          goals: 5,
        },
        {
          playerName: 'Thais Amorim',
          position: 'GOLEIRA',
          clubId: 13,
          goals: 0,
        },
        {
          playerName: 'Roberta Schroeder',
          position: 'DEFENSOR',
          clubId: 13,
          goals: 0,
        },
        {
          playerName: 'Lana',
          position: 'DEFENSOR',
          clubId: 13,
          goals: 0,
        },
        {
          playerName: 'Jamille',
          position: 'DEFENSOR',
          clubId: 13,
          goals: 0,
        },
        {
          playerName: 'Raquel',
          position: 'DEFENSOR',
          clubId: 13,
          goals: 0,
        },
        {
          playerName: 'Letícia Leme',
          position: 'MEIO',
          clubId: 13,
          goals: 0,
        },
        {
          playerName: 'Taci Sam',
          position: 'MEIO',
          clubId: 13,
          goals: 0,
        },
        {
          playerName: 'Eliane',
          position: 'MEIO',
          clubId: 13,
          goals: 0,
        },
        {
          playerName: 'Amanda Ribeiro',
          position: 'MEIO',
          clubId: 13,
          goals: 1,
        },
        {
          playerName: 'Tábatha',
          position: 'ATACANTE',
          clubId: 13,
          goals: 1,
        },
        {
          playerName: 'Daniele',
          position: 'ATACANTE',
          clubId: 13,
          goals: 3,
        },
        {
          playerName: 'Camila Gomes',
          position: 'GOLEIRA',
          clubId: 14,
          goals: 0,
        },
        {
          playerName: 'Sassá',
          position: 'DEFENSOR',
          clubId: 14,
          goals: 1,
        },
        {
          playerName: 'Tayla',
          position: 'DEFENSOR',
          clubId: 14,
          goals: 0,
        },
        {
          playerName: 'Camila',
          position: 'DEFENSOR',
          clubId: 14,
          goals: 0,
        },
        {
          playerName: 'Bruninha',
          position: 'LATERAL',
          clubId: 14,
          goals: 1,
        },
        {
          playerName: 'Fe Palermo',
          position: 'LATERAL',
          clubId: 14,
          goals: 1,
        },
        {
          playerName: 'Júlia Daltoé',
          position: 'MEIA',
          clubId: 14,
          goals: 0,
        },
        {
          playerName: 'Gi Fernandes',
          position: 'MEIA',
          clubId: 14,
          goals: 0,
        },
        {
          playerName: 'Rita Bove',
          position: 'MEIA',
          clubId: 14,
          goals: 2,
        },
        {
          playerName: 'Cristiane',
          position: 'ATACANTE',
          clubId: 14,
          goals: 5,
        },
        {
          playerName: 'Amanda Gutierrez',
          position: 'ATACANTE',
          clubId: 14,
          goals: 3,
        },
        {
          playerName: 'Zani',
          position: 'GOLEIRA',
          clubId: 15,
          goals: 0,
        },
        {
          playerName: 'Gabi Batista',
          position: 'DEFENSOR',
          clubId: 15,
          goals: 0,
        },
        {
          playerName: 'Verónica Riveros',
          position: 'DEFENSOR',
          clubId: 15,
          goals: 0,
        },
        {
          playerName: 'Karen',
          position: 'DEFENSOR',
          clubId: 15,
          goals: 0,
        },
        {
          playerName: 'Vitória Calhau',
          position: 'DEFENSOR',
          clubId: 15,
          goals: 0,
        },
        {
          playerName: 'Larissa Vasconcelos',
          position: 'MEIA',
          clubId: 15,
          goals: 0,
        },
        {
          playerName: 'Mariane',
          position: 'MEIA',
          clubId: 15,
          goals: 1,
        },
        {
          playerName: 'Adyla',
          position: 'MEIA',
          clubId: 15,
          goals: 0,
        },
        {
          playerName: 'Rafa Marques',
          position: 'MEIA',
          clubId: 15,
          goals: 0,
        },
        {
          playerName: 'Thainá',
          position: 'ATACANTE',
          clubId: 15,
          goals: 1,
        },
        {
          playerName: 'Giovânia',
          position: 'ATACANTE',
          clubId: 15,
          goals: 3,
        },
        {
          playerName: 'Thaís Helena',
          position: 'GOLEIRA',
          clubId: 16,
          goals: 0,
        },
        {
          playerName: 'Letícia Alves',
          position: 'DEFENSOR',
          clubId: 16,
          goals: 0,
        },
        {
          playerName: 'Natane',
          position: 'DEFENSOR',
          clubId: 16,
          goals: 0,
        },
        {
          playerName: 'Dani Silva',
          position: 'DEFENSOR',
          clubId: 16,
          goals: 1,
        },
        {
          playerName: 'Gislaine',
          position: 'DEFENSOR',
          clubId: 16,
          goals: 0,
        },
        {
          playerName: 'Nath Pitbull',
          position: 'MEIA',
          clubId: 16,
          goals: 0,
        },
        {
          playerName: 'Formiga',
          position: 'MEIA',
          clubId: 16,
          goals: 2,
        },
        {
          playerName: 'Duda',
          position: 'MEIA',
          clubId: 16,
          goals: 0,
        },
        {
          playerName: 'Naná',
          position: 'MEIA',
          clubId: 16,
          goals: 2,
        },
        {
          playerName: 'Mônica Bitencourt',
          position: 'ATACANTE',
          clubId: 16,
          goals: 1,
        },
        {
          playerName: 'Giovaninha',
          position: 'ATACANTE',
          clubId: 16,
          goals: 3,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('players', null, {});
  },
};