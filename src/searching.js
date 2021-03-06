var searchInput = document.getElementById("search");
var searchInputValue = -1;

searchInput.addEventListener("input",function(){
    searchInputValue = this.value;
})

  async function linearSearch(num){
    if(num == -1){
      searchInput.style.border = '1px solid red';
      var current = document.getElementsByClassName("highlight");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" highlight", "");
      }
      return;
    }
    searchInput.style.border = '';

    let blocks = document.querySelectorAll(".block");

    // reset result section
    document.getElementById("result").innerHTML = '';
    let result = document.getElementById("result");
    let res = document.createElement('h3');


    res.innerHTML = 'Linear Search Started...';
    result.appendChild(res);
    
    var foundIndex = -1;
    for (var i = 0; i < algoOptions.length; i++) {
      algoOptions[i].className += " disableClick";
    }
    
    var start = performance.now();
    for (let i = 0; i < blocks.length - 1; i += 1) {
        blocks[i].style.backgroundColor = "#FF4949";
        var value = Number(blocks[i].childNodes[0].innerHTML);
        await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, 250)
          );
        if(value == num){
            foundIndex = i;
            blocks[i].style.backgroundColor = "#ffd700";
            break;
        }
        blocks[i].style.backgroundColor = "rebeccapurple";
    }
    var end = performance.now();
    let time = document.createElement('p');
    
    if(foundIndex != -1)
      time.innerHTML = `Element found at index ${foundIndex} <br> Time taken: ${(end-start)/1000} Sec`;
    else
      time.innerHTML = `Element not found`;
    
    res.appendChild(time);
    current = document.getElementsByClassName("highlight");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" highlight", "");
    }
    for (var k = 0; k < algoOptions.length; k++) {
      algoOptions[k].className = algoOptions[k].className.replace("disableClick","");
    }
    document.getElementById("changeSize").disabled = false;
  }

  async function binarySearch(num){

    if(num == -1){
      searchInput.style.border = '1px solid red';
      var current = document.getElementsByClassName("highlight");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" highlight", "");
      }
      return;
    }
    searchInput.style.border = '';


    await quickSort(1);
    let blocks = document.querySelectorAll(".block");
    blocks.forEach(function(el,index){
        blocks[index].style.backgroundColor = "rebeccapurple";
    })
    for (var i = 0; i < algoOptions.length; i++) {
      algoOptions[i].className += " disableClick";
    }

    let result = document.getElementById("result");
    let res = document.createElement('h3');
    res.innerHTML = 'Binary Search Started...';
    result.appendChild(res);
    var foundIndex = -1;
    var start = performance.now();

        var l=0;
        var r = blocks.length-1;
        while (l <= r) {
            blocks[l].style.backgroundColor = "#FF4949";
            blocks[r].style.backgroundColor = "#FF4949";
            var m = Math.floor(l + (r - l) / 2); 
            await new Promise(resolve =>
                setTimeout(() => {
                  resolve();
                }, 250)
              );
            if (Number(blocks[m].childNodes[0].innerHTML) == num) {
                blocks[m].style.backgroundColor = "#ffd700";
                foundIndex = m;
                if(m==l && m!=r) blocks[r].style.backgroundColor = "rebeccapurple";
                if(m==r && m!=l) blocks[l].style.backgroundColor = "rebeccapurple"; 
                if(m!=r && m!=l){
                    blocks[r].style.backgroundColor = "rebeccapurple";
                    blocks[l].style.backgroundColor = "rebeccapurple";
                }
                break;
            }
            if (Number(blocks[m].childNodes[0].innerHTML) < num){
                blocks[l].style.backgroundColor = "rebeccapurple";
                l = m + 1;
            } 
            else{
                blocks[r].style.backgroundColor = "rebeccapurple";
                r = m - 1;
            }
        }
        var end = performance.now();
    let time = document.createElement('p');

    if(foundIndex != -1)
      time.innerHTML = `Element found at index ${foundIndex} <br> Time taken: ${((end-start)/1000).toFixed(4)} Sec`;
    else
      time.innerHTML = `Element not found`;
    
    res.appendChild(time);
    current = document.getElementsByClassName("highlight");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" highlight", "");
    }
    for (var k = 0; k < algoOptions.length; k++) {
      algoOptions[k].className = algoOptions[k].className.replace("disableClick","");
    }
    document.getElementById("changeSize").disabled = false;     
  }