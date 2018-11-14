describe("NoteModel", function() {
  it("takes the text of a note when object is created", function() {
    var noteModel = new NoteModel("Hello");
    expect(noteModel.text).toEqual("Hello")
  })
})
