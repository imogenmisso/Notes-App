(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getHTML = function() {
    var view = '<ul>'
    this.noteList.getNotes().forEach(function(note) {
        view += '<li><div>' + note.text + '</div></li>'
      })
      view += '</ul>'
      return view
  }

  exports.NoteListView = NoteListView
})(this);
