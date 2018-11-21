import React from 'react';
import { shallow, mount } from 'enzyme';

import BookList from './BookList/';

describe('Booklist', () => {
  let component;
  const props = {
    getBooksQuery: {
      books: [
          {
            id: '',
            name:'',
          }
          ],
      loading: false
    }
  };
  const state = {

  };
  beforeEach(() => {
    component = shallow(<BookList {...props} state={state}/>)
  });
  describe('Book details', () => {
    it('should display loading message', () => {

      const loading = component.find('li');
      console.log(loading.debug())
      // expect(loading.hasClass('loading')).toEqual(true);

    });

    it.skip('should display a list of books', () => {

    });
    it.skip('should delete the select book', () => {

    });
    it.skip('should hide the book details when a book has been deleted', () => {

    });
  });
});
