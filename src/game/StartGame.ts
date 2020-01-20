class StartGame extends eui.Component implements  eui.UIComponent {
	//开始游戏按钮
	public btn_startgame:eui.Button;

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
	}
	private startGame(){
		this.parent.addChild(new levelNormal());
		this.parent.removeChild(this);
	}
}