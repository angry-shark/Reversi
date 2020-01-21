class StartGame extends eui.Component implements  eui.UIComponent {
	//开始游戏按钮
	public btn_startgame:eui.Button;
	//游戏记录按钮
	public btn_Record:eui.Button;

	//声明单例
	private static shared:StartGame;
	public static Shared():StartGame{
		if(StartGame.shared==null){
			StartGame.shared=new StartGame();
		}
		return StartGame.shared;
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
		this.init();
	}
	private init(){
		this.btn_startgame.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
		this.btn_Record.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gotoRecord,this);
	}
	//进入游戏记录页面
	private gotoRecord(){
		this.parent.addChild(gameRecord.Shared());
		console.log(Data.getNowTime()+" 得分:"+Data.Score)
		this.parent.removeChild(this);
	}
	//开始游戏
	private startGame(){
		this.parent.addChild(new levelNormal());
		this.parent.removeChild(this);
	}
}