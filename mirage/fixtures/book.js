import Mirage, {faker}  from 'ember-cli-mirage';

export default [

  title: faker.lorem.sentence,
  author(){ return faker.name.findName() },
  year: faker.date.post

];
