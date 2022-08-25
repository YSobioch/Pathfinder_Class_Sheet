let submitButton = document.getElementById('submit');
let editedDiv = $('#thisDiv')
let classes = []

class RPGClass{
    constructor(name, attack, defense, scale){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.scale = scale;
    }

    getAttack(){
        return this.attack;
    }

    getDefense(){
        return this.defense;
    }

    getScaler(){
        return this.scale;
    }
}

const mage = new RPGClass('Mage', 10, 5, 12);
const knight = new RPGClass('Knight', 5, 40, 6);
const rouge = new RPGClass('Rouge', 30, 5, 8);
const bard = new RPGClass('Bard', 2, 8, 5);
const druid = new RPGClass('Druid', 15, 15, 8);

classes.push(mage);
classes.push(knight);
classes.push(rouge);
classes.push(bard);
classes.push(druid);

submitButton.addEventListener("click", () => {

    let characterClass = document.getElementById('Class').value;
    let characterLevel = document.getElementById('Level').value;
    let attackStat = 0;
    let defenseStat = 0;
    
    for(let i = 0; i < classes.length; i++){
        if(classes[i].name.toLowerCase() === characterClass.toLowerCase()){
            attackStat = classes[i].getAttack() + (classes[i].getScaler() * characterLevel)
            defenseStat = classes[i].getDefense() + (0.5 * classes[i].getScaler() * characterLevel)
        }
    }

    editedDiv.empty();
    editedDiv.append(`
    <div class="row">
        <div class="col-sm">
            <h1>${characterClass}</h1>
        </div>
        <div class="col-3">
            <h1>Level: ${characterLevel}</h1>
        </div>
    </div> <br> <br>

    <h3>Attack: ${attackStat}</h3> <br>
    <h3>Defense: ${defenseStat}</h3> <br>
    `)
});

