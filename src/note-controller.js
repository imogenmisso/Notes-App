(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    this.noteController.showNote(this.noteController.getIdFromUrl(window.location));
  };

  NoteController.prototype.showNote = function(id) {
    var noteText = this.noteList.getNoteById(id);
    document
      .getElementById("app")
      .innerHTML = noteText;
  };

  NoteController.prototype.getIdFromUrl = function(location) {
    return location.hash.split("/")[1];
  };

  NoteController.prototype.addNoteToNoteList = function(noteText) {
    this.noteList.add(noteText);
    this.noteListView = new NoteListView(this.noteList);
    var view = this.noteListView.getHTML();
    document.getElementById('app').innerHTML = view;
  };

  NoteController.prototype.makeSubmitButtonAddNewNote = function() {
    var button = document.getElementById('submit_button');
    button.addEventListener('click', function(event) {
      event.preventDefault();
      var noteText = document.getElementById('note_text').value;
      event.view.noteController.addNoteToNoteList(noteText);
    });
  };

  NoteController.prototype.render = function() {
    var view = this.noteListView.getHTML();
    document.getElementById('app').innerHTML = view;

    this.makeUrlChangeShowNoteForCurrentPage();
    this.makeSubmitButtonAddNewNote();
  };

  exports.NoteController = NoteController;
})(this);
