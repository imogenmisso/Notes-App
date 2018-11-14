(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    noteList.add("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.render = function() {
    var view = this.noteListView.getHTML();
    document.getElementById('app').innerHTML = view;
  };

  exports.NoteController = NoteController;
})(this);
