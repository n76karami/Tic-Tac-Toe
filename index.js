const parent = document.getElementById("parent");
const message = document.getElementById("message")

const arr = [
  {
    text:'',
    isClicked : false
  },
  {
    text:'',
    isClicked : false
  },
  {
    text:'',
    isClicked : false
  },
  {
    text:'',
    isClicked : false
  },
  {
    text:'',
    isClicked : false
  },
  {
    text:'',
    isClicked : false
  },
  {
    text:'',
    isClicked : false
  },
  {
    text:'',
    isClicked : false
  },
  {
    text:'',
    isClicked : false
  }
];

function updateUI() {
  let result = "";
  arr.forEach((item , index) => {
    result += `<div class="child ${item.isClicked ? 'disable' : ''}" onclick="display(${index})">${item.text}</div>`;

  });
  parent.innerHTML = result;
}
updateUI();

let count = 0;
let not_empty = false;
let flag_end = false;

const display = (index) => {

  console.log(flag_end);
  // console.log(arr)

  let x = null;

  if (!flag_end) {

    disable_click(index);

    count = count + 1;

    if (count % 2 == 0) {
      x = "&#9711;";
      arr[index].text = "&#9711;";
    } else {
      x = "&#x2715;";
      arr[index].text = "&#x2715;";
    }

    updateUI();

    check_winner(x);
    
  }

}

const disable_click = (index) => {
  
  arr[index].isClicked = true;

  updateUI();

}

const check_winner = (x) => {

  console.log(x)
  
  if (
    (arr[0].text == x && arr[1].text == x && arr[1].text == x && arr[2].text == x) || // row 1
    (arr[3].text == x && arr[4].text == x && arr[4].text == x && arr[5].text == x) || // row 2
    (arr[6].text == x && arr[7].text == x && arr[7].text == x && arr[8].text == x) || // row 3
    (arr[2].text == x && arr[5].text == x && arr[5].text == x && arr[8].text == x) || // col 3
    (arr[1].text == x && arr[4].text == x && arr[4].text == x && arr[7].text == x) || // col 2
    (arr[0].text == x && arr[3].text == x && arr[3].text == x && arr[6].text == x) || // col 1
    (arr[0].text == x && arr[4].text == x && arr[4].text == x && arr[8].text == x) || // gotr 1
    (arr[2].text == x && arr[4].text == x && arr[4].text == x && arr[6].text == x)    // gotr 2
  ) {
  
    flag_end = true;
    message.innerHTML = `player ${x} is winner <button class="reset" onclick="reset()">Reset</button>`;

  }
  // if ((arr[0].text == "&#9711;" && arr[1].text == "&#9711;" && arr[1].text == "&#9711;" && arr[2].text == "&#9711;") || // row 1
  //   (arr[3].text == "&#9711;" && arr[4].text == "&#9711;" && arr[4].text == "&#9711;" && arr[5].text == "&#9711;") || // row 2
  //   (arr[6].text == "&#9711;" && arr[7].text == "&#9711;" && arr[7].text == "&#9711;" && arr[8].text == "&#9711;") || // row 3
  //   (arr[2].text == "&#9711;" && arr[5].text == "&#9711;" && arr[5].text == "&#9711;" && arr[8].text == "&#9711;") || // col 3
  //   (arr[1].text == "&#9711;" && arr[4].text == "&#9711;" && arr[4].text == "&#9711;" && arr[7].text == "&#9711;") || // col 2
  //   (arr[0].text == "&#9711;" && arr[3].text == "&#9711;" && arr[3].text == "&#9711;" && arr[6].text == "&#9711;") || // col 1
  //   (arr[0].text == "&#9711;" && arr[4].text == "&#9711;" && arr[4].text == "&#9711;" && arr[8].text == "&#9711;") || // gotr 1
  //   (arr[2].text == "&#9711;" && arr[4].text == "&#9711;" && arr[4].text == "&#9711;" && arr[6].text == "&#9711;")    // gotr 2
  // ) {
  //   flag_end = true;
  //   message.innerHTML = "player 2 is winner";
  // }

  else {
    not_empty = arr.every((item) => item.text != "");

    if (not_empty) {
      flag_end = true;
      message.innerHTML = `draw <button class="reset" onclick="reset()">Reset</button>`;
    }
  }
}

const reset = () => {

  arr.forEach((item, index) => {
    arr[index].text = '';
    arr[index].isClicked = false;
  })

  flag_end = false;
  message.innerHTML = "";

  updateUI();

}

