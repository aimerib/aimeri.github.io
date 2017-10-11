function cssGridPixelArt(url){
    loadIconsFromServer(url, drawCanvas);
}


function loadIconsFromServer(url, callDrawCanvas){

    const getPixelArtObjectRequest = new XMLHttpRequest();

    getPixelArtObjectRequest.open('GET', url, true);
    getPixelArtObjectRequest.send();
    getPixelArtObjectRequest.onreadystatechange = function(){
    
        if (this.readyState == 4 && this.status == 200) {
      
            callDrawCanvas(getPixelArtObjectRequest.responseText);

        }

    };
}



function drawCanvas(loadIconsFromServerResponse) {

    let imgPixel = JSON.parse(loadIconsFromServerResponse);
    let i = imgPixel.length;

    while (i--){
        styleCanvas(imgPixel[i].name, imgPixel[i].iconHeight, imgPixel[i].iconWidth);
        drawIcon(imgPixel[i].name, imgPixel[i].iconHeight, imgPixel[i].iconWidth, imgPixel[i].pixelMap);
    }

}




function styleCanvas(className, canvasHeight, canvasWidth) {
    const canvasStyleSizePosition = 'height:20vh; width:20vh; margin:0 auto;';
    const canvasStyleDisplay = 'display:grid;'; 
    const canvasStyleGridColumns = 'grid-template-columns:repeat(' + canvasHeight + ', 1fr);';
    const canvasStyleGridRows = 'grid-template-rows:repeat(' + canvasWidth + ', 1fr)';
    const canvasStyle = canvasStyleSizePosition + canvasStyleDisplay + canvasStyleGridColumns + canvasStyleGridRows;
    const canvasObjects = document.getElementsByClassName(className);


    for (let i = 0; i < canvasObjects.length; i++){
        canvasObjects[i].setAttribute('style', canvasStyle);
    }
  
}




function drawIcon(className, row, column, pixelOn) {

    const gridDivStyle = [];
    const iconNameCount = document.getElementsByClassName(className);
    
    for (let i = 0; i < row; i++) {
    
        gridDivStyle.push([]); //initializes array rows

        for (let j = 0; j < column; j++) {

            gridDivStyle[i][j] = 'col-' + i + '-row-' + j;

            for (let k=0; k < iconNameCount.length; k++){
                const gridDiv = document.createElement('div');
                const iconName = document.getElementsByClassName(className);

                gridDiv.className = gridDivStyle[i][j];
                iconName[k].appendChild(gridDiv);

                if (pixelOn[i][j]) { 

                    const pixelOnClass = 'col-' + i + '-row-' + j;
                    const pixelOnObject = document.getElementsByClassName(pixelOnClass);
                    const pixelOnStyle = 'background-color:limegreen;';

                    for (let l = 0; l < pixelOnObject.length; l++){
                        pixelOnObject[l].setAttribute('style', pixelOnStyle);
                    }
  
                }

            }

      
      
        }


    }

}