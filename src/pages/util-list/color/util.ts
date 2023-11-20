export function RgbToHex(value: string) {
    //十六进制颜色值的正则表达式
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  
    if (/^(rgb|RGB)/.test(value)) {
        const aColor = value.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        let strHex = "#";

        for (let i=0; i<aColor.length; i++) {
            let hex = Number(aColor[i]).toString(16);
            if (hex.length < 2) {
                hex = '0' + hex;    
            }
            strHex += hex;
        }

        if (strHex.length !== 7) {
            strHex = value;    
        }

        return strHex;
    } else if (reg.test(value)) {
        const aNum = value.replace(/#/,"").split("");

        if (aNum.length === 6) {
            return value;    
        } else if(aNum.length === 3) {
            let numHex = "#";

            for (var i=0; i<aNum.length; i+=1) {
                numHex += (aNum[i] + aNum[i]);
            }

            return numHex;
        }
    }
    return value;
}

export function HexToRgb(value: string) {
  let sColor = value.toLowerCase();
  //十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";

      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i+1));    
      }

      sColor = sColorNew;
    }
    //处理六位的颜色值
    const sColorChange = [];

    for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x"+sColor.slice(i, i + 2)));    
    }

    return "RGB(" + sColorChange.join(", ") + ")";
  }

  return sColor;
}