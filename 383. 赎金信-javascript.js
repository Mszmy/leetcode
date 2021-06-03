var canConstruct = function(ransomNote, magazine) {
   for(var i=0; i<ransomNote.length;i++){
       var index = magazine.indexOf(ransomNote[i])
       if(index ==-1)return false
       magazine = magazine.substring(0,index) + magazine.substring(index+1,magazine.length)
   }
   return true;
    
};
