let clickUpgrades = {
  boots: {
    price: 50,
    quantity: 0,
    multiplier: 1,
  },
  gloves: {
    price: 100,
    quantity: 0,
    multiplier: 2,
  },
  helmet: {
    price: 200,
    quantity: 0,
    multiplier: 4,
  },
  shoulders: {
    price: 400,
    quantity: 0,
    multiplier: 8,
  },
  weapoon: {
    price: 800,
    quantity: 0,
    multiplier: 16,
  },
};

let autoUpgrades = {
  warrior: {
    price: 250,
    quantity: 0,
    multiplier: 10,
  },
  priest: {
    price: 500,
    quantity: 0,
    multiplier: 20,
  },
  paladin: {
    price: 1000,
    quantity: 0,
    multiplier: 40,
  },
  mage: {
    price: 2000,
    quantity: 0,
    multiplier: 80,
  },
}

let gold = 0

//Mine Function
function slay(){
  console.log('murloc slayed')
  gold += 1
  for (const key in clickUpgrades) {
    gold += (clickUpgrades.boots.quantity * clickUpgrades.boots.multiplier)
  }
  drawGold()
  drawUpgrades()
}

function drawGold(){
  document.getElementById('goldCount').innerText = gold
}

function drawUpgrades(){
  if (gold >= 50) {
    document.getElementById('bootButton').disabled = false
  }
}

function buyBoots(){
  if (gold >= 50) {
    document.getElementById('bootButton').disabled = false
    console.log('boots have been bought')
    gold -= 50
    clickUpgrades.boots.quantity++
  }
  drawGold()
}

