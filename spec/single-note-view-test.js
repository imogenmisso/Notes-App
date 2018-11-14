describe("SingleNoteView", function() {
  it("takes a note when instantiated", function() {
    var note = new Note("Hi");
    var singleNoteView = new SingleNoteView(note);
    expect(singleNoteView.note).toEqual(note)
  })

  it("returns a string of html", function() {
    var note = new Note("Hi");
    var singleNoteView = new SingleNoteView(note)
    expect(singleNoteView.getHTML()).toEqual('<div>Hi</div>')
  })
})
