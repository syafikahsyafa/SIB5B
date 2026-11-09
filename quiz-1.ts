class Mario1 {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    currentForm: string = "Mario";

    moveRight(): number {
        this.positionX += this.speed;
        console.log(`Mario bergerak ke kiri. Posisi X: ${this.positionX}`);
        return this.positionX;
    }

    moveLeft(): number {
        this.positionX -= this.speed;
        console.log(`Mario bergerak ke kanan. Posisi X: ${this.positionX}`);
        return this.positionX;
    }

    getHp(): string {
        return `HP: ${this.hp}`;
    }

    getAttacked(): void {
        if (this.invincible){
            console.log(`mario sedang kebal! serangan di abaikan`);
            return;
        }
    this.hp -= 1;
    this.currentForm = 'mario';
    console.log(`mario sedang di serang! hp: ${this.hp}, kembali ke form : ${this.currentForm}`);
    }
}

class SuperMario extends Mario1 {
    jumpPower: number = 10;

    jump(): void {
        console.log("Super Mario melompat!");
    }

    attack(): void {
        console.log("Super Mario menyerang dengan lompatan!");
    }
}

class FireMario extends Mario1 {
    fireballDamage: number = 20;

    shootFireball(): void {
        console.log("Fire Mario menembakkan bola api!");
    }

    attack(): void {
        console.log("Fire Mario menyerang dengan bola api!");
    }
}

class StarMario extends Mario1 {
    starDuration: number = 10;
    invincible: boolean = true;

    becomeInvincible(): void {
        console.log("Star Mario menjadi kebal!");
    }

    attack(): void {
        console.log("Star Mario menyerang!");
    }
}


const mario1 = new Mario();
const superMario = new SuperMario();
const fireMario = new FireMario();
const starMario = new StarMario();

superMario.attack();
fireMario.attack();
starMario.attack();

superMario.jump();
fireMario.shootFireball();
starMario.becomeInvincible();