const fs = require('fs');
const util = require('util')  


const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)


class Notes{
  read(){
    return readFileAsync('./db/db.json', 'utf8')
  }
  write(note){
    return writeFileAsync('./db/db.json', JSON.stringify(note))
  }
  
  getNotes(){
    return this.read().then((data) => {
      let parseData;
      try {
        parseData=[].concat(JSON.parse(data))
      } catch(err){
        parseData=[];
      }
      return parseData
    })
  }

  addNote(newNote){
    const {title, text} = newNote
    if (!title || !text){
      throw new Error('Please add a title and text to your note')
    }
    
    return this.getNotes()
      .then((notes)=> [...notes, newNote])
      .then((updatedNotes)=> this.write(updatedNotes))
      .then(()=> newNote)
  }

}
module.exports = new Notes();

