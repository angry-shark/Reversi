class gameScore extends eui.Component implements  eui.UIComponent {
	public lb_Score:eui.Label;
	//声明单例
	private static shared:gameScore;
	public static Shared():gameScore{
		if(gameScore.shared==null){
			gameScore.shared=new gameScore();
		}
		return gameScore.shared;
	}
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init()
	}
	private init(){
		this.y-=Data.get_height()-this.parent.height
	}
	public setScore(val:number){
		let n =String(val)
		this.lb_Score.text=n;
	}
}