function sortScores(unorderedScores, highestPossibleScore) {
    // if no unorderedScores, return [];
    // Array of 0s at indices 0..highestPossibleScore
    const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
    // 00000000000000000000000000...
    //Populated scoreCounts with count of scores
    for (let s = 0; s < unorderedScores.length; s++){
      scoreCounts[unorderedScores[s]]++;
    }
    // console.log(scoreCounts);
    // create array to hold ordered values
    ordered = [];
    // iterate through scoreCounts and push index to new array per the count
    for (let c = highestPossibleScore; c >= 0; c--){
      const count = scoreCounts[c];
        for (time = count; time > 0 ; time--){
          ordered.push(c);
        }
    }
     return ordered;
  }