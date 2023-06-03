/* 
INPUT : string, length
OUTPUT : string (modeified)

IF length of string > length
    MODEFY
ELSE
    RETURN original str
*/

function truncate(str, length) {

    if(str.length > length) {

        // length - 1 เพราะ length เริ่มจาก 1, 2... จึงต้อง -1
        let modifyString = str.slice(0, length - 1) + "..."
         // HelloMyFriend.slice(0,4)
         return modifyString
    } else {
        return str
    }
}

console.log(truncate("HelloMyFriend",5))