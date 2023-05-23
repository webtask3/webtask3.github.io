const url = 'https://www.coursehubiitg.in/api/codingweek/contributions';
const myReq = new Request(url);
let globalData;
let ranker =[1,2,3];
let ranker_pos = ["first", "second", "third"];

const above = document.querySelector("#topper"); //top sections
const bottom = document.querySelector("#common"); //lower section

fetch(url)
    .then((response) => response.json())

    //save in global var
    .then(Jsonform => {

     globalData = Jsonform;

    })

    //sort data according to points reverse order
    .then(() => {
        globalData.sort(function(a ,b){
            return b.points - a.points;
        });
    })

    //DOM traversal create new div for every element
    .then(() => {
        rank(globalData);
    })
    .catch(error => console.error)





function rank (globaldata) {
    // put values into rankings
    let idx = 1;
    globalData.forEach(row => {
    
        if(idx === 1 || idx === 2 || idx === 3){
            
            const t = document.createElement('div');

            t.setAttribute('id', ranker_pos[idx-1]);
            t.className = "rankers";

            insVal(t, globalData, idx-1);
            //add div to top div
            above.appendChild(t);
        }

        else{

            const t = document.createElement('div');
            t.className = "commoners";
            t.style.order = idx-3;

            insVal(t, globalData, idx-1);
            //add div to lower div
            bottom.appendChild(t);
        }

        idx=idx+1;
    })
    
}


function insVal (x, globaldata, i){
    //four values for each cell

    const r = document.createElement("p"); //stores rank
    const im = document.createElement("img");
    const pt = document.createElement("p"); //stores points
    const naam = document.createElement("h2");

    r.textContent = i+1;
    r.className = "number";

    naam.textContent = globaldata[i].name;
    pt.textContent = globaldata[i].points;
    pt.className = "pts";
    
    im.setAttribute('src', globaldata[i].avatar);

    x.appendChild(r);
    x.appendChild(im);
    x.appendChild(naam);
    x.appendChild(pt);

}

//search in array
function inArray(needle, haystack){
    var count = haystack.length;

    for(var i=0; i < count; i++){
        if(haystack[i] === needle){
            {return true;}
        }
        return false;
    }
}