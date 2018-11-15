(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getHTML = function() {
    var view = '<ul>'
    this.noteList.getNotes().forEach(function(note) {
      if (note.text.length > 20) {
        view += '<li><div><a href="http://localhost:8080#notes/' + note.id + '">' + note.text.slice(0, 20) + '...</a></div></li>'
      } else {
        view += '<li><div><a href="http://localhost:8080#notes/' + note.id + '">' + note.text + '</a></div></li>'
      }
      })
      view += '</ul>'
      return view
  }

  exports.NoteListView = NoteListView
})(this);
