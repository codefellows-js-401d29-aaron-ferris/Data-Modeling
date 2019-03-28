'use strict';

const uuid = require('uuid/v4');

const schema = {
  id,
  name: {type: String, uppercase: true, required: true},
  display_name: {type: String, require: true, uppercase: true},
  description: {type: String, required: false, enum:[no_description, description]},
  category: {type: String, required: true}

};

class Categories {

  constructor(name, display_name, description) {
    this.database = []
  }
  
  

  get(_id) {
    let  response = _id;
    if (this.validate(entry)){
      entry.id = uuid();
      this.database.push(entry);
      return entry;
    }
    else {return null}
  }
  
  post(record) {
    if (this.validate(record)){
      record.id = uuid();
      this.database.push(record);
      return record;
    }
  }

  put(_id, record) {
    
  }

  delete(_id) {
    let response =_id;

    response ? database.filter( record => record._id === parseInt(id))
    : delete entry[_id]
  }


}

module.exports = Categories;
