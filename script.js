// Good Luck 💪🏾
function ZeroAndOne(arr) {
    return arr
      .map(item => {
        if (item === 'Zero') return '0';
        if (item === 'One') return '1';
        return ''; // Ignore other values
      })
      .join('');
  }
  

  console.log(ZeroAndOne(["one", "Zero", "Zero", "One"])); // "001"
  console.log(ZeroAndOne(["Zero", "ONE", "one", "Zero"])); // "00"
  