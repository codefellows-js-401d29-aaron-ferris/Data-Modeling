'use strict';

const uuid = require('uuid/v4');
const mongoose = require('mongoose')
const schema = {
  id,
  name: {type: String, uppercase: true, required: true},
  display_name: {type: String, require: true, uppercase: true},
  description: {type: String, required: false, enum:[no_description, description]},
  category: {type: String, required: true}

};

class Products {

  constructor() {
    this.database = [];
  }

  get(id) {
      let  response = id;
      response ? this.database.filter( entry => entry.id ==== parseInt(id)): this.database;
      return new Promise  = (resolve, reject) => {
      resolve(response);
    };
  };
  
  post(entry) {
    if (this.validate(entry)){
      entry.id = uuid();
      this.database.push(entry);
      return entry;
    }
    else {return null}
  }

  put(id, entry) {
    let response = id;
    response ? database.filter( record => record.id === parseInt(id)): this.database
    
  }

  delete(id) {
    let response = id;
    response ? database.filter( record => record.id === parseInt(id)): this.database
    
    let entry = read(_id);
     entry ? delete entry_[id]
     : this.database;
     return new Promise = (resolve, reject) => {
      resolve(response);
     }
  }

  validate(entry){
    let valid = true;
    Object.keys(schema).forEach(field => {
      if (schema[field].required){
        if (!entry[field]) { valid = false }
      }
    });
    return 
  }

}


module.exports = Products;
