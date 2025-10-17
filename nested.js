const collage = {
    name:'Bgc',
    student: 4000,
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'white',
        result:{
            gpa: 5,
            merit: 'top'
        }
    }
}
collage.events[1]= '16 dec'
collage.unique.result.merit = 'top top top most'
const keys = Object.keys(collage)
const values = Object.values(collage)
delete collage.events;
console.log(collage);
