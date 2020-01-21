class Data {
	public constructor() {
	}
	//声明一个点击成功的函数
	//声明盒子的宽
	private static _width:number =0;
	public static get_width():number{
		if(Data._width==0){
			Data._width=640
		}
		return Data._width
	}
	//声明盒子的高
	private static _height:number =0;
	public static get_height():number{
		if(Data._height==0){
			Data._height=Main.Stage.stageHeight
		}
		return Data._height
	}
	//声明总行数
	public static _row():number{
		let result =Math.ceil(Data.get_height()/(Data.get_width()/Data.rowNumber));
		return result
	}
	//声明每一行的个数
	public static rowNumber:number =4;
	//声明分数
	private static  score:number=0
	public static get Score():number {
		return this.score
	}
	public static set Score(e:number){
		this.score=e;
		gameScore.Shared().setScore(e)
	}
	//获取当前的时间2020-1-21 17:33
	private static nowTime:string="";
	public static getNowTime():string{
			let a =new Date();
			let nowTime =a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+" "+a.getHours()+":"+a.getMinutes();
			return nowTime
	}
	//存储当前的成绩和时间
	/*private static timeAndAchievement:string=""
	public static get TimeAndAchievement():string{
		return this.TimeAndAchievement
	}
	public static set TimeAndAchievement(e:string){
		this.timeAndAchievement=e;
	}*/
}