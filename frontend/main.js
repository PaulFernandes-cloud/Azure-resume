window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionapiURL='https://getresumecounterpaul.azurewebsites.net/api/GetResumeCounter?code=NL5DESnogKgkmuA7KSkkE-RczdFG0EOcxwSZDZAZM0DJAzFum49e1g==';

const functionapi='http://localhost:7071/api/GetResumeCounter';

const getVisitCount=()=>{
    let count=30;
    fetch(functionapiURL).then(response=> {
        return response.json()
    }).then(response=> {
        console.log("Website called function API.");
        count=response.count;
        document.getElementById("counter").innerText=count;
    }).catch(function(error) {
        console.log(error);
    });
}


