function flattenarr(parr){
let narr=[];
for(let i=0;i<parr.length;i++){
if(Array.isArray(parr[i])){
	narr=[...narr,...flattenarr(parr[i])];
}
else{
narr.push(parr[i]);
}
}
return narr;
}


let parr=[1,2,[3,4,5,[6,7,8,9]],[10,11],12,13];
console.log(flattenarr(parr));

let sum=flattenarr(parr);




// function flatten(obj,prefix=''){
// let nobj={};
// for(let key in obj){
// if(typeof(obj[key])=='object' &&  !Array.isArray(obj[key])){
//  if(prefix) temp= flatten(obj[key],(prefix+'-'+ key));
//  else {
//     temp=flatten(obj[key],key);   
// 	}
// nobj={...nobj,...temp};
// }else{
//  if(prefix) nobj[prefix+'-'+key]=obj[key];
//  else nobj[key]=obj[key];
// }
// }
// return nobj;
// } 

// let obj={
//   name:'saran',
//   address:{
//     city:'madurai',
//     state:'TN',
//     House:{
//       no:1,
//       floor:'ground',
//       dog:'no',
//       pincode:'625016'
//     }
//   }
// }
  
// console.log(flatten(obj));  






// function group(arr){
// let res={};
// for(let i=0;i<arr.length;i++){
//   let key=arr[i].city;
//   if(res[key]) res[key].push(arr[i]);
//   else res[key]=[arr[i]];
// }
//   return res;
// }

// let arr=[{name:'saran',
//   age:26,
//   city:'madurai'
// },
// {
//   name:'burfa',
//   age:20,
//   city:'chennai'
// },{
//   name:'kapra',
//   age:25,
//   city:'madurai'
// }];
// console.log(group(arr));



Array.prototype.myMap=function(fun,array){
    let newarr=[];
    for(let i=0;i<this.length;i++){
        var tmp=fun(this[i],i,this);
        console.log(tmp);
        newarr.push(tmp);
    }
    return newarr;
}

var fun=(ele,ind,array)=>{
    return ele*ind;
}



let sum1=sum.myMap();
console.log(sum1);
