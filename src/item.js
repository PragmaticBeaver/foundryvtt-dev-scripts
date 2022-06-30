// Find all Items with the same name
function findItemsByName(name) {
  for (const a of game.items.values()) {
    if (a.data.name.trim().toLowerCase() === name.trim().toLowerCase()) {
      console.log(a);
    }
  }
}


// Find Items of Pack by start of "name"
function findItems(startOfName) {
  game.packs.get("dnd5e.items").index.forEach((element) => {
    if (
      element.name.toLowerCase().startsWith(startOfName.trim().toLowerCase())
    ) {
      console.log(element);
    }
  });
}

// Delete all items with name equal to "name"
async function deleteItems(name) {
  for (const a of game.items.values()) {
    if (a.data.name.trim().toLowerCase() === name.trim().toLowerCase()) {
      await a.delete();
    }
  }
}