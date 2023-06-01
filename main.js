let arr =[1,2,45,678,890]

function countDigits(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += ('' + arr[i]).length;
    }
    return count;
  }

  document.write(countDigits(arr))