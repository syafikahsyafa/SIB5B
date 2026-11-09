class Mario{
    hp : number = 1;
    speed : number = 5;
    positionX : number = 0;
    positionY : number =  0;
    invincible: boolean = false;
    currentForm : string = "mario";

    moveRight(): number {
    this.positionX += this.speed;
    return this.positionX;
    }

    moveLeft(): number {
    this.positionX -= this.speed;
    return this.positionX;
    }

    jump(): void {
    this.positionY += 5;
    console.log(`Mario melompat! Posisi Y: ${this.positionY}`);
}

    getSuperMushroom(): void {
        this.hp += 1;
        this.currentForm = 'super mario' ;
        console.log(`Mario memakan super mushroom! From: ${this.currentForm}, hp: ${this.hp}`);        
    }

     getFireFlower(): void{
        this.hp += 1;
        this.currentForm = 'fire mario' ;
        console.log(`Mario mengambil fire flowe! From: ${this.currentForm}, hp: ${this.hp}`);        
    }

    getSuperStar(): void{
    this.invincible = true;
    console.log(`Mario mengambil super star! sekarang keballlll.`);
    }

    shootFireball(): void {
    if (this.currentForm === 'fire mario') {
        console.log(`Mario sedang menembakkan bola api!`);
        }
    }

    getAttacked(): void {
        if (this.invincible){
            console.log(`mario sedang kebal! serangan di abaikan`);
            return;
        }

        
    this.hp -= 1;
    this.currentForm = 'mario';
    console.log(`mario sedang di serang! hp: ${this.hp}, kembali ke form : ${this.currentForm}`);

    if (this.hp <= 0){
    console.log ("Mario mati");
       }
    }
}


class PowerUp {
 applyEffect(mario: Mario): void {
        console.log("Mario mendapatkan PowerUp!");
    }
}

class SuperMushroom extends PowerUp {
    constructor() {
        super();
    }

    applyEffect(mario: Mario): void {
        mario.hp += 1;
        mario.currentForm = 'super mario';

        mario.jump();


        console.log(`Mario memakan Super Mushroom dan melompat ! HP: ${mario.hp}, Form: ${mario.currentForm}`);
    }
}

class FireFlower extends PowerUp {
    constructor() {
        super();
    }

    applyEffect(mario: Mario): void {
        mario.hp += 1;
        mario.currentForm = 'fire mario';

        console.log(`Mario mengambil Fire Flower! HP: ${mario.hp}, Form: ${mario.currentForm}`);
    }
}

class SuperStar extends PowerUp {
    constructor() {
        super();
    }

    applyEffect(mario: Mario): void {
        mario.invincible = true;

        console.log(`Mario menjadi kebal!`);
    }
}

const mario = new Mario();
const mushroom = new SuperMushroom();
const flower = new FireFlower();
const star = new SuperStar();

mushroom.applyEffect(mario);
flower.applyEffect(mario);
mario.shootFireball();

star.applyEffect(mario);
mario.getAttacked();

console.log(mario);


//Rumus membuat objek
//const namaVariabel = new NamaClass();
//const mario = new Mario();

//Rumus memanggil method tanpa parameter
//namaObjek.namaMethod();
//mario.shootFireball();

//Rumus memanggil method dengan parameter
//namaObjek.namaMethod(argument);
//mushroom.applyEffect(mario);