describe("NoteModel", function() {
  it("takes the text of a note when object is created", function() {
    var note = new Note("Hello");
    expect(note.text).toEqual("Hello");
  });

  it("gives note unique id when object is created", function() {
    var note0 = new Note("Hello", 0);
    expect(note0.id).toEqual(0);
  });
});
