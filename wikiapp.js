/*MediaWiki API Demos
    Demo of `Opensearch` module: Search the wiki and obtain
	results in an OpenSearch (http://www.opensearch.org) format
    MIT License
*/

let query = document.querySelector('input').value;

setup();

function setup(){
    //getWikiApi()
    document.getElementById('query').addEventListener('keypress', (e)=>{
        let userInput = document.getElementById('query').value;
        if(e.keyCode == 13){
            //console.log(userInput);
            let url = 'https://en.wikipedia.org/w/api.php';
            let params = {
                action: "opensearch",
                search: userInput,
                limit: "5",
                namespace: "0",
                format: "json"
            };
            url += '?origin=*';
            Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
            fetch(url)
            .then(function(response){return response.json();})
            .then(function(response) {
                console.log(response);
                let linkArray = response[3];
                linkArray.forEach((link) =>{
                    let tag = document.body.appendChild('a');
                    tag.nodeValue = link;
                })
                console.log(linkArray);
            })
            .catch(function(error){console.log(error);});
        } 
           
    });


    /*
    function getWikiApi(){
        let userInput = document.getElementById('query').value;
        let url = 'https://en.wikipedia.org/w/api.php';
        let params = {
            action: "opensearch",
            search: userInput,
            limit: "5",
            namespace: "0",
            format: "json"
        };
        url += '?origin=*';
        Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
        fetch(url)
        .then(function(response){return response.json();})
        .then(function(response) {console.log(response);})
        .catch(function(error){console.log(error);});

    } */
    
} 