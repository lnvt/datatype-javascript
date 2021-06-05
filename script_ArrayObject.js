const dataCars = [
    sectionCarsInLocation = {
        Location: ['France', 'Italy', 'UK', 'US', 'Korea', 'VietNam'],
    },
    sectionCarsInVietNam = [
        {
            id: 1,
            name: 'Mercedes',
            cost: '1.900.000.000 VND',
            year: 2019,
            status: true,
            description: {
                id: '1.D',
                title: 'Cars Mercedes',
                content: `Mercedes-Benz (German): commonly referred to as Mercedes, 
                        is both a German automotive brand and, from late 2019 onwards, 
                        a subsidiary – as Mercedes-Benz AG – of Daimler AG.[1] Mercedes-Benz is known for producing luxury vehicles and commercial vehicles.[note 2] 
                        The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 as Daimler-Benz.[clarification needed] 
                        In 2018, Mercedes-Benz was the largest seller of premium vehicles in the world, having sold 2.31 million passenger cars.[8]`,
            },
            typeCars: ['Mercedes-Benz GLA-Class', 'Mercedes-Benz S-Class', 'Mercedes-Benz GLE-Class'],
        },
        {
            id: 2,
            name: 'Mazda',
            cost: '2.590.000.000 VND',
            year: 2020,
            status: true,
            description: {
                idDescription: '2.D',
                title: 'Cars Mazda',
                content: `The Mazda Motor Corporation (Japanese: マツダ株式会社, Hepburn: Matsuda Kabushiki-gaisha) (commonly referred to as simply Mazda) 
                        is a Japanese multinational automaker based in Fuchū, Aki District, Hiroshima Prefecture, Japan.[4]
                        In 2015, Mazda produced 1.5 million vehicles for global sales, the majority of which (nearly 1 million) 
                        were produced in the company's Japanese plants, with the remainder coming from a variety of other plants worldwide.[5] In 2015, Mazda was the fifteenth largest automaker by production worldwide.[6]`,
            },
            typeCars: ['Mazda 3', 'Mazda BT-50', 'Mazda 6'],
        },
        {
            id: 3,
            name: 'Toyota',
            cost: '1.390.000.000 VND',
            year: 2020,
            status: true,
            description: {
                idDescription: '3.D',
                title: 'Cars Toyota',
                content: `The Toyota Motor Corporation (Japanese) is a Japanese multinational automotive manufacturer headquartered in Toyota, Aichi, Japan. It was founded by Kiichiro Toyoda and incorporated on August 28, 1937. In 2017, Toyota's corporate structure consisted of 364,445 employees worldwide[4] and, as of December 2019, was the tenth-largest company in the world by revenue. Toyota is the largest automobile manufacturer in the world followed by Volkswagen Group, based on 2020 unit sales.[5][6] Toyota was the world's first automobile manufacturer to produce more than 10 million vehicles per year, which it has done since 2012, when it also reported the production of its 200 millionth vehicle.[7] As of July 2014, Toyota was the largest listed company in Japan by market capitalization (worth more than twice as much as number 2-ranked SoftBank)[8] and by revenue.[9][10]`,
            },
            typeCars: ['Toyota Rush', 'Toyota Avanza', 'Toyota Camry'],
        },
        {
            id: 4,
            name: 'Hyundai',
            cost: '879.000.000 VND',
            year: 2020,
            status: true,
            description: {
                idDescription: '4.D',
                title: 'Cars Hyundai',
                content: `The Hyundai Motor Company (Korean: 현대자동차; Hanja: 現代自動車; RR: Hyeondae Jadongcha About this soundlisten; KRX: 005380), commonly known as Hyundai (Korean: 현대; Hanja: 現代; RR: Hyeondae, IPA: [ˈhjəːndɛ];[a] lit. 'modernity'), is a South Korean multinational automotive manufacturer headquartered in Seoul. Hyundai Motor Company was founded in 1967. Currently, the company owns 33.88 percent of Kia Corporation,[5] and also fully owns two marque including its luxury cars subsidiary, Genesis Motor, and electric vehicle sub-brand, Ioniq.[6][7][8] Those three brands altogether comprise the Hyundai Motor Group.`,
            },
            typeCars: ['Hyundai Santa Fe', 'Hyundai Elantra', 'Hyundai i20'],
        },
        {
            id: 5,
            name: 'Mitsubishi',
            cost: '1.990.000.000 VND',
            year: 2020,
            status: true,
            description: {
                idDescription: '5.D',
                title: 'Cars Hyundai',
                content: `Mitsubishi Motors Corporation (Japanese) is a Japanese multinational automotive manufacturer headquartered in Minato, Tokyo, Japan.[6] In 2011, Mitsubishi Motors was the sixth-largest Japanese automaker and the nineteenth-largest worldwide by production.[7] Since October 2016, Mitsubishi has been one-third (34%) owned by Nissan, and thus a part of the Renault–Nissan–Mitsubishi Alliance.[8]

                Besides being part of the Renault–Nissan–Mitsubishi Alliance, it is also a part of Mitsubishi keiretsu, formerly the biggest industrial group in Japan, and the company was originally formed in 1970 from the automotive division of Mitsubishi Heavy Industries.[9]`,
            },
            typeCars: ['Mitsubishi Xpander', 'Mitsubishi Triton ', 'Mitsubishi Pajero Sport'],
        },
    ],
]
console.log(dataCars);
console.log( typeof dataCars);
// console.log(JSON.stringify(dataCars));
dataCars[0].Location.map((key, index) => console.log(key));
dataCars[1].forEach(function(element) {
    console.log(element.id);
})

const dataTravels = {
    name: [ 'Dalat', 'DaNang', 'NhaTrang', 'TPHCM'],
    location: ['VN', 'Japanese', 'Korea', 'Chinese']
}

dataTravels.location.map((key,index) => console.log(key));
dataTravels.name.forEach(function(element) {
    console.log(element);
});;

const dataPhones = [
    { 'name' : 'Iphone'},
    { 'name' : 'Samsung'},
    { 'name' : 'Vivo'},
    { 'name' : 'Mobile'},
    { 'name' : 'Oppo'},
    { 'name' : 'Nokia'},
    { 'name' : '...'},
]

dataPhones.forEach(function(value, index) {
    console.log(value.name + " . " + index);
});

const person = {
    name : 'Mercedes',
    type : 'Maybach'
}

console.log(Object.keys(person)); //Object.keys to get key
console.log(Object.values(person)); //Object.values to get value
console.log(Object.entries(person)); //Object.entries to get both key and value

console.log(Object.values(dataCars[0].Location))


//Function create convert   
const convertArrayToObject = (array,key) => {
    const initialValue = {};
    return array.reduce((obj, item) =>  {
        return {
            ...obj,
            [item[key]] : item,
        }
    }, initialValue);
};

console.log(convertArrayToObject([
    { id: 1, name: 'Mercedes', year: 2020},
    { id: 2, name: 'Toyota', year: 2021},
    { id: 3, name: 'Mazda', year: 2022},
    ],
     'id',
    ),
)

