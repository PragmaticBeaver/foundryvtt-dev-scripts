// Find all Actors with the same name
function findActorsByName(name) {
  for (const a of game.actors.values()) {
    if (a.data.name.trim().toLowerCase() === name.trim().toLowerCase()) {
      console.log(a);
    }
  }
}

// Delete all Actors with name equal to "name"
async function deleteActors(name) {
  for (const a of game.actors.values()) {
    if (a.data.name.trim().toLowerCase() === name.trim().toLowerCase()) {
      await a.delete();
    }
  }
}