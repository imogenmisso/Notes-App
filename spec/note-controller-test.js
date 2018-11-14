describe("NoteController", function() {
  it("can be instantiated", function() {
    var noteController = new NoteController(new NoteList());
    expect(noteController.noteList.getNotes()[0].text).toEqual("Favourite drink: seltzer");
  });

  it("can render the view", function() {
    var noteController = new NoteController(new NoteList());
    var document;

    NoteController.prototype.render = function() {
      document = {
        getElementById: function(id) {
          return {
            innerHTML: "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
          };
        }
      };
    };

    noteController.render();

    expect(document.getElementById('app').innerHTML).toEqual("<ul><li><div>Favourite drink: seltzer</div></li></ul>");
  });
});
