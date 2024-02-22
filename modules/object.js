export let unitData ={ 

mage:{
m1_1:{ name:'Гремлины' , att:2, def:2, dmg:[1,2], hp:5, spd:3, int:7,shot:0, mana:0, spell:['Стрелок'] },
m1_2:{ name:'Старшие гремлены' , att:2, def:2, dmg:[1,2], hp:6, spd:5, int:11,shot:0, mana:0, spell:['Стрелок'] },
m1_3:{ name:'Гремлены-вредители' , att:5, def:3, dmg:[1,2], hp:6, spd:5, int:12,shot:0, mana:0, spell:['Стрелок'] },

m2_1:{ name:'Каменные горгульи' , att:3, def:4, dmg:[1,1], hp:15, spd:6, int:9,shot:0, mana:0, spell:[] },
m2_2:{ name:'Обсидиановые горгули' , att:4, def:4, dmg:[1,2], hp:20, spd:7, int:10,shot:0, mana:0, spell:[] },
m2_3:{ name:'Стихийные горгули' , att:5, def:4, dmg:[1,2], hp:20, spd:7, int:11,shot:0, mana:0, spell:[] },  

m3_1:{ name:'Железные големы' , att:5, def:5, dmg:[3,5], hp:18, spd:4, int:7,shot:0, mana:0, spell:[] },
m3_2:{ name:'Стальные големы' , att:6, def:6, dmg:[5,7], hp:24, spd:4, int:7,shot:0, mana:0, spell:[] },
m3_3:{ name:'Обсидиановые големы' , att:6, def:4, dmg:[5,7], hp:20, spd:4, int:9,shot:0, mana:0, spell:[] },  

m4_1:{ name:'Маги' , att:10, def:10, dmg:[7,7], hp:18, spd:4, int:10,shot:0, mana:0, spell:['Дописать'] },
m4_2:{ name:'Архимаги' , att:10, def:10, dmg:[7,7], hp:30, spd:4, int:10,shot:0, mana:0, spell:['Дописать'] },
m4_3:{ name:'Боевые маги' , att:12, def:9, dmg:[7,7], hp:29, spd:4, int:10,shot:0, mana:0, spell:['Дописать'] },

m5_1:{ name:'Джинны' , att:11, def:10, dmg:[12,14], hp:40, spd:7, int:12,shot:0, mana:0, spell:['Дописать'] },
m5_2:{ name:'Султаны джиннов' , att:14, def:14, dmg:[14,19], hp:45, spd:8, int:12,shot:0, mana:0, spell:['Дописать'] },
m5_3:{ name:'Визири джиннов' , att:13, def:13, dmg:[14,19], hp:50, spd:8, int:12,shot:0, mana:0, spell:['Дописать'] },

m6_1:{ name:'Принцессы ракшас' , att:25, def:20, dmg:[15,23], hp:120, spd:5, int:9,shot:0, mana:0, spell:['Дописать'] },
m6_2:{ name:'Раджи ракшас' , att:25, def:20, dmg:[23,30], hp:140, spd:6, int:8,shot:0, mana:0, spell:['Дописать'] },
m6_3:{ name:'Кшатрии ракшас' , att:27, def:20, dmg:[25,35], hp:135, spd:7, int:8,shot:0, mana:0, spell:['Дописать'] },


m7_1:{ name:'Колоссы' , att:27, def:27, dmg:[40,70], hp:175, spd:6, int:10,shot:0, mana:0, spell:['Дописать'] },
m7_2:{ name:'Титаны' , att:30, def:30, dmg:[40,70], hp:190, spd:6, int:10,shot:0, mana:0, spell:['Дописать'] },
m7_3:{ name:'Громовержцы' , att:30, def:30, dmg:[40,70], hp:190, spd:6, int:10,shot:0, mana:0, spell:['Дописать'] },
},    

elf:{
e1_1:{ name:'Феи' , att:1, def:1, dmg:[1,2], hp:5, spd:7, int:12,shot:0, mana:0, spell:['Летающее,Враг не сопр','Убийственные брызги'] },
e1_2:{ name:'Дриады' , att:2, def:1, dmg:[2,2], hp:6, spd:7, int:15,shot:0, mana:0, spell:[''] },
e1_3:{ name:'Нимфы' , att:2, def:1, dmg:[2,3], hp:6, spd:7, int:14,shot:0, mana:0, spell:[''] },

e2_1:{ name:'Танцующие с клинками' , att:3, def:2, dmg:[2,5], hp:12, spd:6, int:11,shot:0, mana:0, spell:[] },
e2_2:{ name:'Танцующие со смертью' , att:5, def:3, dmg:[3,5], hp:12, spd:6, int:15,shot:0, mana:0, spell:[] },
e2_3:{ name:'Танцующие с ветром' , att:6, def:6, dmg:[4,6], hp:12, spd:7, int:15,shot:0, mana:0, spell:[] },  

e3_1:{ name:'Эльфийские лучники' , att:4, def:1, dmg:[3,5], hp:10, spd:5, int:10,shot:0, mana:0, spell:[] },
e3_2:{ name:'Мастера лука' , att:5, def:4, dmg:[5,8], hp:14, spd:5, int:10,shot:0, mana:0, spell:[] },
e3_3:{ name:'Лесные стрелки' , att:6, def:5, dmg:[8,9], hp:14, spd:5, int:11,shot:0, mana:0, spell:[] },  

e4_1:{ name:'Друиды' , att:7, def:7, dmg:[7,9], hp:34, spd:5, int:10,shot:0, mana:0, spell:['Дописать'] },
e4_2:{ name:'Верховные друидыt' , att:12, def:9, dmg:[9,14], hp:33, spd:4, int:10,shot:0, mana:0, spell:['Дописать'] },
e4_3:{ name:'Старшие друиды' , att:12, def:8, dmg:[10,14], hp:34, spd:4, int:10,shot:0, mana:0, spell:['Дописать'] },

e5_1:{ name:'Единороги' , att:12, def:12, dmg:[10,20], hp:57, spd:7, int:12,shot:0, mana:0, spell:['Дописать'] },
e5_2:{ name:'Боевые единороги' , att:17, def:17, dmg:[10,20], hp:77, spd:7, int:12,shot:0, mana:0, spell:['Дописать'] },
e5_3:{ name:'Светлые единороги' , att:15, def:15, dmg:[9,24], hp:80, spd:7, int:12,shot:0, mana:0, spell:['Дописать'] },

e6_1:{ name:'Энты' , att:19, def:27, dmg:[7,17], hp:175, spd:6, int:7,shot:0, mana:0, spell:['Дописать'] },
e6_2:{ name:'Древние энты' , att:19, def:29, dmg:[10,20], hp:181, spd:6, int:7,shot:0, mana:0, spell:['Дописать'] },
e6_3:{ name:'Дикие энты' , att:21, def:27, dmg:[12,20], hp:175, spd:6, int:7,shot:0, mana:0, spell:['Дописать'] },


e7_1:{ name:'Зеленые драконы' , att:27, def:25, dmg:[30,50], hp:200, spd:8, int:12,shot:0, mana:0, spell:['Дописать'] },
e7_2:{ name:'Изумрудные драконы' , att:31, def:27, dmg:[33,57], hp:200, spd:9, int:14,shot:0, mana:0, spell:['Дописать'] },
e7_3:{ name:'Кристаллические драконы' , att:30, def:26, dmg:[30,60], hp:200, spd:9, int:14,shot:0, mana:0, spell:['Дописать'] },
}, 

hum :{
    h1_1:{ name:'Крестьяне' , att:1, def:1, dmg:[1,1], hp:3, spd:4, int:8,shot:0, mana:0, spell:['Налогоплательщик'] },
    h1_2:{ name:'Ополченцы' , att:1, def:2, dmg:[1,2], hp:6, spd:4, int:8,shot:0, mana:0, spell:['Налогоплательщик','Оглушающий удар'] },
    h1_3:{ name:'Лендлорды' , att:2, def:1, dmg:[1,2], hp:6, spd:4, int:8,shot:0, mana:0, spell:['Налогоплательщик','Штурм'] },

    h2_1:{ name:'Лучники' , att:4, def:3, dmg:[2,4], hp:7, spd:4, int:9,shot:0, mana:0, spell:['Стрелок','Стрельба навесом'] },
    h2_2:{ name:'Арбалетчики' , att:4, def:4, dmg:[2,8], hp:10, spd:4, int:8,shot:0, mana:0, spell:['Стрелок','Точный выстрел'] },
    h2_3:{ name:'Стрелки' , att:5, def:4, dmg:[2,8], hp:10, spd:4, int:8,shot:0, mana:0, spell:['Стрелок','Стрельба без штрафа'] },  

    h3_1:{ name:'Мечники' , att:4, def:8, dmg:[2,4], hp:16, spd:4, int:8,shot:0, mana:0, spell:['Ярость','Большой щит','Оглушающий удар'] },
    h3_2:{ name:'Латники' , att:5, def:9, dmg:[2,5], hp:26, spd:4, int:8,shot:0, mana:0, spell:['Ярость','Большой щит','Оглушающий удар','Защита союзников'] },
    h3_3:{ name:'Ревнитель веры' , att:8, def:8, dmg:[2,5], hp:26, spd:4, int:8,shot:0, mana:0, spell:['Ярость','Большой щит','Колун'] },  

    h4_1:{ name:'Грифоны' , att:7, def:5, dmg:[5,10], hp:30, spd:7, int:15,shot:0, mana:0, spell:['Дописать'] },
    h4_2:{ name:'Королевские грифоны' , att:9, def:8, dmg:[5,15], hp:35, spd:7, int:15,shot:0, mana:0, spell:['Дописать'] },
    h4_3:{ name:'Боевые грифоны' , att:7, def:12, dmg:[6,12], hp:52, spd:7, int:10,shot:0, mana:0, spell:['Дописать'] },

    h5_1:{ name:'Монахи' , att:12, def:12, dmg:[9,12], hp:54, spd:5, int:10,shot:0, mana:0, spell:['Дописать'] },
    h5_2:{ name:'Инквизиторы' , att:16, def:16, dmg:[9,12], hp:80, spd:5, int:10,shot:0, mana:0, spell:['Дописать'] },
    h5_3:{ name:'Адепт' , att:20, def:14, dmg:[9,12], hp:80, spd:5, int:10,shot:0, mana:0, spell:['Дописать'] },

    h6_1:{ name:'Рыцари' , att:23, def:21, dmg:[20,30], hp:90, spd:7, int:11,shot:0, mana:0, spell:['Дописать'] },
    h6_2:{ name:'Паладины' , att:24, def:24, dmg:[20,30], hp:100, spd:8, int:12,shot:0, mana:0, spell:['Дописать'] },
    h6_3:{ name:'Рыцари Изабель' , att:24, def:20, dmg:[20,35], hp:100, spd:8, int:12,shot:0, mana:0, spell:['Дописать'] },


    h7_1:{ name:'Ангелы' , att:27, def:27, dmg:[45,45], hp:180, spd:6, int:11,shot:0, mana:0, spell:['Дописать'] },
    h7_2:{ name:'Архангелы' , att:31, def:31, dmg:[50,50], hp:220, spd:8, int:11,shot:0, mana:0, spell:['Дописать'] },
    h7_3:{ name:'Серафим' , att:35, def:25, dmg:[25,75], hp:220, spd:8, int:11,shot:0, mana:0, spell:['Дописать'] },
    } ,  
    
dwarf:{
dw1_1:{ name:'Защитники гор' , att:1, def:4, dmg:[1,1], hp:7, spd:4, int:9,shot:0, mana:0, spell:[] },
dw1_2:{ name:'Воители' , att:1, def:5, dmg:[1,2], hp:12, spd:4, int:9,shot:0, mana:0, spell:[] },
dw1_3:{ name:'Горные стражи' , att:2, def:6, dmg:[1,3], hp:12, spd:4, int:8,shot:0, mana:0, spell:[] },

dw2_1:{ name:'Метатели копья' , att:4, def:4, dmg:[1,2], hp:9, spd:4, int:9,shot:0, mana:0, spell:[] },
dw2_2:{ name:'Мастера копья' , att:4, def:4, dmg:[2,3], hp:12, spd:4, int:9,shot:0, mana:0, spell:[] },
dw2_3:{ name:'Гарпунеры' , att:5, def:3, dmg:[2,5], hp:10, spd:4, int:9,shot:0, mana:0, spell:[] },  

dw3_1:{ name:'Наездники на медведях' , att:5, def:10, dmg:[4,5], hp:25, spd:6, int:10,shot:0, mana:0, spell:[] },
dw3_2:{ name:'Хозяева медведей' , att:6, def:14, dmg:[5,6], hp:30, spd:7, int:11,shot:0, mana:0, spell:[] },
dw3_3:{ name:'Северные наездники' , att:8, def:12, dmg:[5,6], hp:30, spd:7, int:11,shot:0, mana:0, spell:[] },  

dw4_1:{ name:'Костоломы' , att:6, def:6, dmg:[2,6], hp:20, spd:5, int:12,shot:0, mana:0, spell:['Дописать'] },
dw4_2:{ name:'Берсерки' , att:7, def:7, dmg:[3,8], hp:25, spd:5, int:12,shot:0, mana:0, spell:['Дописать'] },
dw4_3:{ name:'Воины Арката' , att:7, def:7, dmg:[3,7], hp:30, spd:5, int:11,shot:0, mana:0, spell:['Дописать'] },

dw5_1:{ name:'Жрецы Рун' , att:10, def:6, dmg:[12,15], hp:60, spd:3, int:8,shot:0, mana:0, spell:['Дописать'] },
dw5_2:{ name:'Жрецы Арката' , att:9, def:9, dmg:[14,17], hp:60, spd:2, int:10,shot:0, mana:0, spell:['Дописать'] },
dw5_3:{ name:'Жрецы Пламени' , att:10, def:9, dmg:[17,20], hp:65, spd:3, int:9,shot:0, mana:0, spell:['Дописать'] },

dw6_1:{ name:'Таны' , att:15, def:24, dmg:[8,12], hp:100, spd:8, int:11,shot:0, mana:0, spell:['Дописать'] },
dw6_2:{ name:'Ярлы' , att:15, def:24, dmg:[21,26], hp:120, spd:8, int:11,shot:0, mana:0, spell:['Дописать'] },
dw6_3:{ name:'Эрлы' , att:16, def:23, dmg:[9,13], hp:145, spd:8, int:10,shot:0, mana:0, spell:['Дописать'] },


dw7_1:{ name:'Огненные драконы' , att:25, def:32, dmg:[40,50], hp:230, spd:5, int:9,shot:0, mana:0, spell:['Дописать'] },
dw7_2:{ name:'Лавовые драконы' , att:30, def:40, dmg:[40,50], hp:280, spd:5, int:9,shot:0, mana:0, spell:['Дописать'] },
dw7_3:{ name:'Драконы Арката' , att:30, def:35, dmg:[44,55], hp:275, spd:5, int:9,shot:0, mana:0, spell:['Дописать'] },
}, 

orc:{
o1_1:{ name:'Гоблины' , att:1, def:1, dmg:[1,1], hp:3, spd:4, int:12,shot:0, mana:0, spell:[] },
o1_2:{ name:'Трапперы' , att:1, def:3, dmg:[1,1], hp:7, spd:4, int:10,shot:0, mana:0, spell:[] },
o1_3:{ name:'Колдуны гоблинов' , att:2, def:1, dmg:[1,2], hp:5, spd:5, int:9,shot:0, mana:0, spell:[] },

o2_1:{ name:'Кентавры' , att:3, def:1, dmg:[2,4], hp:6, spd:5, int:11,shot:0, mana:0, spell:[] },
o2_2:{ name:'Кочевые кентавры' , att:4, def:2, dmg:[3,6], hp:9, spd:5, int:10,shot:0, mana:0, spell:[] },
o2_3:{ name:'Боевые кентавры' , att:4, def:4, dmg:[3,5], hp:10, spd:6, int:10,shot:0, mana:0, spell:[] },  

o3_1:{ name:'Орочьи воины' , att:5, def:2, dmg:[2,5], hp:12, spd:4, int:10,shot:0, mana:0, spell:[] },
o3_2:{ name:'Орочьи бойцы' , att:6, def:4, dmg:[4,6], hp:12, spd:5, int:11,shot:0, mana:0, spell:[] },
o3_3:{ name:'Вармонгеры' , att:4, def:6, dmg:[3,5], hp:20, spd:4, int:9,shot:0, mana:0, spell:[] },  

o4_1:{ name:'Шаманки' , att:5, def:5, dmg:[6,9], hp:30, spd:5, int:11,shot:0, mana:0, spell:['Дописать'] },
o4_2:{ name:'Дочери неба' , att:7, def:9, dmg:[6,9], hp:35, spd:4, int:12,shot:0, mana:0, spell:['Дописать'] },
o4_3:{ name:'Дочери земли' , att:10, def:7, dmg:[7,11], hp:35, spd:5, int:12,shot:0, mana:0, spell:['Дописать'] },

o5_1:{ name:'Убийцы' , att:11, def:8, dmg:[7,10], hp:34, spd:6, int:11,shot:0, mana:0, spell:['Дописать'] },
o5_2:{ name:'Палачи' , att:14, def:10, dmg:[8,12], hp:40, spd:7, int:12,shot:0, mana:0, spell:['Дописать'] },
o5_3:{ name:'Вожаки' , att:13, def:15, dmg:[10,12], hp:48, spd:7, int:12,shot:0, mana:0, spell:['Дописать'] },

o6_1:{ name:'Виверны' , att:17, def:17, dmg:[15,25], hp:90, spd:6, int:10,shot:0, mana:0, spell:['Дописать'] },
o6_2:{ name:'Темные виверны' , att:21, def:18, dmg:[20,27], hp:105, spd:7, int:10,shot:0, mana:0, spell:['Дописать'] },
o6_3:{ name:'Паокаи' , att:19, def:19, dmg:[20,25], hp:120, spd:7, int:10,shot:0, mana:0, spell:['Дописать'] },


o7_1:{ name:'Циклопы' , att:29, def:27, dmg:[40,52], hp:220, spd:5, int:9,shot:0, mana:0, spell:['Дописать'] },
o7_2:{ name:'Свободные циклопы' , att:30, def:27, dmg:[45,57], hp:225, spd:5, int:9,shot:0, mana:0, spell:['Дописать'] },
o7_3:{ name:'Кровоглазые циклопы' , att:28, def:28, dmg:[35,50], hp:235, spd:6, int:10,shot:0, mana:0, spell:['Дописать'] },
},    

demon:{
d1_1:{ name:'Бесы' , att:2, def:1, dmg:[1,2], hp:4, spd:5, int:13,shot:0, mana:0, spell:[] },
d1_2:{ name:'Черти' , att:3, def:2, dmg:[2,3], hp:6, spd:5, int:13,shot:0, mana:0, spell:[] },
d1_3:{ name:'Дьяволята' , att:3, def:3, dmg:[1,4], hp:6, spd:6, int:13,shot:0, mana:0, spell:[] },

d2_1:{ name:'Демоны' , att:1, def:3, dmg:[1,2], hp:13, spd:5, int:7,shot:0, mana:0, spell:[] },
d2_2:{ name:'Огненные демоны' , att:3, def:4, dmg:[1,4], hp:13, spd:5, int:8,shot:0, mana:0, spell:[] },
d2_3:{ name:'Старшие демоны' , att:3, def:2, dmg:[1,4], hp:13, spd:4, int:8,shot:0, mana:0, spell:[] },  

d3_1:{ name:'Адские гончие' , att:4, def:3, dmg:[3,5], hp:15, spd:7, int:13,shot:0, mana:0, spell:[] },
d3_2:{ name:'Церберы' , att:4, def:2, dmg:[4,6], hp:15, spd:8, int:13,shot:0, mana:0, spell:[] },
d3_3:{ name:'Огненные гончие' , att:4, def:3, dmg:[3,5], hp:15, spd:8, int:13,shot:0, mana:0, spell:[] },  

d4_1:{ name:'Суккубы' , att:6, def:6, dmg:[6,13], hp:20, spd:4, int:10,shot:0, mana:0, spell:['Дописать'] },
d4_2:{ name:'Демонессы' , att:6, def:6, dmg:[6,13], hp:30, spd:4, int:10,shot:0, mana:0, spell:['Дописать'] },
d4_3:{ name:'Искусительницы' , att:6, def:6, dmg:[6,13], hp:32, spd:4, int:9,shot:0, mana:0, spell:['Дописать'] },

d5_1:{ name:'Адские жеребцы' , att:13, def:13, dmg:[8,16], hp:50, spd:7, int:16,shot:0, mana:0, spell:['Дописать'] },
d5_2:{ name:'Кошмары' , att:18, def:18, dmg:[8,16], hp:66, spd:8, int:16,shot:0, mana:0, spell:['Дописать'] },
d5_3:{ name:'Кони преисподней' , att:18, def:17, dmg:[8,17], hp:66, spd:8, int:15,shot:0, mana:0, spell:['Дописать'] },

d6_1:{ name:'Пещерные демоны' , att:21, def:21, dmg:[12,26], hp:110, spd:4, int:8,shot:0, mana:0, spell:['Дописать'] },
d6_2:{ name:'Пещерные владыки' , att:22, def:21, dmg:[13,31], hp:120, spd:4, int:6,shot:0, mana:0, spell:['Дописать'] },
d6_3:{ name:'Пещерные отродья' , att:27, def:23, dmg:[13,31], hp:140, spd:6, int:9,shot:0, mana:0, spell:['Дописать'] },


d7_1:{ name:'Дьяволы' , att:27, def:25, dmg:[36,66], hp:166, spd:7, int:11,shot:0, mana:0, spell:['Дописать'] },
d7_2:{ name:'Архидьяволы' , att:32, def:29, dmg:[36,66], hp:199, spd:7, int:11,shot:0, mana:0, spell:['Дописать'] },
d7_3:{ name:'Архидемоны' , att:32, def:31, dmg:[36,66], hp:211, spd:6, int:10,shot:0, mana:0, spell:['Дописать'] },
},

darkElf:{
de1_1:{ name:'Лазутчики' , att:3, def:3, dmg:[2,4], hp:10, spd:5, int:10,shot:0, mana:0, spell:[] },
de1_2:{ name:'Ассасины' , att:4, def:3, dmg:[2,4], hp:14, spd:5, int:12,shot:0, mana:0, spell:[] },
de1_3:{ name:'Ловчие' , att:5, def:4, dmg:[3,5], hp:15, spd:6, int:12,shot:0, mana:0, spell:[] },

de2_1:{ name:'Бестии' , att:4, def:2, dmg:[5,7], hp:16, spd:7, int:14,shot:0, mana:0, spell:[] },
de2_2:{ name:'Фурии' , att:5, def:3, dmg:[5,7], hp:16, spd:8, int:16,shot:0, mana:0, spell:[] },
de2_3:{ name:'Мегеры' , att:5, def:4, dmg:[3,8], hp:21, spd:8, int:14,shot:0, mana:0, spell:[] },  

de3_1:{ name:'Минотавры' , att:5, def:2, dmg:[4,7], hp:31, spd:5, int:8,shot:0, mana:0, spell:[] },
de3_2:{ name:'Минотавры-стражи' , att:5, def:2, dmg:[4,7], hp:35, spd:5, int:8,shot:0, mana:0, spell:[] },
de3_3:{ name:'Минотавры-надсмотрщики' , att:6, def:5, dmg:[5,8], hp:40, spd:5, int:9,shot:0, mana:0, spell:[] },  

de4_1:{ name:'Наездники на ящерах' , att:9, def:7, dmg:[7,12], hp:40, spd:6, int:11,shot:0, mana:0, spell:['Дописать'] },
de4_2:{ name:'Темные всадники' , att:10, def:9, dmg:[7,14], hp:60, spd:8, int:11,shot:0, mana:0, spell:['Дописать'] },
de4_3:{ name:'Проворные наездники' , att:12, def:9, dmg:[7,12], hp:60, spd:8, int:12,shot:0, mana:0, spell:['Дописать'] },

de5_1:{ name:'Гидры' , att:15, def:12, dmg:[7,14], hp:80, spd:5, int:7,shot:0, mana:0, spell:['Дописать'] },
de5_2:{ name:'Пещерные гидры' , att:15, def:15, dmg:[9,14], hp:125, spd:5, int:7,shot:0, mana:0, spell:['Дописать'] },
de5_3:{ name:'Темные гидры' , att:15, def:14, dmg:[9,12], hp:125, spd:5, int:8,shot:0, mana:0, spell:['Дописать'] },

de6_1:{ name:'Сумеречные ведьмы' , att:18, def:18, dmg:[17,24], hp:80, spd:4, int:10,shot:0, mana:0, spell:['Дописать'] },
de6_2:{ name:'Владычицы тени' , att:20, def:20, dmg:[17,27], hp:90, spd:4, int:10,shot:0, mana:0, spell:['Дописать'] },
de6_3:{ name:'Хозяйки ночи' , att:20, def:20, dmg:[20,30], hp:100, spd:5, int:11,shot:0, mana:0, spell:['Дописать'] },


de7_1:{ name:'Сумеречные драконы' , att:25, def:24, dmg:[45,70], hp:200, spd:9, int:10,shot:0, mana:0, spell:['Дописать'] },
de7_2:{ name:'Черные драконы' , att:30, def:30, dmg:[45,70], hp:240, spd:9, int:10,shot:0, mana:0, spell:['Дописать'] },
de7_3:{ name:'Красные драконы' , att:30, def:30, dmg:[45,60], hp:235, spd:9, int:11,shot:0, mana:0, spell:['Дописать'] },
},

necr:{
n1_1:{ name:'Костяные воины' , att:1, def:2, dmg:[1,1], hp:4, spd:4, int:10,shot:0, mana:0, spell:[] },
n1_2:{ name:'Костяные лучники' , att:1, def:3, dmg:[1,2], hp:5, spd:4, int:10,shot:0, mana:0, spell:[] },
n1_3:{ name:'Костяные воители' , att:2, def:6, dmg:[1,3], hp:5, spd:5, int:10,shot:0, mana:0, spell:[] },

n2_1:{ name:'Зомби' , att:1, def:2, dmg:[1,2], hp:17, spd:4, int:6,shot:0, mana:0, spell:[] },
n2_2:{ name:'Чумные зомби' , att:2, def:2, dmg:[2,3], hp:17, spd:4, int:7,shot:0, mana:0, spell:[] },
n2_3:{ name:'Гниющие зомби' , att:2, def:3, dmg:[1,3], hp:19, spd:4, int:7,shot:0, mana:0, spell:[] },  

n3_1:{ name:'Привидения' , att:5, def:4, dmg:[2,4], hp:16, spd:5, int:10,shot:0, mana:0, spell:[] },
n3_2:{ name:'Призраки' , att:5, def:4, dmg:[4,6], hp:19, spd:5, int:10,shot:0, mana:0, spell:[] },
n3_3:{ name:'Духи' , att:6, def:5, dmg:[4,4], hp:20, spd:6, int:9,shot:0, mana:0, spell:[] },  

n4_1:{ name:'Вампиры' , att:6, def:6, dmg:[6,8], hp:30, spd:6, int:11,shot:0, mana:0, spell:['Дописать'] },
n4_2:{ name:'Высшие вампиры' , att:9, def:9, dmg:[7,11], hp:35, spd:7, int:11,shot:0, mana:0, spell:['Дописать'] },
n4_3:{ name:'Князья вампиров' , att:9, def:9, dmg:[5,13], hp:40, spd:8, int:11,shot:0, mana:0, spell:['Дописать'] },

n5_1:{ name:'Личи' , att:15, def:15, dmg:[12,17], hp:50, spd:3, int:10,shot:0, mana:0, spell:['Дописать'] },
n5_2:{ name:'Архиличи' , att:19, def:19, dmg:[17,20], hp:55, spd:3, int:10,shot:0, mana:0, spell:['Дописать'] },
n5_3:{ name:'Высшие личи' , att:21, def:19, dmg:[17,21], hp:55, spd:4, int:10,shot:0, mana:0, spell:['Дописать'] },

n6_1:{ name:'Умертвия' , att:24, def:22, dmg:[21,25], hp:95, spd:6, int:11,shot:0, mana:0, spell:['Дописать'] },
n6_2:{ name:'Вестники смерти' , att:26, def:24, dmg:[25,30], hp:100, spd:6, int:11,shot:0, mana:0, spell:['Дописать'] },
n6_3:{ name:'Баньши' , att:23, def:23, dmg:[22,27], hp:110, spd:6, int:11,shot:0, mana:0, spell:['Дописать'] },

n7_1:{ name:'Костяные драконы' , att:29, def:27, dmg:[40,52], hp:150, spd:6, int:11,shot:0, mana:0, spell:['Дописать'] },
n7_2:{ name:'Призрачные драконы' , att:30, def:27, dmg:[45,57], hp:160, spd:7, int:11,shot:0, mana:0, spell:['Дописать'] },
n7_3:{ name:'Астральные драконы' , att:28, def:28, dmg:[35,50], hp:150, spd:7, int:11,shot:0, mana:0, spell:['Дописать'] },
},
}