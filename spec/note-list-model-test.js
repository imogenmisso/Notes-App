describe("NoteList", function() {
  it("stores an array of note models", function() {
    var noteList = new NoteList();
    expect(noteList.notes.length).toEqual(0);
  });

  it("returns all the notes in the array", function() {
    var noteList = new NoteList();
    var note = new Note("Hello");
    noteList.add(note);

    expect(noteList.getNotes()[0].text).toEqual("Hello");
  });
});
