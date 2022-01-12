 const shop = {
                 name:'alia express',
               profit:15000,
                 address:'tang road',
                 products:['laptoop','computer','ICT',],
                 owener: {
                      name: 'alia batte',
                      age:50,
                      profession: 'web devoloper' 
                 },
              empoloy:50,
 };

 const shopStringifyed = JSON.stringify(shop);
 const converted = JSON.parse(shopStringifyed);
 console.log(converted);
 console.log(shopStringifyed);
