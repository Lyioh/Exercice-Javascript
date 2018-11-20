
/////////////////////////////////// Sans le fetch - The OLD Way  ///////////////////////////////////
/* const listOfArtist = document.querySelector("#artist-list")

function request(callback, theInput) {
    let xhr = new XMLHttpRequest;

    xhr.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(xhr.responseText, theInput);
        } else if (this.status === 403) {
            alert("ERROR!!!");
        } else if (this.status === 404) {
            alert("FORBIDDEN!!!");
        }
    }
    xhr.open('POST', 'https://musicdemons.com/api/v1/artist/autocomplete', true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`name=${theInput}`);
}

function theData(data, myInput) {
    let objReceived = new Object;
    objReceived = JSON.parse(data);
    console.log(JSON.parse(data)); 
    if (myInput !== "") {
        for (let myKey in objReceived) {
                let listItem = document.createElement("li");
                let itemName = document.createTextNode(objReceived[myKey].name);
                listItem.appendChild(itemName);
                listOfArtist.appendChild(listItem);
            }
        }
    }



document.querySelector("#music-search").addEventListener("keyup", function inputisOn(event) {
    while (listOfArtist.hasChildNodes()) {
        listOfArtist.removeChild(listOfArtist.firstChild);
    }
    request(theData, event.target.value);
})
 */
//////////////////////////////////////// Avec le fetch /////////////////////////////////////////
const listOfArtist = document.querySelector("#artist-list");
const listOfVideo = document.querySelector("#songs");

function clearList() {
    while (listOfArtist.hasChildNodes()) {
        listOfArtist.removeChild(listOfArtist.firstChild);
    }
}

function createArtistList(myJsonData, myInput) {
    if (myInput !== "") {
        for (let key in myJsonData) {
            let listItem = document.createElement("li");
            listItem.setAttribute("id", myJsonData[key].id)
            let itemName = document.createTextNode(myJsonData[key].name);
            listItem.appendChild(itemName);
            listOfArtist.appendChild(listItem);
        }
    }
}

function search(value) {
    const url = `https://musicdemons.com/api/v1/artist/autocomplete`;
    let init = {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `name=${value}`
    };

    fetch(url, init)
        .then(response => {
            if (response.ok) {
                response.json()
                    .then(jsonData => createArtistList(jsonData, value))
            } else {
                console.log('Network request for products.json failed with response ' +
                    response.status + ': ' + response.statusText);
            }
        })
};

function createVideoList(theData) {
    console.log(theData);
    for (let key in theData) {
        let theTitle = document.createElement("h3");
        let videoFrame = document.createElement("iframe");
        let itemList = document.createElement("li");

        videoFrame.setAttribute("style", "width: 640px; height: 360px;");
        videoFrame.setAttribute("src", "https://www.youtube.com/embed/" + theData[key].youtube_id);
        theTitle.innerHTML = theData[key].title;

        itemList.appendChild(theTitle);
        itemList.appendChild(videoFrame);
        listOfVideo.appendChild(itemList) ;  

    }
}

function musicChosen(artist) {
    const url = `https://musicdemons.com/api/v1/artist/${artist}/songs`;
    let init = {
        method: 'GET',
    };

    fetch(url, init)
        .then(response => {
            if (response.ok) {
                response.json()
                    /* .then(jsonData => console.log(jsonData)) */
                    .then(data => createVideoList(data))
            } else {
                console.log('Network request failed with response ' +
                    response.status + ': ' + response.statusText);
            }
        })
};

document.querySelector("#music-search").addEventListener("keyup", function inputisOn(event) {
    clearList();
    search(event.target.value);
});

document.querySelector("#artist-list").addEventListener("click", function itemClicked(event) {
    let artistID = document.querySelector("#artist-list > li").getAttribute("id");
    document.querySelector("#music-search").value = event.target.textContent;
    musicChosen(artistID);
    clearList();
});