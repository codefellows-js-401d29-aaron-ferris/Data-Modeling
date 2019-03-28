'use strict';

const uuid = require('uuid/v4');

const schema = {
  name: { require: true, type: String},
  display_name: {type: String, require: true, uppercase: true},
  // description: {type: String},
  // category: {type: String, required: true},

};

class Categories {

  constructor(name, display_name, description) {
    this.database = [];
  }

  

  get(id) {
    let response = id;
    response ? this.filter( record => record._id === parseInt(id)) : this.database;
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

  validate(entry){
    let valid = true;
    Object.keys(schema).forEach(field => {
      if (schema[field].required){
        if (!entry[field]) { valid = false; }
      }
    });
    return valid;
  }

}

module.exports  = Categories;
