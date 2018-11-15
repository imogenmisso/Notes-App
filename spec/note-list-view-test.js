describe("NoteListView", function() {
  it("takes a note list model upon instantiation", function() {
    var noteList = new NoteList()
    var noteListView = new NoteListView(noteList);
    expect(noteListView.noteList).toEqual(noteList)
  })

  it("returns the view no notes", function() {
    var noteList = new NoteList()
    var noteListView = new NoteListView(noteList);
    expect(noteListView.getHTML()).toEqual('<ul></ul>')
  })

  it("returns the view with one note", function() {
    var noteList = new NoteList()
    noteList.add("Hello Henry")
    var noteListView = new NoteListView(noteList);
    expect(noteListView.getHTML()).toEqual('<ul><li><div>' + "Hello Henry" + '</div></li></ul>')
  })

  it("returns the view with two notes", function() {
    var noteList = new NoteList()
    noteList.add("Hello Henry")
    noteList.add("Hello Imogen")
    var noteListView = new NoteListView(noteList);
    expect(noteListView.getHTML()).toEqual('<ul><li><div>' + "Hello Henry" + '</div></li><li><div>' + "Hello Imogen" + '</div></li></ul>')
  })

  it("returns only the first 20 characters of a note over 20 chars", function() {
    var noteList = new NoteList()
    noteList.add("This is a long note with over 20 characters")
    var noteListView = new NoteListView(noteList);
    expect(noteListView.getHTML()).toEqual('<ul><li><div>' + "This is a long note ..." + '</div></li></ul>')
  })

})
