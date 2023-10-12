let year = 2023;
let month = 10;
let Day = 12;
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
let day = new Date(year, month, Day);
let DATE = document.getElementById('month');
    let YEAR = document.getElementById('year');
    YEAR.textContent = year;
    DATE.textContent = months[month];
let event_data = '';
const nextDate = () => {
    month = (month + 1) % 12;
    if (month === 0) {
        month = 12;
        year++;
    }
    day = new Date(year, month, Day);

    console.log(month);
    console.log(day)
    YEAR.textContent = year;
    if(month===12){
        month=0;
        DATE.textContent = months[0];
    }
    else{
        DATE.textContent = months[month];

    }

    grid();
}

const prevDate = () => {
    month = (month - 1 + 12) % 12; 
    if (month === 0) {
        month = 12;
        year--;
    }
    day = new Date(year, month, Day);

    if(month===12){
        month=0;
        DATE.textContent = months[0];
    }
    else{
        DATE.textContent = months[month];

    }
    YEAR.textContent = year;
    DATE.textContent = months[month];
    
    day = new Date(year, month, Day);

    console.log(day);

    grid();
}

const slots = document.getElementById('slots');
let grid_index = 0;
let grid_arr = [];
const grid = () => {
    slots.innerHTML = ''; 
    day = new Date(year, month, 1);
    const index = day.getDay();
    grid_index = (index + 1) % 7; 
    for (let x = 1; x < 33; x++) {
        day = new Date(year, month, x);
        grid_arr.push(day);

        if (day.getMonth() === month) {
            const newDiv = document.createElement('div');
            newDiv.id = `div${x}`;
            newDiv.className='new-div'
            newDiv.textContent = x;
            newDiv.addEventListener('click',function(){
                const Event = document.getElementById('event')
                const newInput = document.createElement('input');
                const newbtn = document.createElement('button');
                newbtn.textContent = 'Add'
                while (Event.firstChild) {
                    Event.removeChild(Event.firstChild);
                }
                    
                    Event.appendChild(newInput);
                    Event.appendChild(newbtn);
                
                newbtn.addEventListener('click',function(){
                    event_data = newInput.value;
                    console.log(event_data);
                    newDiv.innerHTML+=`<span>${event_data}</span>`
                    Event.removeChild(newbtn);
                    Event.removeChild(newInput);
                })
                
            })
            const gridColumn = ((grid_index-1 + x - 1) % 7 + 1);
            const gridRow = (Math.floor((grid_index-1 + x - 1) / 7) + 1);
            
            newDiv.style.gridColumnStart = gridColumn;
            newDiv.style.gridRowStart = gridRow;
            
            slots.appendChild(newDiv);
        }
    }
}



grid();
