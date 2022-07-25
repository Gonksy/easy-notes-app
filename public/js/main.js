console.log(notes)
const deleteButtons = document.querySelectorAll('.deleteButton')

Array.from(deleteButtons).forEach((element) => {
  element.addEventListener('click', deleteNote)
})

async function deleteNote(){
  const noteId = this.id
  console.log(noteId)
  try{
    const response = await fetch(`notes/${noteId}`, {
      method: 'delete',
      headers: {'Content-Type': 'application/json'}
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  }
  catch(err){
    console.log(err)
  }
}