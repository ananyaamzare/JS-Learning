


function dayOfweek(day) {
    if (day == 1) {
        console.log(`${day} - Monday`);
    }
    if (day == 2) {
        console.log(`${day} - Tuesday`);
    }
    if (day == 3) {
        console.log(`${day} - Wednesday `);
    }
    if (day == 4) {
        console.log(`${day} - Thursday`);
    }
    if (day == 5) {
        console.log(`${day} - Friday`);
    }
    if (day == 6) {
        console.log(`${day} - Saturday`);
    }
    if (day == 7) {
        console.log(`${day} - Sunday`);
    }

}
dayOfweek(7);
dayOfweek(5);
// dayOfweek(8);
// dayOfweek(9);
// dayOfweek(100);
// dayOfweek(null);
// dayOfweek(undefined);
// dayOfweek("AA");

//switch cases

console.log(`------------------------------------------------`);

function dayOfweek(day) {
    switch (day) {
        case 1:
            console.log(`${day} - Monday`);
            console.log(` Monday is start of the week`);
            
            break;
        case 2:
            console.log(`${day} - tuesday`);
            break;
        case 3:
            console.log(`${day} - Wednesday`);
            break;
        case 4:
            console.log(`${day} - Thursday`);
            break;
        case 5:
            console.log(`${day} - Fri`);
            break;
        case 6:
            console.log(`${day} - Sat`);
            break;
        case 7:
            console.log(`${day} - Sunday`);
            break;
        default:
            console.log(`Invalid input`);
            console.log(`please provide valid data`);
            
            break;
    }
    console.log(`End of the switch case..`);
}
dayOfweek(7);
dayOfweek(5);
dayOfweek(8);
dayOfweek(100);
dayOfweek(null);
dayOfweek(undefined);
dayOfweek("AA");













