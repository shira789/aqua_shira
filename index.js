import record from './record.json' assert {type: 'json'};

const searchKey = "querySource";
const searchValue = "Live";

const findKeyValues = (key, values) => {
    let fieldsCounter = 0;

    record.forEach((query) => {         
        Object.keys(query).forEach((obj) => {
       
            Object.keys(query[obj]).forEach((field) => {
                if (field == key &&
                    query[obj][field] == values) {
                    ++fieldsCounter
                }
            });
        });
    });
    
    return fieldsCounter;
};


const total = findKeyValues(searchKey, searchValue);

console.log(`--------------
there are ${total} total fields
named ${searchKey},
with the value ${searchValue}
-----------`);