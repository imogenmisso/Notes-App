(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.add("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteList);
  }

  // NoteController.prototype.render = function() {
  //   var view = this.noteListView.getHTML();
  //   document.getElementById('app').innerHTML = view;
  // };

  NoteController.prototype.render = function() {
    var view = this.noteListView.getHTML();
    document.getElementById('app').innerHTML = view;

    makeUrlChangeShowNoteForCurrentPage();

    function makeUrlChangeShowNoteForCurrentPage() {
      window.addEventListener("hashchange", showNoteForCurrentPage);
    }

    function showNoteForCurrentPage() {
      showNote(getIdFromUrl(window.location));
    }

    function getIdFromUrl(location) {
      return location.hash.split("/")[1];
    }

    function showNote(id) {
      var noteText = this.noteController.noteList.getNoteById(id);
      document
        .getElementById("app")
        .innerHTML = noteText;
    }
  };

  exports.NoteController = NoteController;
})(this);
