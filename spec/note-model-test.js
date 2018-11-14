describe("NoteModel", function() {
  it("takes the text of a note when object is created", function() {
    var note = new Note("Hello");
    expect(note.text).toEqual("Hello");
  });
});
