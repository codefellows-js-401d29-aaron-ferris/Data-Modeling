'use strict';

const Categories = require('../categories');
const categories = new Categories();
describe ('categories tests', () =>{

  it('post can create a category', () => {
    let books = {name: 'book', display_name: 'books', description: 'You read them' };
    let createdCategory = categories.post(books);
    console.log('createdcategory', createdCategory);
    expect(createdCategory.name).toEqual(books.name);
    expect(createdCategory.display_name).toEqual(books.display_name);
    expect(createdCategory.description).toEqual(books.description);
  });

  it('get() can get a list of teams', () => {
    let categoriesList =  categories.get();
    expect(Array.isArray(categoriesList)).toBeTruthy();
  });

  it('get() can get a single team', () => {
    let category = {
      name: 'word', display_name: 'words', description: 'The bird is the word',
    } ;
    let foundCategory = categories.get(category.id);
    expect(Array.isArray(categoriesList)).toBeTruthy();
  });
});