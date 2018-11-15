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

  exports.NoteList = NoteList;
})(this);
