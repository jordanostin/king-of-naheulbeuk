export const perso = [
    
    { // 350 le nain attaque : 35 + (80 - 30 bouclier dragon) + (15-20) = 95 lance 5 des 14            14 * 0,95 //
        id: 0,
        breed: 'Nain',
        shield: {
            strength: 55,
            magic: 5,
            dodged: 10,
        },
        attack: {
            speed: 35,
            strength: 80,
            magic: 15,
        },
        luck: 50, // 0,5 * random 0-10
        pv: 100
    },
    {
        id: 1,
        breed: 'Dragon',
        shield: {
            strength: 30,
            magic: 20,
            dodged: 20,
        },
        attack: {
            speed: 60,
            strength: 50,
            magic: 10,
        },
        luck: 60,
        pv: 100
    },
    {
        id: 2,
        breed: 'Orc',
        shield: {
            strength: 60,
            magic: 10,
            dodged: 10,
        },
        attack: {
            speed: 50,
            strength: 90,
            magic: 0,
        },
        luck: 30,
        pv: 100
    },
    {
        id: 3,
        breed: 'Elfe',
        shield: {
            strength: 5,
            magic: 40,
            dodged: 35,
        },
        attack: {
            speed: 60,
            strength: 10,
            magic: 40,
        },
        luck: 60,
        pv: 100
    },
    {
        id: 4,
        breed: 'Sorcier',
        shield: {
            strength: 10,
            magic: 60,
            dodged: 20,
        },
        attack: {
            speed: 30,
            strength: 0,
            magic: 100,
        },
        luck: 30,
        pv: 100
    },
    {
        id: 5,
        breed: 'Barbare',
        shield: {
            strength: 40,
            magic: 10,
            dodged: 15,
        },
        attack: {
            speed: 40,
            strength: 80,
            magic: 5,
        },
        luck: 60,
        pv: 100
    },
 
   {
        id: 6,
        breed: 'Vampire',
        shield: {
            strength: 20,
            magic: 20,
            dodged: 30,
        },
        attack: {
            speed: 60,
            strength: 30,
            magic: 20,
        },
        luck: 70,
        pv: 100
    },
    {
        id: 7,
        breed: 'Gobelin',
        shield: {
            strength: 20,
            magic: 20,
            dodged: 50,
        },
        attack: {
            speed: 80,
            strength: 20,
            magic: 20,
        },
        luck: 40,
        pv: 100
    }
]