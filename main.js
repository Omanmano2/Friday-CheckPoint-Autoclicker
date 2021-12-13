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
  weapon: {
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


//find a way to add to the counter without using a call to each item -> ${}
function drawGoldPerClick(){
  document.getElementById('clickCount').innerHTML = (1 + (clickUpgrades.boots.quantity * clickUpgrades.boots.multiplier) +(clickUpgrades.gloves.quantity * clickUpgrades.gloves.multiplier) + (clickUpgrades.helmet.quantity * clickUpgrades.helmet.multiplier) + (clickUpgrades.shoulders.quantity * clickUpgrades.shoulders.multiplier) + (clickUpgrades.weapon.quantity * clickUpgrades.weapon.multiplier))
}

//Mine Function
function slay(){
  console.log('murloc slayed')
    gold += 1 + (clickUpgrades.boots.quantity * clickUpgrades.boots.multiplier)+(clickUpgrades.gloves.quantity * clickUpgrades.gloves.multiplier) +(clickUpgrades.helmet.quantity * clickUpgrades.helmet.multiplier) + (clickUpgrades.shoulders.quantity * clickUpgrades.shoulders.multiplier) + (clickUpgrades.weapon.quantity * clickUpgrades.weapon.multiplier)
    document.getElementById('goldCount').innerHTML = Math.floor(gold)
  drawBootButton()
  drawGloveButton()
  drawWarriorButton()
  drawPriestButton()
  drawHelmetButton()
  drawShouldersButton()
  drawWeaponButton()
}



//Create 1 Function for the draw.item.Button using a template and for in loop. Do the same for the autoupgrades
function drawBootButton(){
  if (gold >= clickUpgrades.boots.price) {
    document.getElementById('bootButton').disabled = false
  } else {
    document.getElementById('bootButton').disabled = true
  }
}

function drawGloveButton(){
  if (gold >= clickUpgrades.gloves.price) {
    document.getElementById('gloveButton').disabled = false
  } else {
    document.getElementById('gloveButton').disabled = true
  }
}

function drawHelmetButton(){
  if (gold >= clickUpgrades.helmet.price) {
    document.getElementById('helmetButton').disabled = false
  } else {
    document.getElementById('helmetButton').disabled = true
  }
}

function drawShouldersButton(){
  if (gold >= clickUpgrades.shoulders.price) {
    document.getElementById('shouldersButton').disabled = false
  } else {
    document.getElementById('shouldersButton').disabled = true
  }
}

function drawWeaponButton(){
  if (gold >= clickUpgrades.weapon.price) {
    document.getElementById('weaponButton').disabled = false
  } else {
    document.getElementById('weaponButton').disabled = true
  }
}

function drawWarriorButton(){
  if (gold >= autoUpgrades.warrior.price) {
    document.getElementById('warriorButton').disabled = false
  } else {
    document.getElementById('warriorButton').disabled = true
  }
}

function drawPriestButton(){
  if (gold >= autoUpgrades.priest.price) {
    document.getElementById('priestButton').disabled = false
  } else {
    document.getElementById('priestButton').disabled = true
  }
}

function buyBoots(){
  if (gold >= clickUpgrades.boots.price) {
    console.log('boots have been bought')
    gold -= clickUpgrades.boots.price
    document.getElementById('goldCount').innerHTML = Math.floor(gold)
    clickUpgrades.boots.quantity++
    console.log(clickUpgrades.boots.quantity)
    document.getElementById('bootCount').innerText = clickUpgrades.boots.quantity
    clickUpgrades.boots.price = (clickUpgrades.boots.price) + (clickUpgrades.boots.price *.25)
    console.log(clickUpgrades.boots.price)
    document.getElementById('bootPricing').innerText = Math.floor(clickUpgrades.boots.price)
  }
  drawBootButton()
  drawGoldPerClick()
}

function buyGloves(){
  if (gold >= clickUpgrades.gloves.price) {
    console.log('gloves have been bought')
    gold -= clickUpgrades.gloves.price
    document.getElementById('goldCount').innerText = Math.floor(gold)
    clickUpgrades.gloves.quantity++
    console.log(clickUpgrades.gloves.quantity)
    document.getElementById('gloveCount').innerText = clickUpgrades.gloves.quantity
    clickUpgrades.gloves.price = (clickUpgrades.gloves.price) + (clickUpgrades.gloves.price *.25)
    console.log(clickUpgrades.gloves.price)
    document.getElementById('glovePricing').innerText = Math.floor(clickUpgrades.gloves.price)
  }
  // drawGold()
  drawGloveButton()
  drawGoldPerClick()
}

function buyHelmet(){
  if (gold >= clickUpgrades.helmet.price) {
    console.log('helmet have been bought')
    gold -= clickUpgrades.helmet.price
    document.getElementById('goldCount').innerHTML = Math.floor(gold)
    clickUpgrades.helmet.quantity++
    console.log(clickUpgrades.helmet.quantity)
    document.getElementById('helmetCount').innerText = clickUpgrades.helmet.quantity
    clickUpgrades.helmet.price = (clickUpgrades.helmet.price) + (clickUpgrades.helmet.price *.25)
    console.log(clickUpgrades.helmet.price)
    document.getElementById('helmetPricing').innerText = Math.floor(clickUpgrades.helmet.price)
  }
  drawHelmetButton()
  drawGoldPerClick()
}

function buyShoulders(){
  if (gold >= clickUpgrades.shoulders.price) {
    console.log('shoulders have been bought')
    gold -= clickUpgrades.shoulders.price
    document.getElementById('goldCount').innerHTML = Math.floor(gold)
    clickUpgrades.shoulders.quantity++
    console.log(clickUpgrades.shoulders.quantity)
    document.getElementById('shouldersCount').innerText = clickUpgrades.shoulders.quantity
    clickUpgrades.shoulders.price = (clickUpgrades.shoulders.price) + (clickUpgrades.shoulders.price *.25)
    console.log(clickUpgrades.shoulders.price)
    document.getElementById('shouldersPricing').innerText = Math.floor(clickUpgrades.shoulders.price)
  }
  drawShouldersButton()
  drawGoldPerClick()
}

function buyWeapon(){
  if (gold >= clickUpgrades.weapon.price) {
    console.log('weapon have been bought')
    gold -= clickUpgrades.weapon.price
    document.getElementById('goldCount').innerHTML = Math.floor(gold)
    clickUpgrades.weapon.quantity++
    console.log(clickUpgrades.weapon.quantity)
    document.getElementById('weaponCount').innerText = clickUpgrades.weapon.quantity
    clickUpgrades.weapon.price = (clickUpgrades.weapon.price) + (clickUpgrades.weapon.price *.25)
    console.log(clickUpgrades.weapon.price)
    document.getElementById('weaponPricing').innerText = Math.floor(clickUpgrades.weapon.price)
  }
  drawWeaponButton()
  drawGoldPerClick()
}


function WarriorAutoClick(){
  console.log("warriorAutoClick is called")
  if (gold >= autoUpgrades.warrior.price) {
    gold -= autoUpgrades.warrior.price
    document.getElementById('goldCount').innerHTML = Math.floor(gold)
    autoUpgrades.warrior.quantity++
    document.getElementById('warriorCount').innerText = autoUpgrades.warrior.quantity
    autoUpgrades.warrior.price = (autoUpgrades.warrior.price) + (autoUpgrades.warrior.price *.25)
    document.getElementById('warriorPricing').innerText = Math.floor(autoUpgrades.warrior.price)
  }
  drawWarriorButton()
}

function PriestAutoClick(){
  console.log("PriestAutoClick is called")
  if (gold >= autoUpgrades.priest.price) {
    gold -= autoUpgrades.priest.price
    document.getElementById('goldCount').innerHTML = Math.floor(gold)
    autoUpgrades.priest.quantity++
    document.getElementById('priestCount').innerText = autoUpgrades.priest.quantity
    autoUpgrades.priest.price = (autoUpgrades.priest.price) + (autoUpgrades.priest.price *.25)
    document.getElementById('priestPricing').innerText = Math.floor(autoUpgrades.priest.price)
  }
  drawPriestButton()
}


function collectAutoUpgrades(){
  gold += ((autoUpgrades.warrior.quantity * autoUpgrades.warrior.multiplier)+(autoUpgrades.priest.quantity * autoUpgrades.priest.multiplier))
  document.getElementById('goldCount').innerHTML = Math.floor(gold)
}

function GoldInterval() {
  setInterval(collectAutoUpgrades,3000)
}

GoldInterval()
drawGoldPerClick()










