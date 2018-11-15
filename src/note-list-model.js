(function(exports) {
  function NoteList() {
    this.notes = [];
    this.id = 0;
  }

  NoteList.prototype.add = function(text) {
    this.notes.push(new Note(text, this.id));
    this.id += 1;
  };

  NoteList.prototype.getNotes = function() {
    return this.notes;
  };

  NoteList.prototype.getNoteById = function(id) {
    for (var i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id == id) {
        return this.notes[i].text;
      }
    }
  };

  exports.NoteList = NoteList;
})(this);
