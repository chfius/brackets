module.exports = function check(str, bracketsConfig) {

    let brCnfg = bracketsConfig.map((s) => s.join(""));
  
    for (let i = 0; i < brCnfg.length; i++) {
      if (str.includes(brCnfg[i])) {
        str = str.replace(brCnfg[i], "");
        i = -1;
      }
    }
      
    if (str == '') {
      return true;
    } else {
      return false; 
    }
  }
