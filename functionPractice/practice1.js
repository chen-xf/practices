//判断一个数是否为素数（质数）
function isPrimeNumber(num){
	for(var i=2;i<num;i++){
		if(num%i==0){
			return false;
		}//end if
	}//end for
	return true;
}
console.log(isPrimeNumber(8)?"是素数":"不是素数");



//求一组数字中的最大值
//var arr=[10,23,45,1,32,12];
function getMaxNumber(arr){
	var max=arr[0];//此行要写在for循环之前，以确定传入的是一个数组
	for(var i=0;i<arr.length;i++){
		if(max<arr[i]){//若arr[i]的值比max大，则将max的值改为arr[i]
			max=arr[i];
		}
	}
	return max;
}
console.log(getMaxNumber([13,21,2,43,22,10]));




//求一个数组中的最大值和最小值还有和，以数组方式输出
/*
arr1参数是一个数组
返回值是一个数组（最大值，最小值，和）

*/
function getMaxMinSum(arr1){
	var max1=arr1[0];//最大值
	var min1=arr1[0];//最小值
	var sum1=0;//和
	for(var i=0;i<arr1.length;i++){
		//判断最大值
		if(max1<arr1[i]){
			max1=arr1[i];
		}
		//判断最小值
		if(min1>arr1[i]){
			min1=arr1[i];
		}
		//求和
		sum1 += arr1[i];
	}
	return [max1,min1,sum1];
}
var resultArr=getMaxMinSum([2,5,1,6,7,3]);
console.log(resultArr);



//通过函数实现冒泡排序
function sortArray(arr){
	//控制比较的轮数
	for(var i=0;i<arr.length-1;i++){
		//控制每轮比较的次数
		for(var j=0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
				var temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
	}
	return arr;
}
console.log(sortArray([10,0,20,50,30]));



//求斐波那契数列
function feiArray(num){//参数为要求的第几月份的和
	var num1=1;//一月为1
	var num2=1;//二月为1
	var sum=0;//求和
	for(var i=3;i<=num;i++){//从第三月开始循环，直到传入的月份
		sum=num1+num2;//和为上一个月的和加上上一个月的和
		num1=num2;
		num2=sum;
	}
	return sum;
}
console.log(feiArray(12));




//输入年月入，获取这个日期是这一年的第几天
function getDay(year,month,day){//输入参数为年（四位数）、月、日
	var days=day;//若输入的为1月，则直接输出天数
	var arr=[31,28,31,30,31,30,31,31,30,31,30,31];//用一个数组存储平年每个月天数
	for(var i=0;i<month-1;i++){
		days+=arr[i];
	}
	if(month>2&&year%4==0&&year%100!=0||year%400==0){
		days++;//若输入的为闰年，且输入的月份大于2月，则应该加1天
	}
	return days;
}
console.log(getDay(2020,4,1));



//一个不知道有多少参数的函数，求出这些参数的和
//使用arguments数组--->伪数组
function sumArray(){
	var sum=0;
	for(var i=0;i<arguments.length;i++){
		sum+=arguments[i];
	}
	return sum;
}
console.log(sumArray(10,20,30,40));