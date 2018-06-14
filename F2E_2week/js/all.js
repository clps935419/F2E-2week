var place= document.querySelector('#place');
var list= document.querySelector('.list');
var title=document.querySelector('.title');
var butValue=document.querySelector('.butValue');
var xhr=new XMLHttpRequest();
//0是產生需求，但是還沒連結資料
//1用了OPEN但是還沒把資料傳過去
//3是在loading
//4你撈到資料了
xhr.open('get',
'http://opendata2.epa.gov.tw/UV/UV.json'
,true);
xhr.send(null);
xhr.onload=function(){
    if(xhr.status==200){
    // update(e);
    console.log('aaa')
    }else{
        console.log('data erro')
    }
    
}
function update(e){
    
    var select=e.target.value;
    // console.log(select);
    var text='';
    var str=JSON.parse(xhr.responseText);
    var count=0;
    for(var i=0;i<str.length;i++){
        if(select==str[i].County){
            var cont='<li class="liCont"><div class="imgLi"></div><h2>'+str[i].County+'-'+str[i].SiteName+'觀測站</h2><br><p>環保署和中央氣象局設於全國紫外線測站每小時發布之紫外線監測資料（環保署及中央氣象局資料已整合成1個檔）</p><br><div class="text"><span><i class="fas fa-calendar-alt"></i> '+str[i].PublishTime+'</span><span> <i class="fas fa-sun"></i> 紫外線'+str[i].UVI+'</span><span> 經度:'+str[i].WGS84Lon+'</span><span> 緯度:'+str[i].WGS84Lat+'</span></div></li>';
            // console.log(str[i].SiteName);
            // console.log(str[i].SiteName);
            text+=cont;
            var newdata=[];
            newdata.push(str[i]);
            count++;
            
        }
        title.innerHTML='結果總共有<em>'+count+'</em>筆';
        console.log(count);
        list.innerHTML=text;
        
    }
    // console.log('a');

}
function update2(){
    var textValue=document.querySelector('textValue');
    var text='';
    var str=JSON.parse(xhr.responseText);
    var count=0;
    for(var i=0;i<str.length;i++){
        if(textValue>=str[i].UVI){
            var cont='<li class="liCont"><div class="imgLi"></div><h2>'+str[i].County+'-'+str[i].SiteName+'觀測站</h2><br><p>環保署和中央氣象局設於全國紫外線測站每小時發布之紫外線監測資料（環保署及中央氣象局資料已整合成1個檔）</p><br><div class="text"><span><i class="fas fa-calendar-alt"></i> '+str[i].PublishTime+'</span><span> <i class="fas fa-sun"></i> 紫外線'+str[i].UVI+'</span><span> 經度:'+str[i].WGS84Lon+'</span><span> 緯度:'+str[i].WGS84Lat+'</span></div></li>';
            // console.log(str[i].SiteName);
            // console.log(str[i].SiteName);
            text+=cont;
            var newdata=[];
            newdata.push(str[i]);
            count++;
            
        }
        title.innerHTML='結果總共有<em>'+count+'</em>筆';
        console.log(count);
        list.innerHTML=text;
    }
}   
place.addEventListener('change',update,false);
butValue.addEventListener('click',update2,false);