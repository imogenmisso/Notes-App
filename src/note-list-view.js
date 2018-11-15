(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getHTML = function() {
    var view = '<ul>'
    this.noteList.getNotes().forEach(function(note) {
      if (note.text.length > 20) {
        view += '<li><div>' + note.text.slice(0, 20) + '...</div></li>'
      } else {
        view += '<li><div>' + note.text + '</div></li>'
      }
      })
      view += '</ul>'
      return view
  }

  exports.NoteListView = NoteListView
})(this);
