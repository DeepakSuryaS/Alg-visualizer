async function selectionSort(delay) {
  let blocks = document.querySelectorAll(".block");

    // disable menu
    document.getElementById("changeSize").disabled = true;
    for (var i = 0; i < algoOptions.length; i++) {
      algoOptions[i].className += " disableClick";
    }

    // reset results section
    document.getElementById("result").innerHTML = '';
    let result = document.getElementById("result");
    let res = document.createElement('h3');

      // check array is sorted or not
      var arr = [];
      for(i=0;i<blocks.length;i++){
        arr.push(Number(blocks[i].childNodes[0].innerHTML));
      }
      const isSorted = arr.slice(1).every((item, i) => arr[i] <= item);

      if(isSorted){

          res.innerHTML = 'Array is already Sorted!!!';
          result.appendChild(res);
          
          // enable menu
          for (var k = 0; k < algoOptions.length; k++) {
            algoOptions[k].className = algoOptions[k].className.replace("disableClick","");
          }
          var current = document.getElementsByClassName("highlight");
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" highlight", "");
          }
          document.getElementById("changeSize").disabled = false;

      } else {

              res.innerHTML = 'Selection Sort Started...';
              result.appendChild(res);

              var start = performance.now();
              for (let i = 0; i < blocks.length - 1; i += 1) {
                  let min_idx=i;
                for (let j = i+1; j < blocks.length; j += 1) {
                  blocks[j].style.backgroundColor = "#FF4949";
                  blocks[min_idx].style.backgroundColor = "#FF4949";
            
                  await new Promise(resolve =>
                    setTimeout(() => {
                      resolve();
                    }, delay/2)
                  );
            
                  const value1 = Number(blocks[j].childNodes[0].innerHTML);
                  const value2 = Number(blocks[min_idx].childNodes[0].innerHTML);
            
                  if (value1 < value2) {
                    min_idx = j;
                  }
            
                  blocks[j].style.backgroundColor = "rebeccapurple";
                  blocks[min_idx].style.backgroundColor = "rebeccapurple";
                }
                    await swap(blocks[i], blocks[min_idx]);
                    blocks = document.querySelectorAll(".block");
            
                blocks[i].style.backgroundColor = "#ffd700";
              }
              blocks[blocks.length-1].style.backgroundColor = "#ffd700";
              res.innerHTML = res.innerHTML + ` Sorting Complete!!`;
              var end = performance.now();
              let time = document.createElement('p');
              time.innerHTML = `Time taken: ${((end-start)/1000).toFixed(4)} Sec `;
              res.appendChild(time);

              // enable menu and remove highlight
              for (k = 0; k < algoOptions.length; k++) {
                algoOptions[k].className = algoOptions[k].className.replace("disableClick","");
              }
              current = document.getElementsByClassName("highlight");
              if (current.length > 0) {
                current[0].className = current[0].className.replace(" highlight", "");
              }
              document.getElementById("changeSize").disabled = false;

    }
  }